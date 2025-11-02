import Link from 'next/link';
import { BanknotesIcon, GiftIcon } from '@heroicons/react/24/solid';

export default function ReferralPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Referral Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Share Tenner Pages with friends and earn rewards while helping others get online!
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How Our Referral Program Works
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            It&apos;s simple: You refer friends, they save money, and you earn cash. Everyone wins!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Register as a Referrer</h3>
              <p className="text-gray-600">
                Fill out our contact form and check the box to become a referrer. We&apos;ll register your email address in our system.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Share Your Email</h3>
              <p className="text-gray-600">
                Tell your friends about Tenner Pages and give them your registered email address to use during their signup.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Paid!</h3>
              <p className="text-gray-600">
                When your friend makes their first payment, you receive 30% commission within 7 days. They get 10% off for 3 months!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* For Referrers */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <BanknotesIcon className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">For Referrers</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Earn 30% Commission</p>
                    <p className="text-gray-600 text-sm">On your friend&apos;s first monthly payment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Quick Payment</p>
                    <p className="text-gray-600 text-sm">Receive your commission within 7 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Unlimited Referrals</p>
                    <p className="text-gray-600 text-sm">No limits on how many people you can refer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Help Your Network</p>
                    <p className="text-gray-600 text-sm">Share an affordable solution with your community</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For New Clients */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <GiftIcon className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">For New Clients</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">10% Discount for 3 Months</p>
                    <p className="text-gray-600 text-sm">Automatically applied to your first 3 invoices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Trusted Recommendation</p>
                    <p className="text-gray-600 text-sm">Join through someone who knows our quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Same Great Service</p>
                    <p className="text-gray-600 text-sm">48-hour delivery, professional design, full support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">No Commitment Required</p>
                    <p className="text-gray-600 text-sm">Cancel anytime, no penalty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Earnings */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Your Earning Potential
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-gray-600 mb-2">If you refer</p>
              <p className="text-4xl font-bold text-blue-600 mb-2">3</p>
              <p className="text-gray-600 mb-4">clients with 5-page websites</p>
              <p className="text-2xl font-bold text-gray-900">You Earn: £45</p>
              <p className="text-sm text-gray-500 mt-2">(3 × £50 × 30%)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center border-2 border-blue-600">
              <p className="text-gray-600 mb-2">If you refer</p>
              <p className="text-4xl font-bold text-blue-600 mb-2">10</p>
              <p className="text-gray-600 mb-4">clients with 5-page websites</p>
              <p className="text-2xl font-bold text-gray-900">You Earn: £150</p>
              <p className="text-sm text-gray-500 mt-2">(10 × £50 × 30%)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-gray-600 mb-2">If you refer</p>
              <p className="text-4xl font-bold text-blue-600 mb-2">20</p>
              <p className="text-gray-600 mb-4">clients with 5-page websites</p>
              <p className="text-2xl font-bold text-gray-900">You Earn: £300</p>
              <p className="text-sm text-gray-500 mt-2">(20 × £50 × 30%)</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            Earnings vary based on website size. Larger websites = Higher commissions!
          </p>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Terms & Conditions
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">For Referrers:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You must register as a referrer through our contact form</li>
                <li>Your email address will be registered in our system for referrals</li>
                <li>You earn 30% commission on the referred client&apos;s first monthly payment only</li>
                <li>Payment is sent within 7 days after the referred client&apos;s first payment is received</li>
                <li>Referred client must be a new customer (not an existing Tenner Pages client)</li>
                <li>Referred client must provide your registered email address during signup</li>
                <li>Commission is paid via PayPal, Bank Transfer, or Stripe</li>
                <li>There is no limit to how many people you can refer</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">For New Clients:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You receive 10% discount on your first 3 monthly payments</li>
                <li>Discount is automatically applied to your invoices</li>
                <li>You must provide the referrer&apos;s registered email address during signup</li>
                <li>Must be a new customer (not an existing Tenner Pages client)</li>
                <li>All standard service terms apply</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">General Terms:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Tenner Pages reserves the right to verify all referrals</li>
                <li>We reserve the right to refuse fraudulent or suspicious referrals</li>
                <li>Program terms may be modified with 30 days notice</li>
                <li>Both referrer and new client must comply with our Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 text-lg mb-2">How do I become a referrer?</h3>
              <p className="text-gray-700">
                Simply visit our <Link href="/contact" className="text-blue-600 underline">contact page</Link>, fill out the form,
                and check the box that says &quot;I want to become a referrer.&quot; We&apos;ll register your email address and
                confirm your registration within 24 hours.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 text-lg mb-2">How do my friends use my referral?</h3>
              <p className="text-gray-700">
                Once you&apos;re registered, share your registered email address with friends. When they sign up through our
                contact form, they&apos;ll enter your email in the &quot;Referred by&quot; field. That&apos;s it!
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 text-lg mb-2">When do I get paid?</h3>
              <p className="text-gray-700">
                You receive your commission within 7 days after your referred friend makes their first monthly payment.
                We&apos;ll send you an email notification when the payment is processed.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 text-lg mb-2">How is the commission calculated?</h3>
              <p className="text-gray-700">
                Commission is 30% of the first month&apos;s payment. For example: 3-page site (£30/month) = £9 commission.
                5-page site (£50/month) = £15 commission. 10-page site (£100/month) = £30 commission.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Is there a limit to referrals?</h3>
              <p className="text-gray-700">
                No! You can refer as many people as you like. There&apos;s no cap on your earnings.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Do I need to be a Tenner Pages client to refer?</h3>
              <p className="text-gray-700">
                No, you don&apos;t need to be an existing client. Anyone can register as a referrer and start earning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Register as a referrer today and start sharing the affordable website solution your network needs!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-10 py-5 rounded-lg text-xl font-bold hover:bg-blue-50 transition-colors shadow-2xl"
          >
            Become a Referrer Now
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
