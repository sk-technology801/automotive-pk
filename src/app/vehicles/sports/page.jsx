
"use client";
import React, { useState, useEffect } from 'react';
import { Car, Gauge, Flame, Star, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const SportsPage = () => {
  const [selectedModel, setSelectedModel] = useState('model1');
  const [currentFeature, setCurrentFeature] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Sports car models
  const sportsModels = {
    model1: {
      name: 'Apex R1',
      price: 85000,
      specs: {
        horsepower: 450,
        topSpeed: 200,
        zeroToSixty: 3.5,
        weight: 3200,
      },
      features: ['Turbocharged V6', 'Carbon Fiber Body', 'Adaptive Suspension', 'Racing Seats'],
      image: '/images/apex-r1.png',
    },
    model2: {
      name: 'Blaze GT',
      price: 95000,
      specs: {
        horsepower: 500,
        topSpeed: 210,
        zeroToSixty: 3.2,
        weight: 3300,
      },
      features: ['Supercharged V8', 'Aerodynamic Kit', 'Performance Brakes', 'Sport Exhaust'],
      image: '/images/blaze-gt.png',
    },
    model3: {
      name: 'Vortex S',
      price: 120000,
      specs: {
        horsepower: 600,
        topSpeed: 220,
        zeroToSixty: 2.9,
        weight: 3100,
      },
      features: ['Twin-Turbo V8', 'Lightweight Chassis', 'Active Aero', 'Track Mode'],
      image: '/images/vortex-s.png',
    },
  };

  // Performance features
  const performanceFeatures = [
    {
      id: 1,
      title: 'Aerodynamic Design',
      description: 'Sleek lines and active aerodynamics maximize downforce and speed.',
      icon: Car,
      image: '/images/performance-aero.png',
    },
    {
      id: 2,
      title: 'High-Performance Engine',
      description: 'Powerful engines deliver exhilarating acceleration and top speeds.',
      icon: Gauge,
      image: '/images/performance-engine.png',
    },
    {
      id: 3,
      title: 'Advanced Suspension',
      description: 'Adaptive systems ensure precise handling on any track.',
      icon: Flame,
      image: '/images/performance-suspension.png',
    },
    {
      id: 4,
      title: 'Track-Optimized Features',
      description: 'Racing-inspired tech for ultimate performance.',
      icon: Star,
      image: '/images/performance-track.png',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % performanceFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle form input changes
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden py-24">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/sports-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-500/40 to-yellow-400/40 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-in slide-in-from-top-2 duration-700">
            Unleash Performance
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Experience the thrill of our high-performance sports cars.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Discover Models</span>
          </button>
        </div>
      </section>

      {/* Sports Car Models */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Select Your Performance Model
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.keys(sportsModels).map((model, index) => (
            <div
              key={model}
              className={`relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl group perspective-1000 animate-in slide-in-from-bottom-2 duration-500 ${
                selectedModel === model ? 'ring-2 ring-orange-500' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedModel(model)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 group-hover:from-red-600/40 group-hover:to-yellow-400/40 transition-all duration-500" />
              <div className="p-6">
                <img
                  src={sportsModels[model].image}
                  alt={sportsModels[model].name}
                  className="w-full h-48 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-500"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{sportsModels[model].name}</h3>
                <p className="text-gray-300 text-lg font-semibold mb-4">${sportsModels[model].price.toLocaleString()}</p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                  {sportsModels[model].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-orange-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full px-6 py-3 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 ${
                    selectedModel === model
                      ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {selectedModel === model ? 'Selected' : 'Select Model'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Specs Comparison */}
      <section className="relative bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
            Compare Performance Specs
          </h2>
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
            <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-white text-sm md:text-base">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-2 text-left">Model</th>
                    <th className="py-4 px-2 text-center">Horsepower</th>
                    <th className="py-4 px-2 text-center">Top Speed (mph)</th>
                    <th className="py-4 px-2 text-center">0-60 mph (s)</th>
                    <th className="py-4 px-2 text-center">Weight (lbs)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(sportsModels).map((model) => (
                    <tr
                      key={model}
                      className={`border-b border-white/10 hover:bg-white/5 transition-all duration-300 ${
                        selectedModel === model ? 'bg-orange-500/10' : ''
                      }`}
                    >
                      <td className="py-4 px-2">{sportsModels[model].name}</td>
                      <td className="py-4 px-2 text-center">{sportsModels[model].specs.horsepower}</td>
                      <td className="py-4 px-2 text-center">{sportsModels[model].specs.topSpeed}</td>
                      <td className="py-4 px-2 text-center">{sportsModels[model].specs.zeroToSixty}</td>
                      <td className="py-4 px-2 text-center">{sportsModels[model].specs.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Features Carousel */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Performance Features
        </h2>
        <div className="relative">
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
            <div className="relative flex flex-col items-center">
              <img
                src={performanceFeatures[currentFeature].image}
                alt={performanceFeatures[currentFeature].title}
                className="w-full h-64 object-cover rounded-xl mb-4 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="flex items-center space-x-3">
                {(() => {
                  const IconComponent = performanceFeatures[currentFeature].icon;
                  return IconComponent ? <IconComponent className="w-6 h-6 text-yellow-400" /> : null;
                })()}
                <h3 className="text-xl font-bold text-white">{performanceFeatures[currentFeature].title}</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2 text-center">{performanceFeatures[currentFeature].description}</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentFeature((prev) => (prev - 1 + performanceFeatures.length) % performanceFeatures.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentFeature((prev) => (prev + 1) % performanceFeatures.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Ready to Experience the Thrill?
        </h2>
        <div className="max-w-lg mx-auto bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
          <div className="space-y-6 relative z-10">
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Your Inquiry or Test Drive Request..."
                rows="4"
              />
            </div>
            <button className="w-full px-8 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
              Submit Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-red-600/30 via-orange-500/30 to-yellow-400/30 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Drive the Future of Performance
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Book a test drive and feel the power of our sports cars.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Book Test Drive</span>
          </button>
        </div>
      </section>

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

        .animate-in {
          animation-fill-mode: both;
        }

        .slide-in-from-top-2 {
          animation: slideInDown 0.5s ease-in-out;
        }

        .slide-in-from-bottom-2 {
          animation: slideInBottom 0.5s ease-in-out;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default SportsPage;
