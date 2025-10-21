// api/send-email-proxy.js
import { SecurityTokenServiceClient } from '@googleapis/sts';
import { GoogleAuth } from 'google-auth-library';

// These are the env vars you just set in Vercel
const workloadIdentityProvider = process.env.GCP_WORKLOAD_IDENTITY_PROVIDER;
const serviceAccountEmail = process.env.GCP_SERVICE_ACCOUNT_EMAIL;
const projectId = process.env.GCP_PROJECT_ID;

// This token is automatically provided by Vercel when OIDC is enabled
const vercelOidcToken = process.env.VERCEL_OIDC_TOKEN;

// The URL of your private Cloud Run API
const cloudRunUrl = `https://volumetryx-api-${projectId}.us-central1.run.app`;

// Initialize Google clients
const stsClient = new SecurityTokenServiceClient();
const auth = new GoogleAuth();

async function getGoogleIdToken() {
  // 1. Exchange the Vercel OIDC token for a Google Access Token
  const [stsResponse] = await stsClient.exchangeToken({
    audience: `//iam.googleapis.com/${workloadIdentityProvider}`,
    grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
    requestedTokenType: 'urn:ietf:params:oauth:token-type:access_token',
    subjectTokenType: 'urn:ietf:params:oauth:token-type:jwt',
    subjectToken: vercelOidcToken,
  });
  const googleAccessToken = stsResponse.accessToken;

  // 2. Use the Google Access Token to impersonate the service account
  //    and generate a Google ID Token for Cloud Run.
  const idTokenClient = await auth.getIdTokenClient(cloudRunUrl);
  
  // Set the client to use the Access Token we just got
  idTokenClient.getRequestHeaders = async () => {
    return {
      Authorization: `Bearer ${googleAccessToken}`,
    };
  };

  // Get the ID token
  const headers = await idTokenClient.getRequestHeaders(cloudRunUrl);
  // The 'Authorization' header now contains 'Bearer [Google ID Token]'
  return headers.Authorization;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!vercelOidcToken) {
    console.error("VERCEL_OIDC_TOKEN is not available. Ensure OIDC is enabled in Vercel settings.");
    return res.status(500).json({ error: 'OIDC token not configured.' });
  }

  try {
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