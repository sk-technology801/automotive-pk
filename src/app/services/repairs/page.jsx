
"use client";
import React, { useState, useEffect } from 'react';
import { Wrench, Car, Tool, CheckCircle, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import Link from 'next/link';

const RepairsPage = () => {
  const [selectedRepair, setSelectedRepair] = useState('engine');
  const [currentStep, setCurrentStep] = useState(0);
  const [vehicleType, setVehicleType] = useState('sedan');
  const [repairUrgency, setRepairUrgency] = useState('standard');
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });

  // Repair types
  const repairTypes = {
    engine: {
      name: 'Engine Repair',
      basePrice: 500,
      features: ['Diagnostics', 'Part Replacement', 'Performance Tuning', 'Oil System Check'],
      duration: '2-5 days',
    },
    transmission: {
      name: 'Transmission Repair',
      basePrice: 400,
      features: ['Fluid Replacement', 'Clutch Repair', 'Gearbox Inspection', 'Performance Testing'],
      duration: '2-4 days',
    },
    bodywork: {
      name: 'Bodywork Repair',
      basePrice: 300,
      features: ['Dent Removal', 'Paint Matching', 'Panel Replacement', 'Polishing'],
      duration: '1-3 days',
    },
    electrical: {
      name: 'Electrical Repair',
      basePrice: 200,
      features: ['Wiring Repair', 'Battery Replacement', 'Sensor Calibration', 'System Diagnostics'],
      duration: '1-2 days',
    },
  };

  // Cost estimator logic
  const calculateCost = () => {
    let baseCost = repairTypes[selectedRepair].basePrice;
    if (vehicleType === 'suv') baseCost += 50;
    if (vehicleType === 'truck') baseCost += 100;
    if (repairUrgency === 'urgent') baseCost *= 1.3; // 30% surcharge for urgent repairs
    return Math.round(baseCost);
  };

  // Repair process steps
  const processSteps = [
    {
      id: 1,
      title: 'Initial Assessment',
      description: 'Our technicians perform a comprehensive diagnostic to identify the issue.',
      icon: Wrench,
      image: '/images/repair-assessment.png',
    },
    {
      id: 2,
      title: 'Part Sourcing',
      description: 'We source genuine parts to ensure quality and compatibility.',
      icon: Car,
      image: '/images/repair-parts.png',
    },
    {
      id: 3,
      title: 'Repair Execution',
      description: 'Expert technicians execute repairs with precision using advanced tools.',
      icon: Tool,
      image: '/images/repair-execution.png',
    },
    {
      id: 4,
      title: 'Quality Assurance',
      description: 'A final inspection ensures your vehicle is road-ready.',
      icon: CheckCircle,
      image: '/images/repair-quality.png',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length);
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
          <source src="/videos/repairs-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-500/40 to-yellow-400/40 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-in slide-in-from-top-2 duration-700">
            Expert Vehicle Repairs
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Restore your vehicle to peak performance with our state-of-the-art repair services.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Request a Repair</span>
          </button>
        </div>
      </section>

      {/* Repair Types */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Select Your Repair Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.keys(repairTypes).map((repair, index) => (
            <div
              key={repair}
              className={`relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl group perspective-1000 animate-in slide-in-from-bottom-2 duration-500 ${
                selectedRepair === repair ? 'ring-2 ring-orange-500' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedRepair(repair)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 group-hover:from-red-600/40 group-hover:to-yellow-400/40 transition-all duration-500" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{repairTypes[repair].name}</h3>
                <p className="text-gray-300 text-lg font-semibold mb-4">${repairTypes[repair].basePrice}+</p>
                <p className="text-gray-400 text-sm mb-4">Estimated Duration: {repairTypes[repair].duration}</p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                  {repairTypes[repair].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-orange-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full px-6 py-3 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 ${
                    selectedRepair === repair
                      ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:scale-105'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {selectedRepair === repair ? 'Selected' : 'Select Repair'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Estimator */}
      <section className="relative bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
            Estimate Your Repair Cost
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
                <label className="block text-white font-semibold mb-2">Repair Urgency</label>
                <select
                  value={repairUrgency}
                  onChange={(e) => setRepairUrgency(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                >
                  <option value="standard">Standard</option>
                  <option value="urgent">Urgent (30% Surcharge)</option>
                </select>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">
                  Estimated Cost: <span className="text-orange-500">${calculateCost()}</span>
                </p>
                <button className="mt-4 px-8 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process Carousel */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Our Repair Process
        </h2>
        <div className="relative">
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
            <div className="relative flex flex-col items-center">
              <img
                src={processSteps[currentStep].image}
                alt={processSteps[currentStep].title}
                className="w-full h-64 object-cover rounded-xl mb-4 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="flex items-center space-x-3">
                {(() => {
                  const IconComponent = processSteps[currentStep].icon;
                  return IconComponent ? <IconComponent className="w-6 h-6 text-yellow-400" /> : null;
                })()}
                <h3 className="text-xl font-bold text-white">{processSteps[currentStep].title}</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2 text-center">{processSteps[currentStep].description}</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentStep((prev) => (prev + 1) % processSteps.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* Repair Request Form */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Request a Repair
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
              <label className="block text-white font-semibold mb-2">Repair Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                placeholder="Describe the issue..."
                rows="4"
              />
            </div>
            <button className="w-full px-8 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
              Submit Request
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-red-600/30 via-orange-500/30 to-yellow-400/30 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Restore Your Vehicle Today
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Schedule your repair with our expert team and get back on the road with confidence.
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

        .animate-in {
          animation-fill-mode: both;
        }

        .slide-in-from-top-2 {
          animation: slideInDown 0.5s ease-out;
        }

        .slide-in-from-bottom-2 {
          animation: slideInBottom 0.5s ease-out;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default RepairsPage;
