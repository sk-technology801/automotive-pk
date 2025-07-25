
"use client";
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Car, Clock, CheckCircle, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import Link from 'next/link';

const WarrantyPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [currentCoverage, setCurrentCoverage] = useState(0);
  const [vehicleType, setVehicleType] = useState('sedan');
  const [vehicleAge, setVehicleAge] = useState('0-3');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Warranty plans
  const warrantyPlans = {
    basic: {
      name: 'Basic Warranty',
      basePrice: 100,
      features: ['Powertrain Coverage', '1-Year Term', 'Up to 50,000 Miles', 'Roadside Assistance'],
      duration: '1 Year',
    },
    extended: {
      name: 'Extended Warranty',
      basePrice: 200,
      features: ['Powertrain Coverage', 'Comprehensive Component Coverage', '2-Year Term', 'Up to 100,000 Miles', 'Roadside Assistance'],
      duration: '2 Years',
    },
    premium: {
      name: 'Premium Warranty',
      basePrice: 300,
      features: ['Powertrain Coverage', 'Comprehensive Component Coverage', '3-Year Term', 'Unlimited Miles', '24/7 Roadside Assistance', 'Rental Car Coverage'],
      duration: '3 Years',
    },
  };

  // Coverage checker logic
  const calculateCoverageCost = () => {
    let baseCost = warrantyPlans[selectedPlan].basePrice;
    if (vehicleType === 'suv') baseCost += 20;
    if (vehicleType === 'truck') baseCost += 30;
    if (vehicleAge === '4-7') baseCost *= 1.1; // 10% surcharge for older vehicles
    if (vehicleAge === '8+') baseCost *= 1.2; // 20% surcharge for very old vehicles
    return Math.round(baseCost);
  };

  // Warranty coverage details
  const coverageDetails = [
    {
      id: 1,
      title: 'Powertrain Coverage',
      description: 'Covers engine, transmission, and drivetrain components.',
      icon: ShieldCheck,
      image: '/images/warranty-powertrain.png',
    },
    {
      id: 2,
      title: 'Roadside Assistance',
      description: '24/7 support for towing, flat tires, and more.',
      icon: Car,
      image: '/images/warranty-roadside.png',
    },
    {
      id: 3,
      title: 'Component Coverage',
      description: 'Covers electrical, suspension, and other critical systems.',
      icon: Clock,
      image: '/images/warranty-component.png',
    },
    {
      id: 4,
      title: 'Rental Car Coverage',
      description: 'Provides a rental car during covered repairs.',
      icon: CheckCircle,
      image: '/images/warranty-rental.png',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCoverage((prev) => (prev + 1) % coverageDetails.length);
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
          <source src="/videos/warranty-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-500/40 to-yellow-400/40 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-in slide-in-from-top-2 duration-700">
            Comprehensive Vehicle Warranty
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Protect your investment with our tailored warranty plans.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Explore Plans</span>
          </button>
        </div>
      </section>

      {/* Warranty Plans */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Choose Your Warranty Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.keys(warrantyPlans).map((plan, index) => (
            <div
              key={plan}
              className={`relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl group perspective-1000 animate-in slide-in-from-bottom-2 duration-500 ${
                selectedPlan === plan ? 'ring-2 ring-orange-500' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedPlan(plan)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 group-hover:from-red-600/40 group-hover:to-yellow-400/40 transition-all duration-500" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{warrantyPlans[plan].name}</h3>
                <p className="text-gray-300 text-lg font-semibold mb-4">${warrantyPlans[plan].basePrice}+/{warrantyPlans[plan].duration}</p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                  {warrantyPlans[plan].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-orange-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full px-6 py-3 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 ${
                    selectedPlan === plan
                      ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {selectedPlan === plan ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Checker */}
      <section className="relative bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
            Check Your Warranty Cost
          </h2>
          <div className="max-w-lg mx-auto bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
            <div className="space-y-6 relative z-10">
              <div>
                <label className="block text-white font-semibold mb-2">Vehicle Type</label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                >
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Vehicle Age (Years)</label>
                <select
                  value={vehicleAge}
                  onChange={(e) => setVehicleAge(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                >
                  <option value="0-3">0-3 Years</option>
                  <option value="4-7">4-7 Years</option>
                  <option value="8+">8+ Years</option>
                </select>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">
                  Estimated Cost: <span className="text-orange-500">${calculateCoverageCost()}</span>
                </p>
                <button className="mt-4 px-8 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Coverage Carousel */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Warranty Coverage Details
        </h2>
        <div className="relative">
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
            <div className="relative flex flex-col items-center">
              <img
                src={coverageDetails[currentCoverage].image}
                alt={coverageDetails[currentCoverage].title}
                className="w-full h-64 object-cover rounded-xl mb-4 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="flex items-center space-x-3">
                {(() => {
                  const IconComponent = coverageDetails[currentCoverage].icon;
                  return IconComponent ? <IconComponent className="w-6 h-6 text-yellow-400" /> : null;
                })()}
                <h3 className="text-xl font-bold text-white">{coverageDetails[currentCoverage].title}</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2 text-center">{coverageDetails[currentCoverage].description}</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentCoverage((prev) => (prev - 1 + coverageDetails.length) % coverageDetails.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentCoverage((prev) => (prev + 1) % coverageDetails.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Have Questions? Contact Us
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
                placeholder="Your Question or Request..."
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
            Secure Your Vehicle’s Future
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Choose a warranty plan and drive with confidence.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Get Started</span>
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

export default WarrantyPage;
