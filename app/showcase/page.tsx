import Link from 'next/link';
import Image from 'next/image';

export default function ShowcasePage() {
  const projects = [
    {
      id: 1,
      title: 'Your Website Here',
      description: 'This spot is waiting for your amazing website! Be one of the first to join our showcase and inspire future clients.',
      url: '/contact',
      isPlaceholder: true,
      image: null,
    },
    {
      id: 2,
      title: 'My Smart Teach',
      description: 'An innovative educational platform helping teachers leverage AI tools for enhanced learning experiences and classroom management.',
      url: 'https://mysmartteach.com/',
      isPlaceholder: false,
      image: '/portfolio/mysmartteach.webp',
    },
    {
      id: 3,
      title: 'Dr Kasturi Haematology',
      description: 'Professional medical practice website offering specialized haematology services with a clean, trustworthy design.',
      url: 'https://drkasturihaematology.com/',
      isPlaceholder: false,
      image: '/portfolio/drkasturi.webp',
    },
    {
      id: 4,
      title: 'Unique Tech Solution',
      description: 'Corporate technology solutions provider with comprehensive service offerings and modern web presence.',
      url: 'https://utc.co.uk/',
      isPlaceholder: false,
      image: '/portfolio/UTC_co_uk.webp',
    },
    {
      id: 5,
      title: 'Jelly Anne Eyewear',
      description: 'Stylish eyewear brand showcasing unique collections with a modern, visually appealing online presence.',
      url: 'https://jellyanneyrewear.com/',
      isPlaceholder: false,
      image: '/portfolio/jellyanney.webp',
    },
    {
      id: 6,
      title: 'Niloosoleimani',
      description: 'Professional portfolio website highlighting expertise and services with an elegant, sophisticated design.',
      url: 'https://niloosoleimani.com/',
      isPlaceholder: false,
      image: '/portfolio/niloosoleimani.webp',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Showcase</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Browse websites we&apos;ve proudly built. See one you like? Use it as inspiration for your project, and we&apos;ll give the original owner a thank-you bonus!
          </p>
        </div>
      </section>

      {/* Incentive Program Explanation */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Unique Showcase Incentive
            </h2>
            <p className="text-gray-700 text-lg text-center mb-6">
              We believe in rewarding our clients. When you choose a website from our showcase as inspiration for your project,
              we send the original website owner a special thank-you bonus as appreciation for their contribution to our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">👀</div>
                <p className="font-semibold text-gray-900">Browse & Explore</p>
                <p className="text-gray-600 text-sm">Find designs you love</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">✨</div>
                <p className="font-semibold text-gray-900">Get Inspired</p>
                <p className="text-gray-600 text-sm">Tell us what you like</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">🎁</div>
                <p className="font-semibold text-gray-900">We Reward</p>
                <p className="text-gray-600 text-sm">Original owner gets a bonus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col ${
                  project.isPlaceholder ? 'border-4 border-dashed border-blue-300 bg-blue-50' : 'bg-white'
                }`}
              >
                {/* Screenshot */}
                <div className="h-64 relative overflow-hidden bg-gray-100">
                  {project.isPlaceholder ? (
                    <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                      <div className="text-center p-6">
                        <div className="text-6xl mb-4">🌟</div>
                        <p className="text-blue-900 font-semibold text-lg">Your Website Here</p>
                      </div>
                    </div>
                  ) : (
                    project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top hover:scale-110 transition-transform duration-300"
                      />
                    )
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  {project.isPlaceholder ? (
                    <Link
                      href={project.url}
                      className="inline-block w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
                    >
                      Start Your Website
                    </Link>
                  ) : (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
                    >
                      Visit Site →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;The team at Tenner Pages delivered exactly what they promised. Professional website in 2 days,
                and the monthly price is unbeatable. Highly recommended!&quot;
              </p>
              <p className="font-semibold text-gray-900">Sarah Johnson</p>
              <p className="text-gray-500 text-sm">Small Business Owner</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;As a startup with a tight budget, this service was perfect. Fast, professional, and affordable.
                I can finally focus on growing my business instead of worrying about my website.&quot;
              </p>
              <p className="font-semibold text-gray-900">Michael Chen</p>
              <p className="text-gray-500 text-sm">Tech Startup Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundImage: 'linear-gradient(to right, #00257d, #060032)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Showcase?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s create a website you&apos;ll be proud to show off!
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
