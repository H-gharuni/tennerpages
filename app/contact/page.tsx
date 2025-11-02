'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    referredBy: '',
    wantToBeReferrer: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState({ name: '', email: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        // Store submitted data for success message
        setSubmittedData({ name: formData.name, email: formData.email });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          referredBy: '',
          wantToBeReferrer: false
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email us directly.');
      console.error('Contact form error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Build Your Website</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch and let&apos;s discuss how we can help bring your business online in just 48 hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your business and what you need for your website..."
                  />
                </div>

                {/* Referred By */}
                <div>
                  <label htmlFor="referredBy" className="block text-sm font-semibold text-gray-700 mb-2">
                    Referred by (optional)
                  </label>
                  <input
                    type="email"
                    id="referredBy"
                    name="referredBy"
                    value={formData.referredBy}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                    placeholder="Enter referrer's email address"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    If someone referred you, enter their email to give them credit (you'll get 10% off for 3 months!)
                  </p>
                </div>

                {/* Want to Become Referrer */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="wantToBeReferrer"
                    name="wantToBeReferrer"
                    checked={formData.wantToBeReferrer}
                    onChange={(e) => setFormData({ ...formData, wantToBeReferrer: e.target.checked })}
                    className="mt-1 h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                  />
                  <label htmlFor="wantToBeReferrer" className="ml-3 text-sm text-gray-700">
                    <span className="font-semibold">I want to become a referrer</span>
                    <p className="text-gray-500 mt-1">
                      Register as a referrer and earn 30% commission on the first month for every client you refer. <a href="/referral" className="text-blue-900 hover:underline" target="_blank">Learn more</a>
                    </p>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-lg">
                    <p className="font-semibold text-lg mb-2">Thank you, {submittedData.name}!</p>
                    <p className="text-sm">
                      We&apos;ve received your enquiry and sent a confirmation email to <span className="font-semibold">{submittedData.email}</span>.
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Error sending message</p>
                    <p className="text-sm mt-1">{errorMessage}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us Directly</h3>
                <a
                  href="mailto:info@tennerpages.com"
                  className="text-blue-900 text-lg hover:underline flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@tennerpages.com
                </a>
              </div>

              {/* What Happens Next */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">We&apos;ll reply within a few hours to confirm the details</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">We&apos;ll discuss your project requirements and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Once you provide content, we start the 48-hour build</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-900 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Your professional website goes live!</span>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Not Sure Yet?</h3>
                <p className="text-gray-700 mb-4">
                  Check out our £10 Trial Offer to see your website vision with minimal risk!
                </p>
                <a
                  href="/trial-offer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Learn About £10 Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Before You Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Do I need to have content ready?</h3>
              <p className="text-gray-600">
                Not necessarily! Contact us first to discuss your project. If you&apos;re not ready, our £10 Trial can help you organize everything.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">How quickly will you respond?</h3>
              <p className="text-gray-600">
                We typically respond within 2-4 hours during business hours (Monday-Friday, 9am-6pm GMT).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">What information should I include?</h3>
              <p className="text-gray-600">
                Tell us about your business, perhaps how many pages you need, and your main goals. Don&apos;t worry about being perfect - we&apos;ll guide you!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Can I schedule a call?</h3>
              <p className="text-gray-600">
                Yes! Mention in your message that you&apos;d prefer a call, and we&apos;ll arrange a convenient time to discuss your project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
