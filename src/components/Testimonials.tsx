import React from 'react';
import { Star, Quote } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import { websiteConfig } from '../config/websiteData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">What Our Customers Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about our handyman services and quality workmanship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Testimonials */}
          <div className="space-y-8">
            {websiteConfig.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 relative border border-gray-700">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-400/30" />
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-blue-400">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Carousel */}
          <div className="space-y-8">
            <ImageCarousel 
              images={websiteConfig.images.testimonials} 
              height="h-96 md:h-[500px]"
              className="shadow-xl"
            />
            
            <div className="bg-blue-900/20 rounded-xl p-8 text-center border border-blue-800/30">
              <div className="space-y-4">
                <div className="flex justify-center items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-white">{websiteConfig.business.rating}/5</span>
                </div>
                <p className="text-lg text-gray-300">
                  Average rating from <strong>{websiteConfig.business.reviewCount}+ verified reviews</strong>
                </p>
                <p className="text-gray-400">
                  Join hundreds of satisfied customers who trust us with their home repairs and improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;