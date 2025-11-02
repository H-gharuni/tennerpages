import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Tenner Pages</h3>
            <p className="text-gray-400 mb-4">
              Your professional website in 2 days, for just £10 per page, per month.
              A Strategic Business Unit of Unique Tech Solution.
            </p>
            <p className="text-gray-400">
              <a href="mailto:info@tennerpages.com" className="hover:text-white transition-colors">
                info@tennerpages.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/offer" className="text-gray-400 hover:text-white transition-colors">
                  The Offer
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-400 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-gray-400 hover:text-white transition-colors">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/trial-offer" className="text-gray-400 hover:text-white transition-colors">
                  £10 Trial Offer
                </Link>
              </li>
              <li>
                <Link href="/referral" className="text-gray-400 hover:text-white transition-colors">
                  Referral Program
                </Link>
              </li>
              <li>
                <span className="text-gray-400">Website Design</span>
              </li>
              <li>
                <span className="text-gray-400">Hosting & Support</span>
              </li>
              <li>
                <span className="text-gray-400">SSL Certificates</span>
              </li>
              <li>
                <span className="text-gray-400">Regular Backups</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4">
            <p>
              &copy; {new Date().getFullYear()} Tenner Pages - A Strategic Business Unit of Unique Tech Solution. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
