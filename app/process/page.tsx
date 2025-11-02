import Link from 'next/link';

export default function ProcessPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Simple 4-Step Process</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Getting your professional website live is straightforward and fast. Here&apos;s exactly how it works.
          </p>
        </div>
      </section>

      {/* The Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Kick-off</h3>
                <p className="text-gray-600 text-lg mb-4">
                  Send us a quick message or email to confirm how many pages you need and your main business goals.
                  We&apos;ll discuss your vision, target audience, and any specific requirements you have for your website.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">What we discuss:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Number of pages needed</li>
                    <li>Your business goals and target audience</li>
                    <li>Design preferences and color schemes</li>
                    <li>Any specific features or functionality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-blue-200"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">You Provide Content</h3>
                <p className="text-gray-600 text-lg mb-4">
                  You send us the final text, images, and logo for your website. This is where the 2-day countdown begins!
                  The more prepared your content is, the smoother and faster the process.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">Need help? Try our £10 offer:</p>
                  <p className="text-gray-700 mt-2">
                    Don&apos;t have everything ready? Our <Link href="/trial-offer" className="text-blue-900 underline font-semibold">£10 Trial Offer</Link> lets
                    you share what you have in mind, and we&apos;ll help clarify everything before you commit to the full service.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-blue-200"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The 48-Hour Build</h3>
                <p className="text-gray-600 text-lg mb-4">
                  Our expert team gets to work building your professional, mobile-responsive website. We craft every page
                  with attention to detail, ensuring fast loading speeds, security, and a beautiful design that represents your brand.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">What happens during the build:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Professional design implementation</li>
                    <li>Mobile-responsive layout optimization</li>
                    <li>Performance and speed optimization</li>
                    <li>SEO-friendly structure setup</li>
                    <li>SSL certificate installation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-1 h-12 bg-blue-200"></div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Review & Launch</h3>
                <p className="text-gray-600 text-lg mb-4">
                  We send you a private preview link so you can review your new website. Once you give us the thumbs up,
                  we make it live on your domain. Your business is now online and ready to attract customers!
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="text-green-900 font-semibold">✓ Your website is live!</p>
                  <p className="text-gray-700 mt-2">
                    After launch, we continue to provide hosting, security updates, backups, and technical support as part of your monthly service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            How Payment Works
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Simple, secure, and transparent. Here&apos;s our straightforward payment process:
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Contact Us with Your Project Details</h3>
                <p className="text-gray-700">
                  Use our contact form to tell us about your project. We&apos;ll respond within 24 hours to discuss your needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">We Discuss & Provide a Clear Quote</h3>
                <p className="text-gray-700">
                  We&apos;ll clarify your requirements (number of pages, content readiness, specific needs) and give you an exact quote.
                  For example: &quot;Your 5-page website will be £50/month.&quot;
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Receive Your Secure Payment Link</h3>
                <p className="text-gray-700">
                  Once you&apos;re ready to proceed, we&apos;ll send you a secure payment link via email.
                  No need to enter card details on our website - everything is handled through trusted payment processors.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Your 48-Hour Build Begins</h3>
                <p className="text-gray-700">
                  After payment is received, we immediately start building your website.
                  You&apos;ll have your professional site live within 48 hours!
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">We Accept Multiple Payment Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl mb-2">💳</div>
                <p className="font-semibold text-gray-900">Credit/Debit Cards</p>
                <p className="text-gray-600 text-sm">Via Stripe - Secure & Instant</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl mb-2">🏦</div>
                <p className="font-semibold text-gray-900">Bank Transfer</p>
                <p className="text-gray-600 text-sm">Direct to UK Account</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl mb-2">💰</div>
                <p className="font-semibold text-gray-900">PayPal</p>
                <p className="text-gray-600 text-sm">Fast & Convenient</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              All payments are processed securely. We never store your payment details.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Payment Questions</h3>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">When do I pay?</h4>
              <p className="text-gray-600">
                Payment is required upfront before we begin your 48-hour build. This ensures we can dedicate our full attention to your project immediately.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Is my payment secure?</h4>
              <p className="text-gray-600">
                Absolutely! We use industry-standard payment processors (Stripe and PayPal) with bank-level encryption. We never see or store your card details.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">How does the monthly billing work?</h4>
              <p className="text-gray-600">
                After your initial payment, we&apos;ll set up a simple monthly subscription. You&apos;ll receive an invoice each month via email.
                You can cancel anytime with no penalty - just let us know before your next billing date.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">What if I&apos;m not ready to pay yet?</h4>
              <p className="text-gray-600">
                No problem! Try our <Link href="/trial-offer" className="text-blue-600 underline font-semibold">£10 Trial Offer</Link> first.
                We&apos;ll create a mockup so you can see exactly what you&apos;re getting before committing to the full service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Your Key to a Fast Launch
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Before the 2-day clock starts, we need these items from you:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">The final text for each page</h3>
                  <p className="text-gray-600">All written content, headlines, and descriptions ready to go</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Your logo file</h3>
                  <p className="text-gray-600">High-quality logo in PNG, SVG, or similar format</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Any specific images you want to use</h3>
                  <p className="text-gray-600">Photos, graphics, or illustrations for your pages</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Access to your domain name settings</h3>
                  <p className="text-gray-600">So we can point your domain to your new website</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Are these not so easy?</h3>
            <p className="text-blue-100 text-lg mb-6">
              Don&apos;t worry! Our £10 Trial Offer is perfect if you&apos;re still figuring things out.
              Share your ideas with us, and we&apos;ll help you get organized before starting the full build.
            </p>
            <Link
              href="/trial-offer"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Learn About £10 Trial Offer
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s get your website live in just 48 hours!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
