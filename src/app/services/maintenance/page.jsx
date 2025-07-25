
"use client";
import React, { useState } from 'react';
import { Wrench, Calendar, Clock, ChevronRight, ChevronLeft, Star, Car } from 'lucide-react';
import Link from 'next/link';

const MaintenancePage = () => {
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const [currentStep, setCurrentStep] = useState(0);
  const [vehicleType, setVehicleType] = useState('sedan');
  const [serviceFrequency, setServiceFrequency] = useState('one-time');

  // Maintenance packages
  const packages = {
    basic: {
      name: 'Basic Maintenance',
      price: 99,
      features: ['Oil Change', 'Tire Rotation', 'Fluid Check', 'Basic Inspection'],
      duration: '1 hour',
    },
    premium: {
      name: 'Premium Maintenance',
      price: 199,
      features: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Full Diagnostics', 'Filter Replacement'],
      duration: '2 hours',
    },
    elite: {
      name: 'Elite Maintenance',
      price: 299,
      features: ['Oil Change', 'Tire Rotation', 'Brake & Suspension Check', 'Advanced Diagnostics', 'Filter Replacement', 'Detailing'],
      duration: '3 hours',
    },
  };

  // Pricing calculator logic
  const calculatePrice = () => {
    let basePrice = packages[selectedPackage].price;
    if (vehicleType === 'suv') basePrice += 20;
    if (vehicleType === 'truck') basePrice += 40;
    if (serviceFrequency === 'subscription') basePrice *= 0.85; // 15% discount for subscriptions
    return Math.round(basePrice);
  };

  // Service process steps
  const processSteps = [
    {
      id: 1,
      title: 'Vehicle Drop-Off',
      description: 'Bring your vehicle to our state-of-the-art facility, where our team greets you and begins the process.',
      icon: Car,
    },
    {
      id: 2,
      title: 'Diagnostics',
      description: 'Advanced diagnostic tools analyze your vehicle’s performance to identify any potential issues.',
      icon: Wrench,
    },
    {
      id: 3,
      title: 'Service Execution',
      description: 'Our certified technicians perform the selected maintenance tasks with precision and care.',
      icon: Clock,
    },
    {
      id: 4,
      title: 'Quality Check',
      description: 'A thorough inspection ensures your vehicle meets our elite standards before pickup.',
      icon: Star,
    },
  ];

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
          <source src="/videos/maintenance-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-500/40 to-yellow-400/40 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-in slide-in-from-top-2 duration-700">
            Elite Maintenance Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Keep your vehicle in peak condition with our cutting-edge maintenance solutions.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Schedule Maintenance</span>
          </button>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Choose Your Maintenance Package
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.keys(packages).map((pkg, index) => (
            <div
              key={pkg}
              className={`relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl group perspective-1000 animate-in slide-in-from-bottom-2 duration-500 ${
                selectedPackage === pkg ? 'ring-2 ring-orange-500' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 group-hover:from-red-600/40 group-hover:to-yellow-400/40 transition-all duration-500" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{packages[pkg].name}</h3>
                <p className="text-gray-300 text-lg font-semibold mb-4">${packages[pkg].price}+</p>
                <p className="text-gray-400 text-sm mb-4">Estimated Duration: {packages[pkg].duration}</p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                  {packages[pkg].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-orange-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full px-6 py-3 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 ${
                    selectedPackage === pkg
                      ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {selectedPackage === pkg ? 'Selected' : 'Select Package'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="relative bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
            Calculate Your Maintenance Cost
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
                <label className="block text-white font-semibold mb-2">Service Frequency</label>
                <select
                  value={serviceFrequency}
                  onChange={(e) => setServiceFrequency(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                >
                  <option value="one-time">One-Time</option>
                  <option value="subscription">Subscription (15% Off)</option>
                </select>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">
                  Estimated Cost: <span className="text-orange-500">${calculatePrice()}</span>
                </p>
                <button className="mt-4 px-8 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Our Maintenance Process
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 to-yellow-400" />
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center mb-12 animate-in slide-in-from-${
                index % 2 === 0 ? 'left' : 'right'
              }-2 duration-500`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'} ${
                  currentStep === index ? 'scale-105' : ''
                } transition-transform duration-300`}
              >
                <div
                  className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 shadow-2xl group cursor-pointer"
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 group-hover:from-red-600/40 group-hover:to-yellow-400/40 transition-all duration-500" />
                  <div className="flex items-center space-x-3 relative z-10">
                    <step.icon className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{step.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-red-600/30 via-orange-500/30 to-yellow-400/30 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Keep Your Vehicle Elite
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Schedule your maintenance today and experience unmatched performance.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Book Now</span>
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
          animation: slideInDown 0.5s ease-out;
        }

        .slide-in-from-bottom-2 {
          animation: slideInBottom 0.5s ease-out;
        }

        .slide-in-from-left-2 {
          animation: slideInLeft 0.5s ease-out;
        }

        .slide-in-from-right-2 {
          animation: slideInRight 0.5s ease-out;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default MaintenancePage;
