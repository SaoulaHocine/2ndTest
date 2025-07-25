import React, { useEffect } from 'react';
import { ArrowLeft, Phone, Shield, FileText, AlertCircle } from 'lucide-react';
import { websiteConfig } from '../config/websiteData';

const TermsPage = () => {
  useEffect(() => {
    // Update page title and meta tags
    document.title = 'Terms of Service | Handyman Greeley CO';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms of Service for Handyman Greeley CO. Read our service terms, conditions, and policies for professional handyman services in Greeley, Colorado.');
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.handymangreeleyco.com/terms');
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our handyman services in Greeley, Colorado.
          </p>
          <p className="text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 space-y-8">
            
            {/* Agreement to Terms */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Shield className="h-6 w-6 text-blue-400 mr-3" />
                Agreement to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the services provided by {websiteConfig.business.name}, you accept and agree to be bound by the terms and provision of this agreement. 
                These terms apply to all visitors, users, and others who access or use our handyman services in Greeley, Colorado and surrounding areas.
              </p>
            </div>

            {/* Services Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Services Description</h2>
              <p className="text-gray-300 leading-relaxed">
                {websiteConfig.business.name} provides professional handyman services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>General home repairs and maintenance</li>
                <li>Bathroom and kitchen remodeling</li>
                <li>Flooring installation and repair</li>
                <li>Exterior maintenance and repairs</li>
                <li>Electrical and plumbing services (minor repairs)</li>
                <li>Carpentry and woodworking</li>
                <li>Emergency repair services</li>
              </ul>
            </div>

            {/* Pricing and Payment */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Pricing and Payment Terms</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-white">Estimates:</strong> We provide free, no-obligation estimates for all projects. 
                  Final pricing may vary based on actual work required and materials used.
                </p>
                <p>
                  <strong className="text-white">Payment:</strong> Payment is due upon completion of work unless other arrangements have been made in writing. 
                  We accept cash, check, and major credit cards.
                </p>
                <p>
                  <strong className="text-white">Materials:</strong> Material costs are separate from labor charges unless specified otherwise in the estimate.
                </p>
              </div>
            </div>

            {/* Warranty and Liability */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Warranty and Liability</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-white">Workmanship Warranty:</strong> We guarantee our workmanship for a period of one (1) year from the date of completion. 
                  This warranty covers defects in workmanship but does not cover normal wear and tear or damage caused by misuse.
                </p>
                <p>
                  <strong className="text-white">Insurance:</strong> {websiteConfig.business.name} is fully licensed and insured. 
                  We carry general liability insurance and workers' compensation insurance for your protection.
                </p>
                <p>
                  <strong className="text-white">Limitation of Liability:</strong> Our liability is limited to the cost of the services provided. 
                  We are not responsible for consequential or incidental damages.
                </p>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Cancellation and Rescheduling</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-white">Customer Cancellation:</strong> Customers may cancel or reschedule appointments with at least 24 hours notice. 
                  Cancellations with less than 24 hours notice may be subject to a cancellation fee.
                </p>
                <p>
                  <strong className="text-white">Weather Delays:</strong> Outdoor work may be delayed due to weather conditions. 
                  We will reschedule at no additional charge when weather prevents safe completion of work.
                </p>
              </div>
            </div>

            {/* Safety and Access */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Safety and Property Access</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-white">Site Safety:</strong> Customers are responsible for ensuring a safe work environment, 
                  including removing personal items from work areas and securing pets during service visits.
                </p>
                <p>
                  <strong className="text-white">Property Access:</strong> Customers must provide reasonable access to work areas. 
                  Additional charges may apply if access issues cause delays or require special equipment.
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Dispute Resolution</h2>
              <p className="text-gray-300 leading-relaxed">
                Any disputes arising from our services will be resolved through good faith negotiation. 
                If resolution cannot be reached, disputes will be handled according to Colorado state law in Weld County courts.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-white">Business:</strong> {websiteConfig.business.name}</p>
                  <p><strong className="text-white">Phone:</strong> {websiteConfig.contact.phone}</p>
                  <p><strong className="text-white">Email:</strong> {websiteConfig.contact.email}</p>
                  <p><strong className="text-white">Service Area:</strong> {websiteConfig.location.city}, {websiteConfig.location.state} and surrounding areas</p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Important Notice</h3>
                  <p className="text-blue-100">
                    These terms are subject to change without notice. Continued use of our services constitutes acceptance of any modifications. 
                    For the most current version of our terms, please visit this page regularly.
                  </p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for professional handyman services in Greeley, Colorado.
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

export default TermsPage;