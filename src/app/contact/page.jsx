"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, User, MessageSquare, 
  Star, ArrowRight, Car, Shield, Award, Zap, Globe, Instagram, 
  Facebook, Twitter, Linkedin, Youtube, ChevronRight, Calendar,
  Headphones, Building, Navigation
} from 'lucide-react';

const LuxuryContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    appointmentDate: ''
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Speak with our experts',
      info: '+1 (555) 123-4567',
      description: '24/7 Premium Support',
      gradient: 'from-blue-600 to-cyan-400',
      delay: '0ms'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Get detailed responses',
      info: 'elite@autoelite.com',
      description: 'Response within 2 hours',
      gradient: 'from-purple-600 to-pink-400',
      delay: '200ms'
    },
    {
      icon: MapPin,
      title: 'Visit Showroom',
      subtitle: 'Experience in person',
      info: '123 Luxury Ave, Elite City',
      description: 'Premium test drives available',
      gradient: 'from-red-600 to-orange-400',
      delay: '400ms'
    },
    {
      icon: Calendar,
      title: 'Book Appointment',
      subtitle: 'Schedule consultation',
      info: 'Online Booking',
      description: 'Expert consultations',
      gradient: 'from-green-600 to-emerald-400',
      delay: '600ms'
    }
  ];

  const services = [
    'New Vehicle Consultation',
    'Luxury Car Financing',
    'Trade-In Evaluation',
    'Custom Modifications',
    'Maintenance Services',
    'Insurance Services'
  ];

  const locations = [
    {
      city: 'New York',
      address: '123 Manhattan Plaza, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM'
    },
    {
      city: 'Los Angeles',
      address: '456 Sunset Boulevard, CA 90028',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM'
    },
    {
      city: 'Miami',
      address: '789 Ocean Drive, FL 33139',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM'
    }
  ];

  const achievements = [
    { icon: Award, number: '50K+', label: 'Happy Customers' },
    { icon: Star, number: '4.9/5', label: 'Customer Rating' },
    { icon: Shield, number: '15+', label: 'Years Experience' },
    { icon: Car, number: '500+', label: 'Premium Models' }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
      }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-600/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <div className="mb-8 animate-in slide-in-from-top duration-1000">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-6">
              <Headphones className="w-5 h-5 text-orange-400" />
              <span className="text-white/80">Premium Support Available 24/7</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent mb-6 leading-tight">
              Get In <span className="relative">
                Touch
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-orange-400/20 blur-2xl rounded-lg" />
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with our luxury automotive experts for an unparalleled experience in premium vehicle consultation
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'slideInUp 0.8s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <achievement.icon className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-3xl font-bold text-white mb-1">{achievement.number}</div>
                <div className="text-gray-400 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Connect With <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Excellence</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-700 cursor-pointer overflow-hidden hover:scale-105 hover:-rotate-1"
                style={{
                  animationDelay: method.delay,
                  animation: 'slideInUp 0.8s ease-out forwards'
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 scale-0 group-hover:scale-100`} />
                
                {/* Icon with 3D effect */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-br ${method.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300">
                    {method.subtitle}
                  </p>
                  <p className="text-white font-semibold mb-2 group-hover:text-orange-300">
                    {method.info}
                  </p>
                  <p className="text-gray-500 text-xs group-hover:text-gray-400">
                    {method.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Start Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Journey</span>
                </h3>
                <p className="text-gray-400">
                  Fill out this form and our luxury automotive experts will contact you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>

                  <div className="group relative">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="group relative">
                    <Car className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 focus:scale-105"
                    >
                      <option value="" className="bg-gray-800">Select Service</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-gray-800">{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="group relative">
                  <Calendar className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                  <input
                    type="datetime-local"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="group relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                  <textarea
                    name="message"
                    placeholder="Tell us about your automotive needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 focus:scale-105 resize-none"
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-500 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Locations & Info */}
          <div className="space-y-8">
            
            {/* Locations */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Building className="w-6 h-6 mr-3 text-orange-400" />
                Our Locations
              </h3>
              
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div 
                    key={location.city}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                        {location.city}
                      </h4>
                      <Navigation className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
                      {location.address}
                    </p>
                    <p className="text-orange-400 font-semibold mb-2">{location.phone}</p>
                    <p className="text-gray-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {location.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-orange-400" />
                Follow Us
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Instagram, name: 'Instagram', followers: '250K', gradient: 'from-purple-600 to-pink-500' },
                  { icon: Facebook, name: 'Facebook', followers: '180K', gradient: 'from-blue-600 to-blue-500' },
                  { icon: Twitter, name: 'Twitter', followers: '95K', gradient: 'from-sky-500 to-blue-500' },
                  { icon: Youtube, name: 'YouTube', followers: '320K', gradient: 'from-red-600 to-red-500' }
                ].map((social, index) => (
                  <button
                    key={social.name}
                    className={`group bg-gradient-to-br ${social.gradient} p-4 rounded-2xl hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                  >
                    <social.icon className="w-6 h-6 text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-white text-sm font-semibold">{social.followers}</div>
                    <div className="text-white/80 text-xs">{social.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .slide-in-from-top {
          animation: slideInDown 1s ease-out;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f97316, #dc2626);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ea580c, #b91c1c);
        }
      `}</style>
    </div>
  );
};

export default LuxuryContactPage;