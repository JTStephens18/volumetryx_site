import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Prevent multiple submissions
  if (hasSubmitted) return;

  try {
    const response = await fetch('/api/send-email-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      // alert('Your demo request has been sent successfully!');
      console.log('Email sent:', result);
      setHasSubmitted(true);
    } else {
      console.error('Error sending email:', result.error);
      // alert('Failed to send your request. Please try again.');
    }
  } catch (error) {
    console.error('Request error:', error);
    // alert('Something went wrong. Please try again later.');
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
              Ready to Showcase Your Product in Its True Light?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how Volumetryx Labs can transform your e-commerce marketing and help you sell faster.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">
                  What You Get
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free consultation and product assessment</li>
                  <li>• Custom quote based on your specific needs</li>
                  <li>• Demo of our 3D technology capabilities</li>
                  {/* <li>• Timeline and project roadmap</li> */}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg mb-2 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>📧 <a href="mailto:info@volumetryxlabs.com">info@volumetryxlabs.com</a></p>
                  <p>🏢 Birmingham, AL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl mb-6 text-gray-900">
              Schedule Your Demo
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="propertyType">Product Type</Label>
                <Input
                  id="propertyType"
                  name="propertyType"
                  type="text"
                  // placeholder="e.g., Single Family Home, Condo, Commercial"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project and goals..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={hasSubmitted}
              >
                {hasSubmitted ? 'Request Sent!' : 'Schedule a Demo'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;