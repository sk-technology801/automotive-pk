
"use client";
import React, { useState, useEffect } from 'react';
import { Wrench, Shield, DollarSign, FileText, Car, ChevronRight, ChevronLeft, Star, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Sample services data
  const services = [
    {
      id: 1,
      name: 'Maintenance',
      icon: Wrench,
      description: 'Comprehensive maintenance packages to keep your vehicle performing at its peak.',
      longDescription: 'Our expert technicians use advanced diagnostics and premium parts to ensure your vehicle stays in top condition. From oil changes to full inspections, we’ve got you covered.',
      image: '/services/maintenance.png',
      video: '/videos/maintenance.mp4', // Replace with actual video paths
      features: ['Routine Checkups', 'Oil & Filter Changes', 'Tire Services', 'Brake Inspections'],
      price: '$99+/service',
      href: '/services/maintenance',
    },
    {
      id: 2,
      name: 'Repairs',
      icon: Car,
      description: 'Expert repairs for all makes and models with state-of-the-art technology.',
      longDescription: 'From engine diagnostics to bodywork, our skilled team restores your vehicle to factory standards using genuine parts and cutting-edge tools.',
      image: '/services/repairs.png',
      video: '/videos/repairs.mp4',
      features: ['Engine Diagnostics', 'Transmission Repair', 'Bodywork', 'Electrical Systems'],
      price: '$150+/repair',
      href: '/services/repairs',
    },
    {
      id: 3,
      name: 'Insurance',
      icon: Shield,
      description: 'Tailored insurance plans with comprehensive coverage and roadside assistance.',
      longDescription: 'Protect your investment with flexible insurance options, including collision coverage, theft protection, and 24/7 roadside support.',
      image: '/services/insurance.png',
      video: '/videos/insurance.mp4',
      features: ['Collision Coverage', 'Roadside Assistance', 'Theft Protection', 'Liability Insurance'],
      price: '$50+/month',
      href: '/services/insurance',
    },
    {
      id: 4,
      name: 'Financing',
      icon: DollarSign,
      description: 'Flexible financing options with competitive rates for your dream car.',
      longDescription: 'Our financing plans offer low APR, flexible terms, and pre-approval options to make owning your ideal vehicle seamless and affordable.',
      image: '/services/financing.png',
      video: '/videos/financing.mp4',
      features: ['Low APR Rates', 'Flexible Terms', 'Pre-Approval', 'Leasing Options'],
      price: 'Varies',
      href: '/services/financing',
    },
    {
      id: 5,
      name: 'Warranty',
      icon: FileText,
      description: 'Extended warranty plans for ultimate peace of mind on the road.',
      longDescription: 'Drive confidently with our transferable warranty plans, covering parts, labor, and nationwide support for years to come.',
      image: '/services/warranty.png',
      video: '/videos/warranty.mp4',
      features: ['Extended Coverage', 'Nationwide Support', 'Parts & Labor', 'Transferable Plans'],
      price: '$200+/year',
      href: '/services/warranty',
    },
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: 'The maintenance service was top-notch! My car feels brand new.',
      author: 'John D.',
      rating: 5,
    },
    {
      id: 2,
      quote: 'Their financing options made my dream car a reality!',
      author: 'Sarah M.',
      rating: 4.8,
    },
    {
      id: 3,
      quote: 'The warranty plan saved me thousands on repairs!',
      author: 'Mike R.',
      rating: 4.9,
    },
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'What does the maintenance package include?',
      answer: 'Our maintenance packages include oil changes, tire rotations, brake inspections, and full vehicle diagnostics, tailored to your vehicle’s needs.',
    },
    {
      id: 2,
      question: 'How long does a typical repair take?',
      answer: 'Repair times vary based on the issue, but most standard repairs are completed within 1-2 days. We provide a timeline after diagnostics.',
    },
    {
      id: 3,
      question: 'Can I customize my insurance plan?',
      answer: 'Yes, we offer customizable insurance plans to suit your driving habits and coverage needs.',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
          <source src="/videos/services-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-500/40 to-yellow-400/40 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-in slide-in-from-top-2 duration-700">
            Elite Automotive Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Unparalleled expertise, cutting-edge technology, and personalized care for your vehicle.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Book Now</span>
          </button>
        </div>
      </section>

      {/* Interactive Service Selector */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Our Premium Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative perspective-1000 group"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div
                className={`relative w-full h-[500px] transition-transform duration-700 transform-style-3d ${
                  activeService === service.id ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Face */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl backface-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 group-hover:from-red-600/40 group-hover:to-yellow-400/40 transition-all duration-500" />
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <service.icon className="w-7 h-7 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <p className="text-gray-400 font-semibold">{service.price}</p>
                  </div>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-2xl shadow-2xl backface-hidden rotate-y-180">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-yellow-400/30" />
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-200 text-sm mb-4">{service.longDescription}</p>
                      <ul className="text-gray-300 text-sm mb-6 space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <ChevronRight className="w-4 h-4 text-orange-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={service.href}
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                    >
                      Explore {service.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Compare Our Services
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-black/50 backdrop-blur-xl rounded-2xl shadow-2xl">
            <thead>
              <tr className="bg-gradient-to-r from-red-600/20 to-yellow-400/20">
                <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Price</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Key Features</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr
                  key={service.id}
                  className="border-t border-white/10 hover:bg-white/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms`, animation: 'slideInBottom 0.5s ease-out forwards' }}
                >
                  <td className="px-6 py-4 text-white">{service.name}</td>
                  <td className="px-6 py-4 text-gray-300">{service.price}</td>
                  <td className="px-6 py-4 text-gray-300">{service.features.join(', ')}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={service.href}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-lg hover:scale-105 transform transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="relative bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
            What Our Customers Say
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
              <p className="text-gray-200 text-lg italic mb-4">{testimonials[currentTestimonial].quote}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">{testimonials[currentTestimonial].rating}</span>
                  <span className="text-white font-semibold">– {testimonials[currentTestimonial].author}</span>
                </div>
              </div>
            </div>
            {/* Carousel Controls */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-black/50 backdrop-blur-xl rounded-2xl shadow-xl animate-in slide-in-from-bottom-2 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center px-6 py-4 text-white"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {expandedFAQ === faq.id ? (
                  <Minus className="w-5 h-5 text-orange-500" />
                ) : (
                  <Plus className="w-5 h-5 text-orange-500" />
                )}
              </button>
              {expandedFAQ === faq.id && (
                <div className="px-6 py-4 text-gray-300 animate-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-red-600/30 via-orange-500/30 to-yellow-400/30 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Drive with Confidence
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Schedule your premium service today and experience automotive excellence.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Schedule Now</span>
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

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
