import React from 'react';
import { Wrench, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { websiteConfig } from '../config/websiteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: websiteConfig.socialMedia.facebook, label: 'Facebook' },
    { icon: Twitter, href: websiteConfig.socialMedia.twitter, label: 'Twitter' },
    { icon: Instagram, href: websiteConfig.socialMedia.instagram, label: 'Instagram' },
    { icon: Linkedin, href: websiteConfig.socialMedia.linkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">{websiteConfig.business.name.split(' ').slice(0, 2).join(' ')}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for all home repairs and maintenance needs. 
              Quality craftsmanship, reliable service, and customer satisfaction guaranteed.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>{websiteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>{websiteConfig.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>{websiteConfig.location.city}, {websiteConfig.location.state}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {websiteConfig.navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {websiteConfig.services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors border border-gray-700"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Business Hours</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <div>{websiteConfig.businessHours.weekdays}</div>
                <div>{websiteConfig.businessHours.saturday}</div>
                <div>{websiteConfig.businessHours.sunday}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} {websiteConfig.business.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              {websiteConfig.footerLinks.legal.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-blue-400 transition-colors">{link.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;