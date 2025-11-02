import Link from 'next/link';
import { LightBulbIcon, CheckBadgeIcon, CurrencyPoundIcon } from '@heroicons/react/24/solid';

export default function TrialOfferPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm mb-4">
            ⚡ LIMITED RISK OFFER
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            See Your Website Vision<br />
            For Just £10
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Not ready to commit? No problem! We&apos;ll create a mockup of your website for just £10.
            If you love it and proceed with us, the £10 is credited to your first payment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Your £10 Trial
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How the £10 Trial Works
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            We understand that starting a website can feel overwhelming. That&apos;s why we created this low-risk way to see your vision come to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Share Your Ideas</h3>
              <p className="text-gray-600">
                Tell us what you have in mind - your business, your goals, your rough ideas. Don&apos;t worry if it&apos;s not perfect!
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">We Ask Questions</h3>
              <p className="text-gray-600">
                We&apos;ll ask clarifying questions to understand exactly what you need and help refine your vision.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">See Your Mockup</h3>
              <p className="text-gray-600">
                We create a temporary website mockup at tennerpages.com/yourwebsite for you to review and explore.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Decide Your Next Step</h3>
              <p className="text-gray-600">
                Love it? Proceed with us and the £10 is credited. Not ready? You&apos;ve only invested £10 to see your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose the £10 Trial?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <LightBulbIcon className="h-16 w-16 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Clarify Your Vision</h3>
              <p className="text-gray-600 text-lg">
                Not sure exactly what you want? We&apos;ll help you organize your thoughts and create a clear plan for your website.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <CheckBadgeIcon className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Zero Risk Testing</h3>
              <p className="text-gray-600 text-lg">
                See exactly what you&apos;re getting before making a full commitment. Only £10 to test drive our service and quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <CurrencyPoundIcon className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Money Back Value</h3>
              <p className="text-gray-600 text-lg">
                If you proceed with the full service, your £10 is credited to your first month. It&apos;s essentially free!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What You Get for £10
          </h2>
          <div className="space-y-4">
            {[
              { title: 'Initial Consultation', desc: 'A detailed conversation to understand your business, goals, and website needs' },
              { title: 'Expert Guidance', desc: 'Professional advice on what pages you need, content structure, and design direction' },
              { title: 'Temporary Website Mockup', desc: 'A live preview of your website hosted at tennerpages.com/yourwebsite' },
              { title: 'Clarification Sessions', desc: 'As many questions as needed to ensure we understand your vision perfectly' },
              { title: 'No Obligation', desc: 'Absolutely no pressure to continue. The decision is entirely yours' },
              { title: 'Full Credit if You Proceed', desc: 'Your £10 is fully credited to your first payment if you choose our full service' },
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            This Trial Is Perfect If You...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Have a business idea but aren\'t sure how to present it online',
              'Want to see the quality of our work before committing',
              'Don\'t have all your content ready yet',
              'Need help organizing your thoughts and website structure',
              'Want professional guidance without a big upfront investment',
              'Are comparing different web design services',
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Traditional Agency vs. Our £10 Trial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Traditional Web Agency</h3>
              <ul className="space-y-4">
                {[
                  { text: 'Initial consultation fee', icon: '❌' },
                  { text: '£1,000-£5,000 upfront', icon: '❌' },
                  { text: 'Long contracts required', icon: '❌' },
                  { text: 'Weeks or months to see results', icon: '❌' },
                  { text: 'Complex proposals & meetings', icon: '❌' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="mr-3 text-2xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Trial */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our £10 Trial Offer</h3>
              <ul className="space-y-4">
                {[
                  { text: 'Only £10 to get started', icon: '✅' },
                  { text: 'See your mockup website', icon: '✅' },
                  { text: 'No obligation to continue', icon: '✅' },
                  { text: 'Quick turnaround time', icon: '✅' },
                  { text: '£10 credited if you proceed', icon: '✅' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-900 font-medium">
                    <span className="mr-3 text-2xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What if I don\'t proceed after the £10 trial?',
                a: 'No problem at all! You keep the insights and clarity we helped you achieve for just £10. There\'s absolutely no pressure to continue.',
              },
              {
                q: 'How long does the trial take?',
                a: 'Typically 3-5 days from when you share your initial ideas to when we show you the mockup. We work at your pace.',
              },
              {
                q: 'Is the mockup a real website?',
                a: 'Yes! It\'s a temporary live website you can view and share. If you proceed, we refine it and move it to your domain.',
              },
              {
                q: 'Can I make changes during the trial?',
                a: 'The trial is for initial mockup creation. If you proceed with the full service, we\'ll make all necessary revisions during the main build.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
            ⚡ ONLY £10 TO GET STARTED
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to See Your Vision Come to Life?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Take the first step with zero risk. Let&apos;s create something amazing together!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-10 py-5 rounded-lg text-xl font-bold hover:bg-blue-50 transition-colors shadow-2xl"
          >
            Start Your £10 Trial Now
          </Link>
          <p className="mt-6 text-blue-100">
            Questions? Email us at{' '}
            <a href="mailto:info@tennerpages.com" className="underline font-semibold">
              info@tennerpages.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
