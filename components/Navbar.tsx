'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Tenner Pages Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-blue-900">Tenner Pages</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link href="/offer" className="text-gray-700 hover:text-blue-900 transition-colors">
              The Offer
            </Link>
            <Link href="/process" className="text-gray-700 hover:text-blue-900 transition-colors">
              Our Process
            </Link>
            <Link href="/showcase" className="text-gray-700 hover:text-blue-900 transition-colors">
              Showcase
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </Link>
            <Link
              href="/trial-offer"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              £10 Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/offer"
                className="text-gray-700 hover:text-blue-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                The Offer
              </Link>
              <Link
                href="/process"
                className="text-gray-700 hover:text-blue-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Process
              </Link>
              <Link
                href="/showcase"
                className="text-gray-700 hover:text-blue-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Showcase
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/trial-offer"
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                £10 Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
