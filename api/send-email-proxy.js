// pages/api/send-email-proxy.js
// const { sts_v1 } = require('@googleapis/sts');
import { ExternalAccountClient } from 'google-auth-library';
const { getVercelOidcToken } = require('@vercel/functions/oidc');

// --- Vercel Environment Variables ---
// (You set these in Vercel's dashboard)
const workloadIdentityProvider = process.env.GCP_WORKLOAD_IDENTITY_PROVIDER;
const serviceAccountEmail = process.env.GCP_SERVICE_ACCOUNT_EMAIL;

// Your private Cloud Run API URL
const cloudRunUrl = `https://volumetryx-api-${process.env.GCP_PROJECT_NUMBER}.us-central1.run.app`;

// Initialize Google clients
// const stsClient = new sts_v1.Sts();
// const stsClient = google.sts('v1');

async function getGoogleIdToken() {
    
  const vercelOidcToken = await getVercelOidcToken();

  if (!vercelOidcToken) {
    console.error("VERCEL_OIDC_TOKEN is not available inside handler. Ensure OIDC is enabled in Vercel settings.");
    throw new Error('OIDC token not configured for this request.');
  }

  console.log("Vercel OIDC Token acquired. ", vercelOidcToken);
  console.log("Audience ", `//iam.googleapis.com/projects/${process.env.GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${process.env.GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`);
  console.log("STS audience:", process.env.GCP_PROJECT_NUMBER, process.env.GCP_WORKLOAD_IDENTITY_POOL_ID, process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID);


  // 1. Exchange the Vercel OIDC token for a Google Access Token
// const stsResponse = await stsClient.v1.token({
//   requestBody: {
//     audience: `//iam.googleapis.com/projects/${process.env.GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${process.env.GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`,
//     grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
//     requestedTokenType: 'urn:ietf:params:oauth:token-type:access_token',
//     subjectTokenType: 'urn:ietf:params:oauth:token-type:jwt',
//     subjectToken: vercelOidcToken,
//   },
// });

const audience = 'sts.googleapis.com';
const vercelToken = await getVercelOidcToken(audience);

const authClient = ExternalAccountClient.fromJSON({
    type: 'external_account',
    audience: `//iam.googleapis.com/projects/${process.env.GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${process.env.GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`,
    subjectTokenType: 'urn:ietf:params:oauth:token-type:jwt',
    tokenUrl: 'https://sts.googleapis.com/v1/token',
    serviceAccountImpersonationUrl: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${serviceAccountEmail}:generateAccessToken`,
    subject_token_supplier: {
        getSubjectToken: getVercelOidcToken,
    },
});

// console.log("STS Response data:", stsResponse.data);
//   const googleAccessToken = stsResponse.accessToken;

//   // 2. Use the Google Access Token to impersonate the service account
//   //    and generate a Google ID Token for Cloud Run.
//   const idTokenClient = await auth.getIdTokenClient(cloudRunUrl);
  
//   // Set the client to use the Access Token we just got
//   idTokenClient.getRequestHeaders = async () => {
//     return {
//       Authorization: `Bearer ${googleAccessToken}`,
//     };
//   };

//   // Get the ID token
//   const headers = await idTokenClient.getRequestHeaders(cloudRunUrl);
//   // The 'Authorization' header now contains 'Bearer [Google ID Token]'
//   return headers.Authorization;

console.log("STS Response:");
const googleAccessToken = authClient.getAccessToken().token;
  if (!googleAccessToken) throw new Error('Failed to get Google access token from STS.');

  // 2. Impersonate your service account to get an ID token for Cloud Run
  const resp = await fetch(
    `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${process.env.GCP_SERVICE_ACCOUNT_EMAIL}:generateIdToken`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${googleAccessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        audience: `https://volumetryx-api-${process.env.GCP_PROJECT_NUMBER}.us-central1.run.app`,
        includeEmail: true,
      }),
    }
  );
  const { token } = await resp.json();
  return `Bearer ${token}`;

}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

//   if (!vercelOidcToken) {
//     console.error("VERCEL_OIDC_TOKEN is not available. Ensure OIDC is enabled in Vercel settings.");
//     return res.status(500).json({ error: 'OIDC token not configured.' });
//   }

  try {
    console.log('VERCEL_IDENTITY_URL:', process.env.VERCEL_IDENTITY_URL);

    const token = await getVercelOidcToken();
    const [, payload] = token.split('.');
    console.log(JSON.parse(Buffer.from(payload, 'base64').toString()));

    // 1. Get the Google ID token (this performs the keyless auth flow)
    const googleIdTokenHeader = await getGoogleIdToken();

    // 2. Call your private Cloud Run API
    const response = await fetch(`${cloudRunUrl}/api/send_email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': googleIdTokenHeader, // Pass the Google ID Token
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend API error:", errorText);
      throw new Error(`Backend API responded with ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error("Error in keyless auth flow:", error.message);
    res.status(500).json({ error: 'Failed to call backend service.' });
  }
}