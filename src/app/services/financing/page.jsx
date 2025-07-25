
"use client";
import React, { useState, useEffect } from 'react';
import { DollarSign, Car, Percent, CheckCircle, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import Link from 'next/link';

const FinancingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [currentStep, setCurrentStep] = useState(0);
  const [vehiclePrice, setVehiclePrice] = useState(20000);
  const [downPayment, setDownPayment] = useState(2000);
  const [loanTerm, setLoanTerm] = useState(36);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Financing plans
  const financingPlans = {
    standard: {
      name: 'Standard Financing',
      interestRate: 5.9,
      features: ['Fixed Rate', 'Flexible Terms (12-60 months)', 'No Prepayment Penalty'],
      minDownPayment: 10,
    },
    premium: {
      name: 'Premium Financing',
      interestRate: 4.9,
      features: ['Low Fixed Rate', 'Extended Terms (12-72 months)', 'No Prepayment Penalty', 'Cashback Rewards'],
      minDownPayment: 15,
    },
    elite: {
      name: 'Elite Financing',
      interestRate: 3.9,
      features: ['Lowest Fixed Rate', 'Extended Terms (12-84 months)', 'No Prepayment Penalty', 'Cashback Rewards', 'Free Maintenance Package'],
      minDownPayment: 20,
    },
  };

  // Loan calculator logic
  const calculateMonthlyPayment = () => {
    const principal = vehiclePrice - downPayment;
    const monthlyRate = financingPlans[selectedPlan].interestRate / 100 / 12;
    const payments = loanTerm;
    if (principal <= 0) return 0;
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);
    return Math.round(monthlyPayment);
  };

  // Financing process steps
  const financingSteps = [
    {
      id: 1,
      title: 'Application',
      description: 'Submit your financing application online or in-person.',
      icon: DollarSign,
      image: '/images/financing-application.png',
    },
    {
      id: 2,
      title: 'Vehicle Selection',
      description: 'Choose your dream vehicle from our extensive inventory.',
      icon: Car,
      image: '/images/financing-selection.png',
    },
    {
      id: 3,
      title: 'Loan Approval',
      description: 'Get fast approval with our streamlined process.',
      icon: Percent,
      image: '/images/financing-approval.png',
    },
    {
      id: 4,
      title: 'Finalization',
      description: 'Sign the paperwork and drive away with confidence.',
      icon: CheckCircle,
      image: '/images/financing-finalization.png',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % financingSteps.length);
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
          <source src="/videos/financing-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-500/40 to-yellow-400/40 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-in slide-in-from-top-2 duration-700">
            Flexible Vehicle Financing
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Drive your dream car with tailored financing plans designed for you.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Get Pre-Approved</span>
          </button>
        </div>
      </section>

      {/* Financing Plans */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Choose Your Financing Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.keys(financingPlans).map((plan, index) => (
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
                <h3 className="text-2xl font-bold text-white mb-2">{financingPlans[plan].name}</h3>
                <p className="text-gray-300 text-lg font-semibold mb-4">{financingPlans[plan].interestRate}% APR</p>
                <p className="text-gray-400 text-sm mb-4">Min. Down Payment: {financingPlans[plan].minDownPayment}%</p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                  {financingPlans[plan].features.map((feature, idx) => (
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

      {/* Loan Calculator */}
      <section className="relative bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
            Calculate Your Monthly Payment
          </h2>
          <div className="max-w-lg mx-auto bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
            <div className="space-y-6 relative z-10">
              <div>
                <label className="block text-white font-semibold mb-2">Vehicle Price ($)</label>
                <input
                  type="number"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(Math.max(0, e.target.value))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Enter vehicle price"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Down Payment ($)</label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Math.max(0, e.target.value))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  placeholder="Enter down payment"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Loan Term (Months)</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                >
                  <option value="12">12 Months</option>
                  <option value="24">24 Months</option>
                  <option value="36">36 Months</option>
                  <option value="48">48 Months</option>
                  <option value="60">60 Months</option>
                  <option value="72">72 Months</option>
                  <option value="84">84 Months</option>
                </select>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">
                  Estimated Monthly Payment: <span className="text-orange-500">${calculateMonthlyPayment()}</span>
                </p>
                <button className="mt-4 px-8 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Process Carousel */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Our Financing Process
        </h2>
        <div className="relative">
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
            <div className="relative flex flex-col items-center">
              <img
                src={financingSteps[currentStep].image}
                alt={financingSteps[currentStep].title}
                className="w-full h-64 object-cover rounded-xl mb-4 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="flex items-center space-x-3">
                {(() => {
                  const IconComponent = financingSteps[currentStep].icon;
                  return IconComponent ? <IconComponent className="w-6 h-6 text-yellow-400" /> : null;
                })()}
                <h3 className="text-xl font-bold text-white">{financingSteps[currentStep].title}</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2 text-center">{financingSteps[currentStep].description}</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep((prev) => (prev - 1 + financingSteps.length) % financingSteps.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentStep((prev) => (prev + 1) % financingSteps.length)}
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
            Drive Your Dream Car Today
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Get pre-approved for financing and start your journey with confidence.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Apply Now</span>
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

export default FinancingPage;
