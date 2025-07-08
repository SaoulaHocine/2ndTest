import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { websiteConfig } from '../config/websiteData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Needed: ${formData.service}

Message:
${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:${websiteConfig.contact.email}?subject=New Quote Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: websiteConfig.contact.phone,
      link: websiteConfig.contact.phoneLink
    },
    {
      icon: Mail,
      title: 'Email',
      details: websiteConfig.contact.email,
      link: websiteConfig.contact.emailLink
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: `${websiteConfig.location.city}, ${websiteConfig.location.state} & Surrounding Areas`,
      link: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: `${websiteConfig.businessHours.weekdays.split(': ')[1]}, ${websiteConfig.businessHours.saturday.split(': ')[1]}`,
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Get Your Free Estimate</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to get started on your project? Contact us today for a free, no-obligation estimate. 
            We respond to all inquiries within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">Request a Quote</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <h4 className="text-xl font-semibold text-white">Thank You!</h4>
                <p className="text-gray-300">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {websiteConfig.serviceCategories.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your project in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Our Location</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src={websiteConfig.googleMaps.embedUrl}
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] rounded-lg"
                  title={`${websiteConfig.location.city}, ${websiteConfig.location.state} Location Map`}
                />
              </div>
              <p className="text-gray-300 mt-4 text-center">
                Serving {websiteConfig.location.city}, {websiteConfig.location.state} and surrounding areas in Northern {websiteConfig.location.state}
              </p>
              <div className="mt-4 text-center">
                <a 
                  href={websiteConfig.googleMaps.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Emergency Services</h3>
              <p className="mb-6">
                Need urgent repairs? We offer emergency handyman services for critical issues 
                that can't wait. Call us anytime for immediate assistance.
              </p>
              <a
                href={websiteConfig.contact.phoneLink}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: {websiteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;