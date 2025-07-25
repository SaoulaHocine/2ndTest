import React, { useEffect } from 'react';
import { ArrowLeft, Phone, Wrench, CheckCircle, Star } from 'lucide-react';
import { websiteConfig } from '../config/websiteData';

const ServicesPage = () => {
  useEffect(() => {
    // Update page title and meta tags
    document.title = 'Professional Handyman Services in Greeley, CO | Licensed & Insured';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete handyman services in Greeley, Colorado. Home repairs, renovations, maintenance, and installations. Licensed, insured, and locally trusted.');
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.handymangreeleyco.com/services');
    }
  }, []);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Wrench className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="text-blue-400">Handyman Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete home repair and maintenance services in Greeley, Colorado. 
            From minor fixes to major renovations, we handle it all with professional quality and affordable pricing.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="text-gray-300 font-medium">{websiteConfig.business.rating}/5 from {websiteConfig.business.reviewCount}+ reviews</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Complete Service Offerings
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive handyman services to keep your home functioning perfectly and looking its best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteConfig.services.map((service, index) => (
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
              Why Choose {websiteConfig.business.name}?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{websiteConfig.business.yearsExperience}+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{websiteConfig.business.projectsCompleted}+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{websiteConfig.business.satisfactionRate}%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free, no-obligation estimate. We respond to all inquiries within 24 hours.
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
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;