"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Car, Settings, Phone, User, Search } from 'lucide-react';
import Link from 'next/link'; // Import Link from next/link

const AutomotiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Vehicles', 
      icon: Car, 
      href: '/vehicles', // Add base href for main nav item
      dropdown: [
        { name: 'New Cars', href: '/vehicles/new-cars' },
        { name: 'Used Cars', href: '/vehicles/used-cars' },
        { name: 'Electric', href: '/vehicles/electric' },
        { name: 'Luxury', href: '/vehicles/luxury' },
        { name: 'Sports', href: '/vehicles/sports' },
      ] 
    },
    { 
      name: 'Services', 
      icon: Settings, 
      href: '/services', // Add base href for main nav item
      dropdown: [
        { name: 'Maintenance', href: '/services/maintenance' },
        { name: 'Repairs', href: '/services/repairs' },
        { name: 'Insurance', href: '/services/insurance' },
        { name: 'Financing', href: '/services/financing' },
        { name: 'Warranty', href: '/services/warranty' },
      ] 
    },
    { name: 'About', icon: User, href: '/about' }, // Add href
    { name: 'Contact', icon: Phone, href: '/contact' }, // Add href
  ];

  return (
    <>
      {/* Backdrop blur overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrollY > 50 
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
        style={{
          transform: `translateY(${Math.min(scrollY * 0.1, 10)}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section with 3D effect */}
            <Link href="/" className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 rounded-xl rotate-45 shadow-2xl group-hover:rotate-[135deg] transition-all duration-700 ease-out transform group-hover:scale-110">
                  <div className="absolute inset-2 bg-black rounded-lg -rotate-45 flex items-center justify-center">
                    <Car className="w-5 h-5 text-white rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-yellow-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-red-400 group-hover:via-orange-300 group-hover:to-yellow-300 transition-all duration-500">
                  AUTOELITE
                </h1>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Premium Automotive
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href}
                    className="flex items-center space-x-2 px-6 py-3 rounded-xl text-white/90 hover:text-white transition-all duration-300 group relative overflow-hidden"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'slideInDown 0.6s ease-out forwards'
                    }}
                  >
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-orange-500/0 to-yellow-400/0 group-hover:from-red-600/20 group-hover:via-orange-500/20 group-hover:to-yellow-400/20 rounded-xl transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" />
                    
                    <item.icon className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    <span className="font-medium relative z-10">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-300">
                      <div className="p-2">
                        {item.dropdown.map((dropItem, idx) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-red-600/20 hover:to-orange-500/20 rounded-xl transition-all duration-300 group/item"
                            style={{
                              animationDelay: `${idx * 50}ms`,
                              animation: 'slideInLeft 0.4s ease-out forwards'
                            }}
                          >
                            <span className="group-hover/item:translate-x-2 transition-transform duration-300 inline-block">
                              {dropItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search and CTA Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>

              {/* CTA Button */}
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Get Quote</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
            {navItems.map((item, index) => (
              <div key={item.name} className="space-y-2">
                <Link 
                  href={item.href}
                  className="flex items-center justify-between w-full px-4 py-3 text-white rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="ml-8 space-y-2 animate-in slide-in-from-top-2 duration-300">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-white/10">
              <button className="w-full px-6 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                Get Quote Now
              </button>
            </div>
          </div>
        </div>
      </nav>

     
          
         

        
        
    

      <style jsx global>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .slide-in-from-top-2 {
          animation: slideInDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default AutomotiveNavbar;