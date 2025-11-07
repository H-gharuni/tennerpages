"use client";

import Link from 'next/link';
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  CurrencyPoundIcon,
  ClockIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  LockClosedIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Attractive White Box */}
      <section className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle, rgb(59 130 246 / 0.08) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />

        <div className="relative container mx-auto px-4 sm:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-center">
              {/* Badge */}
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium text-gray-700 text-sm">
                    Trusted by 20+ UK Businesses
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl leading-tight md:text-5xl lg:text-6xl mb-6 font-bold text-blue-gray-900">
                Your Professional Website{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
                  in Just 2 Days
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-gray-600 text-lg md:text-xl mb-8">
                From <span className="font-semibold text-blue-600">£10 per page, per month</span>.
                No huge upfront costs, no technical headaches.
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-4 sm:flex-row justify-center mb-8">
                <Link href="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center gap-3">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
                <Link href="/trial-offer">
                  <button className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors border-2 border-blue-600">
                    Try £10 Trial
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-blue-500" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-blue-500" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-blue-500" />
                  <span>48-Hour Launch</span>
                </div>
              </div>
            </div>

            {/* Right Side - Attractive White Box */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Floating Badge 1 - Top Right */}
                <div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap z-10 animate-bounce"
                  style={{ animationDuration: '3s' }}
                >
                  ⚡ 48hr Delivery
                </div>

                {/* Floating Badge 2 - Middle Left */}
                <div
                  className="absolute top-1/3 -left-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap z-10 animate-bounce"
                  style={{ animationDuration: '3.5s', animationDelay: '1s' }}
                >
                  🔒 SSL Included
                </div>

                {/* Floating Badge 3 - Bottom Left */}
                <div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap z-10 animate-bounce"
                  style={{ animationDuration: '4s', animationDelay: '0.5s' }}
                >
                  📱 Mobile Ready
                </div>

                <Card className="w-full max-w-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white">
                  <CardBody className="p-6">
                  {/* Star Rating */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <Typography variant="small" className="text-center text-gray-600 mb-4">
                    Rated 4.9/5 by 50+ businesses worldwide
                  </Typography>

                  {/* Special Offer Badge */}
                  <div className="bg-gradient-to-r text-white rounded-lg p-5 mb-5" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
                    <Typography variant="h3" color="white" className="text-center mb-1">
                      £10
                      <span className="text-lg font-normal">/page/month</span>
                    </Typography>
                    <Typography variant="small" color="white" className="text-center opacity-90">
                      Launch your website in 48 hours
                    </Typography>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-5">
                    {[
                      "Professional design & development",
                      "Free SSL & secure hosting",
                      "Mobile-responsive design",
                      "No setup fees or contracts",
                      "Cancel anytime, no penalty"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <Typography className="text-gray-700 text-sm">
                          {benefit}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button in Box */}
                  <Link href="/contact" className="block">
                    <Button
                      size="lg"
                      color="blue"
                      className="w-full flex items-center justify-center gap-3"
                      fullWidth
                    >
                      Start Your Project Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </Link>

                  {/* Small print */}
                  <Typography variant="small" className="text-center text-gray-500 mt-4">
                    No credit card required to get started
                  </Typography>
                </CardBody>
              </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { count: "20+", title: "Happy Clients" },
              { count: "48hrs", title: "Delivery Time" },
              { count: "100%", title: "Satisfaction" },
              { count: "£10", title: "Per Page/Month" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <Typography variant="h2" color="blue" className="mb-2">
                  {stat.count}
                </Typography>
                <Typography className="text-gray-600">{stat.title}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-8 py-20">
        <div className="mb-16 text-center">
          <Typography variant="h6" color="blue" className="mb-3">
            Simple Process
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            From Idea to Launch in 3 Steps
          </Typography>
          <Typography className="mx-auto max-w-2xl text-gray-600">
            We've made it incredibly easy to get your professional website online
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: RocketLaunchIcon,
              title: "Share Your Vision",
              desc: "Tell us about your business and provide your content. We'll guide you every step of the way.",
            },
            {
              icon: Cog6ToothIcon,
              title: "We Build It",
              desc: "Our team creates a professional, mobile-friendly website in just 48 hours.",
            },
            {
              icon: CloudArrowUpIcon,
              title: "Launch & Grow",
              desc: "Review, approve, and go live. Your website is ready to attract customers.",
            },
          ].map((step, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow">
              <CardBody className="text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 mx-auto">
                  <step.icon className="h-7 w-7 text-blue-600" />
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-3">
                  {step.title}
                </Typography>
                <Typography className="text-gray-600">
                  {step.desc}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-8">
          <div className="mb-16 text-center">
            <Typography variant="h6" color="blue" className="mb-3">
              Everything Included
            </Typography>
            <Typography variant="h2" color="blue-gray" className="mb-4">
              All Essentials for Your Success
            </Typography>
            <Typography className="mx-auto max-w-2xl text-gray-600">
              Your monthly fee includes everything you need to succeed online
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: BoltIcon, title: "Fast Hosting", desc: "99.9% uptime guarantee", color: "text-blue-600" },
              { Icon: LockClosedIcon, title: "SSL Security", desc: "Free HTTPS certificate", color: "text-green-600" },
              { Icon: CircleStackIcon, title: "Daily Backups", desc: "Your data protected", color: "text-purple-600" },
              { Icon: WrenchScrewdriverIcon, title: "Expert Support", desc: "We're here to help", color: "text-orange-600" },
              { Icon: DevicePhoneMobileIcon, title: "Mobile Ready", desc: "Perfect on all devices", color: "text-indigo-600" },
              { Icon: RocketLaunchIcon, title: "Fast Loading", desc: "Optimized for speed", color: "text-red-600" },
              { Icon: ArrowPathIcon, title: "Updates Included", desc: "Always up to date", color: "text-teal-600" },
              { Icon: ChartBarIcon, title: "SEO Friendly", desc: "Built for search", color: "text-cyan-600" },
            ].map((feature, idx) => (
              <div key={idx} className="rounded-lg bg-white p-6 hover:shadow-md transition-shadow text-center">
                <div className="mb-3 flex justify-center">
                  <feature.Icon className={`h-12 w-12 ${feature.color}`} />
                </div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography className="text-gray-600 text-sm">
                  {feature.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-20" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="container mx-auto px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Typography variant="h2" color="white" className="mb-6">
              Simple, Transparent Pricing
            </Typography>
            <div className="rounded-2xl bg-white/10 p-10 backdrop-blur-sm">
              <Typography variant="h1" color="white" className="mb-4">
                £10
                <span className="text-3xl font-normal opacity-90">/page/month</span>
              </Typography>
              <Typography color="white" className="mb-8 opacity-90">
                No hidden fees. No surprises. Just honest pricing.
              </Typography>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/offer">
                  <Button size="lg" color="white" variant="filled">
                    View Full Pricing
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" color="white" variant="outlined">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Typography variant="h2" color="blue-gray" className="mb-6">
            Ready to Launch Your Website?
          </Typography>
          <Typography className="mb-10 text-gray-600 text-lg">
            Join successful businesses who trusted us. Get your site live in 48 hours.
          </Typography>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors flex items-center gap-3">
                Start Your Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
            <Link href="/trial-offer">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Try £10 Trial First
              </button>
            </Link>
          </div>
          <Typography className="mt-8 text-gray-500 text-sm">
            Questions? Email{" "}
            <a href="mailto:info@tennerpages.com" className="text-blue-600 hover:underline">
              info@tennerpages.com
            </a>
          </Typography>
        </div>
      </section>
    </div>
  );
}
