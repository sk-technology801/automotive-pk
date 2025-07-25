"use client";
import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const NewCarsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  // Sample car data (replace with API or real data in production)
  const cars = [
    {
      id: 1,
      name: 'Elite X1',
      type: 'sports',
      image: '/cars/elite-x1.png', // Replace with actual image paths
      price: '$85,000',
      rating: 4.8,
      features: ['500 HP', '0-60 in 3.2s', 'Carbon Fiber Body'],
    },
    {
      id: 2,
      name: 'Luxury Z9',
      type: 'luxury',
      image: '/cars/luxury-z9.png',
      price: '$120,000',
      rating: 4.9,
      features: ['600 HP', 'Advanced AI Assist', 'Panoramic Roof'],
    },
    {
      id: 3,
      name: 'EcoVolt',
      type: 'electric',
      image: '/cars/ecovolt.png',
      price: '$65,000',
      rating: 4.7,
      features: ['400-mile Range', 'Fast Charging', 'Zero Emissions'],
    },
  ];

  // Filter cars based on search and category
  const filteredCars = cars.filter(
    (car) =>
      (filter === 'all' || car.type === filter) &&
      car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Auto-rotate featured car
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarIndex((prev) => (prev + 1) % cars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cars.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-in slide-in-from-top-2 duration-500">
            Discover New Cars
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the future of driving with our cutting-edge vehicles designed for performance, luxury, and sustainability.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Explore Now</span>
          </button>
        </div>
        {/* 3D Car Showcase */}
        <div className="relative mt-12 max-w-5xl mx-auto">
          <div className="relative w-full h-96 bg-black/50 rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10 group-hover:from-red-600/20 group-hover:to-yellow-400/20 transition-all duration-500" />
            <img
              src={cars[currentCarIndex].image}
              alt={cars[currentCarIndex].name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4">
              <h3 className="text-2xl font-bold text-white">{cars[currentCarIndex].name}</h3>
              <p className="text-gray-300">{cars[currentCarIndex].price}</p>
            </div>
            {/* Carousel Controls */}
            <button
              onClick={() => setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setCurrentCarIndex((prev) => (prev + 1) % cars.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search cars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          {/* Filter Dropdown */}
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            >
              <option value="all">All Types</option>
              <option value="sports">Sports</option>
              <option value="luxury">Luxury</option>
              <option value="electric">Electric</option>
            </select>
            <Filter className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className="relative bg-black/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl group animate-in slide-in-from-bottom-2 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-400/10 group-hover:from-red-600/20 group-hover:to-yellow-400/20 transition-all duration-500" />
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{car.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300 ml-1">{car.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{car.price}</p>
                <ul className="text-gray-400 text-sm mb-6 space-y-1">
                  {car.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href={`/vehicles/new-cars/${car.id}`}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Drive the Future?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get a personalized quote today and experience automotive excellence.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Get Your Quote</span>
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

        select {
          background-image: none !important;
        }
      `}</style>
    </div>
  );
};

export default NewCarsPage;