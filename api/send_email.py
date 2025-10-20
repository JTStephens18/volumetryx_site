from flask import Flask, request, jsonify
import os
import resend
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

@app.route('/api/send_email', methods=['POST'])
def send_email():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        company = data.get('company')
        phone = data.get('phone')
        propertyType = data.get('propertyType')

        resend.api_key = os.environ.get("RESEND_API_KEY")
        business_email = os.environ.get("BUSINESS_EMAIL")

        params = {
            "from": "Submission Form <info@volumetryxlabs.com>", # Must be a verified domain on Resend
            "to": [business_email],
            "subject": f"New Contact Form Submission from {name}",
            "html": f"<strong>Name:</strong> {name}<br><strong>Email:</strong> {email}<br> <strong>Company: {company}</strong><br> <strong>Phone: {phone} </strong><br> <strong>Property: {propertyType} </strong><br><strong>Message:</strong> {message}",
        }
        
        email_sent = resend.Emails.send(params)
        return jsonify({"status": "success", "id": email_sent['id']}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == "__main__":
    # Only run the server locally, not on Vercel
    app.run(host="0.0.0.0", port=8000, debug=True)