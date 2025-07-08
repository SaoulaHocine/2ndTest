import React from 'react';
import { 
  Hammer, 
  Wrench, 
  Paintbrush, 
  Zap, 
  Droplets, 
  Home, 
  Drill, 
  Settings,
  CheckCircle
} from 'lucide-react';
import { websiteConfig } from '../config/websiteData';

const Services = () => {
  const serviceIcons = [Hammer, Paintbrush, Zap, Droplets, Home, Drill];
  
  const servicesWithIcons = websiteConfig.services.map((service, index) => ({
    ...service,
    icon: serviceIcons[index] || Settings
  }));

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From minor repairs to major installations, we provide comprehensive handyman services 
            to keep your home functioning perfectly and looking its best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesWithIcons.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:bg-gray-750 border border-gray-700">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full">
                  <service.icon className="h-8 w-8 text-blue-400" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                  >
                    Get Quote
                    <Settings className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-8">
            Don't see what you need? We handle many other services too!
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors"
          >
            Contact Us for Custom Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;