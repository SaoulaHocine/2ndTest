import React, { useEffect } from 'react';
import { ArrowLeft, Phone, Shield, Award, Clock, Users, MapPin, Star } from 'lucide-react';
import { websiteConfig } from '../config/websiteData';

const AboutPage = () => {
  useEffect(() => {
    // Update page title and meta tags
    document.title = 'About Handyman Greeley CO | Licensed & Insured Home Repair Experts';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Handyman Greeley CO - your trusted local home repair experts. Over 15 years of experience serving Greeley, Colorado with quality craftsmanship.');
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.handymangreeleyco.com/about');
    }
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind and protection.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with comprehensive warranties and guarantees.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'On-time arrivals and efficient completion of all projects.'
    },
    {
      icon: Users,
      title: 'Trusted by Hundreds',
      description: 'Serving local communities with excellence and building lasting relationships.'
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
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                About <span className="text-blue-400">{websiteConfig.business.name}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your trusted partner for professional handyman services in Greeley, Colorado. 
                With over {websiteConfig.business.yearsExperience} years of experience, we've built our reputation on 
                quality craftsmanship, reliable service, and complete customer satisfaction.
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300 font-medium">{websiteConfig.business.rating}/5 from {websiteConfig.business.reviewCount}+ verified reviews</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional handyman working on home repairs in Greeley, Colorado"
                className="w-full h-96 md:h-[500px] object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">Our Story & Mission</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded in {new Date().getFullYear() - websiteConfig.business.yearsExperience}, {websiteConfig.business.name} began with a simple mission: 
                  to provide homeowners in Greeley, Colorado with reliable, professional handyman services they can trust.
                </p>
                <p>
                  What started as a small local business has grown into one of the most trusted handyman services in Northern Colorado. 
                  We've completed over {websiteConfig.business.projectsCompleted} projects, maintaining a {websiteConfig.business.satisfactionRate}% customer satisfaction rate.
                </p>
                <p>
                  Our team of skilled professionals is equipped to handle everything from minor repairs to major home improvements. 
                  We pride ourselves on transparent pricing, clear communication, and delivering results that exceed expectations.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
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
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proudly Serving Northern Colorado
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide professional handyman services throughout {websiteConfig.location.city}, {websiteConfig.location.state} and surrounding communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteConfig.location.serviceAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
                <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Track Record Speaks for Itself
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">{websiteConfig.business.yearsExperience}+</div>
              <div className="text-xl text-gray-300">Years of Experience</div>
              <div className="text-gray-400 mt-2">Serving Greeley since {new Date().getFullYear() - websiteConfig.business.yearsExperience}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">{websiteConfig.business.projectsCompleted}+</div>
              <div className="text-xl text-gray-300">Projects Completed</div>
              <div className="text-gray-400 mt-2">From small repairs to major renovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">{websiteConfig.business.satisfactionRate}%</div>
              <div className="text-xl text-gray-300">Customer Satisfaction</div>
              <div className="text-gray-400 mt-2">Based on verified customer reviews</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">{websiteConfig.business.reviewCount}+</div>
              <div className="text-xl text-gray-300">Happy Customers</div>
              <div className="text-gray-400 mt-2">5-star reviews across all platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of satisfied customers who trust {websiteConfig.business.name} for all their home repair needs.
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

export default AboutPage;