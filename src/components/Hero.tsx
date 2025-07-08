import React from 'react';
import { Phone, Star } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import { websiteConfig } from '../config/websiteData';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">{websiteConfig.business.rating}/5 from {websiteConfig.business.reviewCount}+ reviews</span>
                <span className="text-gray-400 font-medium">{websiteConfig.business.rating}/5 from {websiteConfig.business.reviewCount}+ reviews</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {websiteConfig.business.tagline.split(' ').slice(0, 2).join(' ')}
                <span className="text-blue-400 block">{websiteConfig.business.tagline.split(' ')[2]}</span>
                in {websiteConfig.location.city}
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {websiteConfig.business.description}
              </p>
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

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{websiteConfig.business.yearsExperience}+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{websiteConfig.business.projectsCompleted}+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{websiteConfig.business.satisfactionRate}%</div>
                <div className="text-gray-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <ImageCarousel 
              images={websiteConfig.images.hero} 
              height="h-96 md:h-[500px]"
              className="shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">Available Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;