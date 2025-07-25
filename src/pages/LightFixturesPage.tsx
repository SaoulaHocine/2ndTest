import React, { useEffect } from 'react';
import { ArrowLeft, Phone, Lightbulb, CheckCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import { websiteConfig } from '../config/websiteData';

const LightFixturesPage = () => {
  useEffect(() => {
    // Update page title and meta tags
    document.title = 'Light Fixture Installation & Repair in Greeley, CO | Professional Electrician Services';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional light fixture installation and repair services in Greeley, Colorado. Ceiling fans, chandeliers, LED lighting, and electrical repairs. Licensed and insured.');
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.handymangreeleyco.com/light-fixtures');
    }
  }, []);

  const lightFixtureServices = [
    {
      title: 'Ceiling Fan Installation',
      description: 'Professional installation of ceiling fans for improved air circulation and energy efficiency.',
      features: [
        'All ceiling fan brands and models',
        'Proper electrical wiring and mounting',
        'Balance testing and adjustment',
        'Remote control setup',
        'Old fixture removal included'
      ]
    },
    {
      title: 'Chandelier Installation',
      description: 'Expert installation of chandeliers and decorative lighting fixtures.',
      features: [
        'Heavy fixture mounting and support',
        'Electrical box reinforcement',
        'Crystal and glass assembly',
        'Dimmer switch installation',
        'Professional hanging and leveling'
      ]
    },
    {
      title: 'LED Lighting Conversion',
      description: 'Upgrade to energy-efficient LED lighting throughout your home.',
      features: [
        'LED bulb and fixture installation',
        'Recessed lighting conversion',
        'Under-cabinet LED strips',
        'Outdoor LED security lighting',
        'Smart lighting system setup'
      ]
    },
    {
      title: 'Electrical Repairs',
      description: 'Troubleshooting and repair of electrical lighting issues.',
      features: [
        'Flickering light diagnosis',
        'Switch and outlet replacement',
        'Circuit breaker issues',
        'Wiring repairs and updates',
        'Safety inspections'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed electricians with comprehensive insurance coverage for your protection.'
    },
    {
      icon: Zap,
      title: 'Expert Installation',
      description: 'Professional installation following all local electrical codes and safety standards.'
    },
    {
      icon: Clock,
      title: 'Same-Day Service',
      description: 'Quick response times with same-day service available for most installations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Lightbulb className="h-12 w-12 text-yellow-400" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Light Fixture <span className="text-blue-400">Installation & Repair</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Professional light fixture installation and electrical services in Greeley, Colorado. 
                From ceiling fans to chandeliers, we handle all your lighting needs with expert craftsmanship and safety.
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300 font-medium">{websiteConfig.business.rating}/5 from {websiteConfig.business.reviewCount}+ reviews</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors text-center"
                >
                  Get Free Estimate
                </a>
                <a
                  href={websiteConfig.contact.phoneLink}
                  className="flex items-center justify-center space-x-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>{websiteConfig.contact.phone}</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional light fixture installation in Greeley, Colorado"
                className="w-full h-96 md:h-[500px] object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-300">Same-Day Service Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Light Fixture Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple bulb replacements to complex electrical installations, we provide comprehensive lighting solutions for your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lightFixtureServices.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-700">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                    >
                      Get Quote for {service.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Electrical Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full">
                  <feature.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees or surprise charges. Get upfront pricing for all light fixture services.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$75</div>
                <div className="text-white font-semibold">Ceiling Fan Installation</div>
                <div className="text-gray-400 text-sm">Basic installation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$125</div>
                <div className="text-white font-semibold">Chandelier Installation</div>
                <div className="text-gray-400 text-sm">Standard mounting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$50</div>
                <div className="text-white font-semibold">Light Fixture Repair</div>
                <div className="text-gray-400 text-sm">Diagnostic included</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$100</div>
                <div className="text-white font-semibold">LED Conversion</div>
                <div className="text-gray-400 text-sm">Per room average</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300">
                *Prices may vary based on complexity and materials. Free estimates provided for all projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <Zap className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Electrical Safety First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Electrical work can be dangerous and should always be performed by licensed professionals. 
                  Our team follows all local electrical codes and safety standards to ensure your home and family are protected. 
                  We carry full insurance coverage and guarantee all our electrical work.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Safety Standards:</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• NEC code compliance</li>
                      <li>• Proper grounding and GFCI protection</li>
                      <li>• Load calculations and circuit analysis</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Quality Assurance:</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Licensed electrician oversight</li>
                      <li>• Quality materials and fixtures</li>
                      <li>• Comprehensive testing and inspection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Brighten Your Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for professional light fixture installation and electrical services in Greeley, Colorado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={websiteConfig.contact.phoneLink}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: {websiteConfig.contact.phone}</span>
            </a>
            <a
              href={websiteConfig.contact.emailLink}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightFixturesPage;