
"use client";
import React, { useState, useEffect } from 'react';
import { Car, Truck, Sparkles, Star, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const VehiclesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('sedan');
  const [currentFeature, setCurrentFeature] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Vehicle categories and models
  const vehicleCategories = {
    sedan: {
      name: 'Sedans',
      models: [
        {
          name: 'Luxura S',
          price: 35000,
          specs: { horsepower: 200, fuelEconomy: '30 MPG', seats: 5, cargo: '15 cu ft' },
          features: ['Advanced Safety Suite', 'Leather Interior', 'Infotainment System', 'Fuel Efficiency'],
          image: 'https://images.pexels.com/photos/14268319/pexels-photo-14268319.jpeg?_gl=1*4lrwku*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQyMzc4JGozMyRsMCRoMA..',
        },
        {
          name: 'Elegance X',
          price: 42000,
          specs: { horsepower: 250, fuelEconomy: '28 MPG', seats: 5, cargo: '16 cu ft' },
          features: ['Premium Audio', 'Adaptive Cruise', 'Panoramic Sunroof', 'Smart Connectivity'],
          image: 'https://images.pexels.com/photos/33141931/pexels-photo-33141931.jpeg?_gl=1*1xe89yh*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQyNTI0JGoyNCRsMCRoMA..',
        },
      ],
    },
    suv: {
      name: 'SUVs',
      models: [
        {
          name: 'Venture Q',
          price: 45000,
          specs: { horsepower: 300, fuelEconomy: '25 MPG', seats: 7, cargo: '40 cu ft' },
          features: ['All-Wheel Drive', 'Spacious Cabin', 'Towing Package', 'Off-Road Capability'],
          image: 'https://images.pexels.com/photos/33136875/pexels-photo-33136875.jpeg?_gl=1*1wui66z*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQyNjE1JGo0MCRsMCRoMA..',
        },
        {
          name: 'Explorer Z',
          price: 52000,
          specs: { horsepower: 350, fuelEconomy: '23 MPG', seats: 8, cargo: '45 cu ft' },
          features: ['Luxury Trim', 'Advanced AWD', 'Third-Row Seating', 'Roof Rails'],
          image: 'https://images.pexels.com/photos/2218914/pexels-photo-2218914.jpeg?_gl=1*1178i57*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQyNzE1JGo5JGwwJGgw',
        },
      ],
    },
    truck: {
      name: 'Trucks',
      models: [
        {
          name: 'Titan T',
          price: 48000,
          specs: { horsepower: 400, fuelEconomy: '20 MPG', seats: 5, cargo: '1500 lbs payload' },
          features: ['Heavy-Duty Frame', 'Towing Capacity', 'Bed Liner', '4WD'],
          image: 'https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg?_gl=1*nuy1ac*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQyODM2JGo2JGwwJGgw',
        },
        {
          name: 'Forge R',
          price: 55000,
          specs: { horsepower: 450, fuelEconomy: '18 MPG', seats: 6, cargo: '1800 lbs payload' },
          features: ['Off-Road Package', 'Premium Towing', 'Crew Cab', 'Smart Trailering'],
          image: 'https://images.pexels.com/photos/33081220/pexels-photo-33081220.jpeg?_gl=1*19jyorm*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQyOTEwJGoxOCRsMCRoMA..',
        },
      ],
    },
    sports: {
      name: 'Sports Cars',
      models: [
        {
          name: 'Apex R1',
          price: 85000,
          specs: { horsepower: 450, topSpeed: '200 mph', zeroToSixty: '3.5 s', weight: '3200 lbs' },
          features: ['Turbocharged V6', 'Carbon Fiber Body', 'Adaptive Suspension', 'Racing Seats'],
          image: 'https://images.pexels.com/photos/30035513/pexels-photo-30035513.jpeg?_gl=1*1pmo1i7*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQyOTg0JGozOSRsMCRoMA..',
        },
        {
          name: 'Vortex S',
          price: 120000,
          specs: { horsepower: 600, topSpeed: '220 mph', zeroToSixty: '2.9 s', weight: '3100 lbs' },
          features: ['Twin-Turbo V8', 'Lightweight Chassis', 'Active Aero', 'Track Mode'],
          image: 'https://images.pexels.com/photos/2794001/pexels-photo-2794001.jpeg?_gl=1*1u5fp26*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQzMDY0JGoyNCRsMCRoMA..',
        },
      ],
    },
  };

  // Vehicle features
  const vehicleFeatures = [
    {
      id: 1,
      title: 'Advanced Safety',
      description: 'Cutting-edge safety systems for peace of mind.',
      icon: Car,
      image: 'https://images.pexels.com/photos/29293847/pexels-photo-29293847.jpeg?_gl=1*jvmtxw*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQzMTk2JGo1MyRsMCRoMA..',
    },
    {
      id: 2,
      title: 'Performance Engineering',
      description: 'Powerful engines and precise handling for any road.',
      icon: Sparkles,
      image: 'https://images.pexels.com/photos/24425604/pexels-photo-24425604.jpeg?_gl=1*13zfb2z*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQzMjYwJGo1NiRsMCRoMA..',
    },
    {
      id: 3,
      title: 'Luxury Comfort',
      description: 'Premium interiors designed for ultimate comfort.',
      icon: Star,
      image: 'https://images.pexels.com/photos/9564873/pexels-photo-9564873.jpeg?_gl=1*1ti8fe8*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTM1NDE0MzEkbzQ0JGcxJHQxNzUzNTQzMjg4JGoyOCRsMCRoMA..',
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % vehicleFeatures.length);
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
          <source src="/videos/vehicles-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-500/40 to-yellow-400/40 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-in slide-in-from-top-2 duration-700">
            Explore Our Vehicles
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Find the perfect vehicle for your lifestyle, from luxury sedans to high-performance sports cars.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Browse Models</span>
          </button>
        </div>
      </section>

      {/* Vehicle Category Selector */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Choose Your Vehicle Category
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(vehicleCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:scale-105'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {vehicleCategories[category].name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicleCategories[selectedCategory].models.map((model, index) => (
            <div
              key={model.name}
              className="relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl group perspective-1000 animate-in slide-in-from-bottom-2 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 group-hover:from-red-600/40 group-hover:to-yellow-400/40 transition-all duration-500" />
              <div className="p-6">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-48 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-500"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                <p className="text-gray-300 text-lg font-semibold mb-4">${model.price.toLocaleString()}</p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-orange-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Comparison Tool */}
      <section className="relative bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
            Compare Vehicle Specs
          </h2>
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
            <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-white text-sm md:text-base">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-2 text-left">Model</th>
                    <th className="py-4 px-2 text-center">Horsepower</th>
                    <th className="py-4 px-2 text-center">Fuel Economy</th>
                    <th className="py-4 px-2 text-center">Seats</th>
                    <th className="py-4 px-2 text-center">Cargo/Payload</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(vehicleCategories).flatMap((category) =>
                    vehicleCategories[category].models.map((model) => (
                      <tr
                        key={model.name}
                        className={`border-b border-white/10 hover:bg-white/5 transition-all duration-300 ${
                          vehicleCategories[selectedCategory].models.some((m) => m.name === model.name) ? 'bg-orange-500/10' : ''
                        }`}
                      >
                        <td className="py-4 px-2">{model.name}</td>
                        <td className="py-4 px-2 text-center">{model.specs.horsepower}</td>
                        <td className="py-4 px-2 text-center">{model.specs.fuelEconomy || model.specs.topSpeed}</td>
                        <td className="py-4 px-2 text-center">{model.specs.seats}</td>
                        <td className="py-4 px-2 text-center">{model.specs.cargo || model.specs.weight}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Features Carousel */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Key Vehicle Features
        </h2>
        <div className="relative">
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10" />
            <div className="relative flex flex-col items-center">
              <img
                src={vehicleFeatures[currentFeature].image}
                alt={vehicleFeatures[currentFeature].title}
                className="w-full h-64 object-cover rounded-xl mb-4 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="flex items-center space-x-3">
                {(() => {
                  const IconComponent = vehicleFeatures[currentFeature].icon;
                  return IconComponent ? <IconComponent className="w-6 h-6 text-yellow-400" /> : null;
                })()}
                <h3 className="text-xl font-bold text-white">{vehicleFeatures[currentFeature].title}</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2 text-center">{vehicleFeatures[currentFeature].description}</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentFeature((prev) => (prev - 1 + vehicleFeatures.length) % vehicleFeatures.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentFeature((prev) => (prev + 1) % vehicleFeatures.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Find Your Perfect Vehicle
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
            Drive Your Dream Vehicle
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Explore our range and schedule a test drive today.
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

export default VehiclesPage;
