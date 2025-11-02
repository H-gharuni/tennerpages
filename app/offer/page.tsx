'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function OfferPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is there a minimum contract?',
      answer: 'No, there is no minimum contract. Our service operates on a rolling monthly basis. You can cancel at any time without penalty.',
    },
    {
      question: 'What happens if I cancel?',
      answer: 'If you decide to cancel, the service stops at the end of your billing period. You keep your domain name and all your content. We also offer a buyout option if you\'d like to take full ownership of your website files.',
    },
    {
      question: 'Do I need to buy my own domain name?',
      answer: 'Yes, you absolutely should own your domain name. This gives you full control over your online identity. We\'ll guide you through the process of purchasing one if you don\'t already have it.',
    },
    {
      question: 'What about a blog or an online shop?',
      answer: 'Blogs and e-commerce features require a dynamic website with a Content Management System (CMS), which is a separate project from our static website service. When you\'re ready to add these features, we can help you with a custom project.',
    },
    {
      question: 'Can I update my website content?',
      answer: 'Yes! Just send us your updates and we\'ll implement them for you. For frequent content updates, we can discuss upgrading to a CMS-based solution where you can manage content yourself.',
    },
    {
      question: 'What if I need more pages later?',
      answer: 'No problem! You can add more pages at any time. Each additional page is just £10 per month, following the same simple pricing model.',
    },
    {
      question: 'Do you provide content writing services?',
      answer: 'We don\'t provide content writing services directly, but we can connect you with our trusted partners who specialize in professional copywriting.',
    },
    {
      question: 'Is my website mobile-friendly?',
      answer: 'Absolutely! Every website we build is fully responsive and optimized for all devices - smartphones, tablets, and desktops.',
    },
    {
      question: 'What about SEO?',
      answer: 'All our websites are built with SEO best practices in mind, including proper meta tags, fast loading speeds, and clean code. For advanced SEO services, we can discuss additional options.',
    },
    {
      question: 'Can I see my website before it goes live?',
      answer: 'Yes! We\'ll send you a private preview link where you can review your website. Once you approve it, we\'ll make it live on your domain.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            No hidden fees, no complex contracts. Just a professional website for a clear monthly price.
          </p>
        </div>
      </section>

      {/* The Core Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              £10 Per Page, Per Month
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Simple pricing for static websites. Pay only for what you need.
            </p>
            <div className="bg-white rounded-lg p-6 inline-block shadow-md">
              <p className="text-gray-600 mb-2">Example: A 5-page website</p>
              <p className="text-5xl font-bold text-blue-900">£50<span className="text-2xl">/month</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What&apos;s Included in Your Monthly Fee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Professional Website Design', desc: 'Custom-designed to match your brand and business goals' },
              { title: 'High-Speed Managed Hosting', desc: 'Lightning-fast servers with 99.9% uptime guarantee' },
              { title: 'Free SSL Certificate (HTTPS)', desc: 'Secure connection for your visitors and better SEO' },
              { title: 'Regular Backups', desc: 'Automatic daily backups to protect your data' },
              { title: 'Security Updates', desc: 'We keep your site secure with regular security patches' },
              { title: 'Expert Technical Support', desc: 'Email support to help you with any questions' },
              { title: 'Mobile-Responsive Design', desc: 'Perfect display on all devices and screen sizes' },
              { title: 'Fast Loading Speeds', desc: 'Optimized for performance and user experience' },
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            What&apos;s NOT Included
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We believe in complete transparency. Here&apos;s what our static website service does not include:
          </p>
          <div className="space-y-4">
            {[
              { title: 'Content Management Systems (CMS)', desc: 'Our service is for static websites. If you need to update content frequently yourself, a CMS-based site is a separate custom project.' },
              { title: 'E-commerce Functionality', desc: 'Online shops require dynamic features and payment processing, which are available as custom projects.' },
              { title: 'Content Writing', desc: 'You provide the text and images. We can connect you with professional copywriters if needed.' },
              { title: 'Domain Name Purchase', desc: 'You need to purchase and own your domain name separately. We\'ll guide you through the process.' },
              { title: 'Logo Design', desc: 'We need you to provide your logo. If you need one created, we can recommend design partners.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg">
                <svg className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-900 transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Not sure yet? Try our £10 trial offer to see your vision come to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              href="/trial-offer"
              className="inline-block bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors border-2 border-white"
            >
              Try £10 Trial Offer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
