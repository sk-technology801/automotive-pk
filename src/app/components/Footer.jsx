"use client"
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter signup logic (e.g., API call)
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              AutoElite
            </h3>
            <p className="text-gray-300 text-sm">
              Your trusted partner for premium vehicles, services, and performance solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/vehicles"
                  className="hover:text-orange-500 transition-all duration-300 flex items-center space-x-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>Vehicles</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sports"
                  className="hover:text-orange-500 transition-all duration-300 flex items-center space-x-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>Sports Cars</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-orange-500 transition-all duration-300 flex items-center space-x-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="hover:text-orange-500 transition-all duration-300 flex items-center space-x-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>Maintenance</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/repairs"
                  className="hover:text-orange-500 transition-all duration-300 flex items-center space-x-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>Repairs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/insurance"
                  className="hover:text-orange-500 transition-all duration-300 flex items-center space-x-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>Insurance</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/financing"
                  className="hover:text-orange-500 transition-all duration-300 flex items-center space-x-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>Financing</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/warranty"
                  className="hover:text-orange-500 transition-all duration-300 flex items-center space-x-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>Warranty</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>(800) 555-1234</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>support@autoelite.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>123 Auto Drive, Elite City, EC 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for the latest offers and updates.</p>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 rounded-full hover:scale-110 transition-all duration-300"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} AutoElite. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy" className="hover:text-orange-500 transition-all duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-500 transition-all duration-300">
              Terms of Service-
              SK-TECHNOLOGY-801
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          animation: slideInBottom 0.5s ease-in-out;
        }

        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
