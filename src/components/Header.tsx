import React, { useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';
import { websiteConfig } from '../config/websiteData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">{websiteConfig.business.name.split(' ').slice(0, 2).join(' ')}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {websiteConfig.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  if (item.href === '/blog') {
                    e.preventDefault();
                    window.history.pushState({}, '', '/blog');
                    window.location.reload();
                  }
                }}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {websiteConfig.navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === '/blog') {
                      e.preventDefault();
                      window.history.pushState({}, '', '/blog');
                      window.location.reload();
                      toggleMenu();
                    } else {
                      toggleMenu();
                    }
                  }}
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors text-center"
                onClick={toggleMenu}
              >
                Free Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;