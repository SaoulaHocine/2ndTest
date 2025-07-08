import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';
import { websiteConfig } from '../config/websiteData';

const About = () => {
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
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                About {websiteConfig.business.name}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                With over {websiteConfig.business.yearsExperience} years of experience in the home improvement industry, we've built our 
                reputation on quality craftsmanship, reliable service, and customer satisfaction. 
                From small repairs to major renovations, we handle every project with the same 
                attention to detail and commitment to excellence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team of skilled professionals is equipped to handle a wide range of services, 
                ensuring that your home is always in perfect condition. We pride ourselves on 
                transparent pricing, clear communication, and delivering results that exceed expectations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Service Areas</h3>
              <p className="text-gray-300">
                We proudly serve homeowners throughout {websiteConfig.location.city}, {websiteConfig.location.state} and surrounding areas, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                {websiteConfig.location.serviceAreas.map((area, index) => (
                  <div key={index}>• {area}</div>
                ))}
              </div>
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
  );
};

export default About;