"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Filter, Heart, Share2, Eye, Calendar, Gauge, Fuel, 
  MapPin, Star, ArrowRight, Car, Shield, Award, Zap, ChevronDown,
  ChevronLeft, ChevronRight, Play, Camera, Phone, Mail, Navigation,
  Settings, Users, Palette, Clock, CheckCircle, X, Grid, List,
  Battery, Leaf, Globe, Wifi, Smartphone, Sun, Wind, Droplets,
  Snowflake, Mountain, Route, Timer
} from 'lucide-react';

const LuxuryElectricPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: '',
    brand: '',
    year: '',
    range: '',
    chargingSpeed: ''
  });
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [chargingSimulation, setChargingSimulation] = useState(0);
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

  // Charging simulation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setChargingSimulation(prev => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const electricVehicles = [
    {
      id: 1,
      name: 'Tesla Model S Plaid',
      year: 2024,
      price: 108990,
      originalPrice: 118000,
      range: 396,
      acceleration: 1.99,
      topSpeed: 200,
      chargingTime: 15,
      batteryCapacity: 100,
      efficiency: 120,
      location: 'San Francisco',
      images: [
        'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800'
      ],
      features: ['Autopilot', 'Over-the-air updates', '17" touchscreen', 'Premium connectivity'],
      rating: 4.8,
      reviews: 342,
      seller: 'Tesla Direct',
      certified: true,
      warranty: '4 years',
      drivetrain: 'Tri-Motor AWD',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Lucid Air Dream Edition',
      year: 2024,
      price: 169000,
      originalPrice: 179000,
      range: 516,
      acceleration: 2.5,
      topSpeed: 168,
      chargingTime: 20,
      batteryCapacity: 118,
      efficiency: 135,
      location: 'Los Angeles',
      images: [
        'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800'
      ],
      features: ['Glass Canopy', 'Surreal Sound', 'DreamDrive Pro', '34" 5K display'],
      rating: 4.9,
      reviews: 89,
      seller: 'Lucid Motors',
      certified: true,
      warranty: '4 years',
      drivetrain: 'Dual-Motor AWD',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      id: 3,
      name: 'BMW iX xDrive50',
      year: 2024,
      price: 87100,
      originalPrice: 95000,
      range: 324,
      acceleration: 4.6,
      topSpeed: 124,
      chargingTime: 35,
      batteryCapacity: 111.5,
      efficiency: 102,
      location: 'New York',
      images: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
        'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800',
        'https://images.unsplash.com/photo-1570294817154-b93e58de0eb5?w=800'
      ],
      features: ['xDrive AWD', 'Panoramic roof', 'Gesture control', 'Harman Kardon audio'],
      rating: 4.7,
      reviews: 156,
      seller: 'BMW Electric',
      certified: true,
      warranty: '4 years',
      drivetrain: 'Dual-Motor AWD',
      gradient: 'from-green-600 to-teal-500'
    },
    {
      id: 4,
      name: 'Mercedes EQS 580',
      year: 2024,
      price: 104400,
      originalPrice: 112000,
      range: 453,
      acceleration: 4.2,
      topSpeed: 155,
      chargingTime: 31,
      batteryCapacity: 107.8,
      efficiency: 118,
      location: 'Miami',
      images: [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800',
        'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800'
      ],
      features: ['MBUX Hyperscreen', '4MATIC AWD', 'Air suspension', 'Burmester 3D sound'],
      rating: 4.6,
      reviews: 234,
      seller: 'Mercedes EV',
      certified: true,
      warranty: '4 years',
      drivetrain: 'Dual-Motor AWD',
      gradient: 'from-indigo-600 to-purple-500'
    },
    {
      id: 5,
      name: 'Audi e-tron GT',
      year: 2024,
      price: 106395,
      originalPrice: 115000,
      range: 238,
      acceleration: 3.9,
      topSpeed: 152,
      chargingTime: 23,
      batteryCapacity: 93.4,
      efficiency: 95,
      location: 'Chicago',
      images: [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
        'https://images.unsplash.com/photo-1570294817154-b93e58de0eb5?w=800'
      ],
      features: ['Quattro AWD', 'Matrix LED', 'Bang & Olufsen', 'Virtual cockpit plus'],
      rating: 4.8,
      reviews: 167,
      seller: 'Audi Electric',
      certified: true,
      warranty: '4 years',
      drivetrain: 'Dual-Motor AWD',
      gradient: 'from-red-600 to-orange-500'
    },
    {
      id: 6,
      name: 'Rivian R1T',
      year: 2024,
      price: 75900,
      originalPrice: 85000,
      range: 314,
      acceleration: 4.5,
      topSpeed: 125,
      chargingTime: 40,
      batteryCapacity: 135,
      efficiency: 74,
      location: 'Denver',
      images: [
        'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800',
        'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
        'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800'
      ],
      features: ['Tank Turn', 'Camp Mode', 'Gear Guard', '11,000 lbs towing'],
      rating: 4.5,
      reviews: 234,
      seller: 'Rivian Direct',
      certified: true,
      warranty: '5 years',
      drivetrain: 'Quad-Motor AWD',
      gradient: 'from-teal-500 to-green-400'
    }
  ];

  const brands = ['All Brands', 'Tesla', 'Lucid', 'BMW', 'Mercedes', 'Audi', 'Rivian'];
  const priceRanges = ['All Prices', 'Under $50k', '$50k - $100k', '$100k - $200k', 'Over $200k'];
  const years = ['All Years', '2024', '2023', '2022', '2021'];
  const rangeOptions = ['All Ranges', '200+ miles', '300+ miles', '400+ miles', '500+ miles'];
  const chargingOptions = ['All Speeds', 'Fast (15-30 min)', 'Standard (30-60 min)', 'Slow (8+ hours)'];

  const toggleFavorite = (vehicleId) => {
    setFavorites(prev => 
      prev.includes(vehicleId) 
        ? prev.filter(id => id !== vehicleId)
        : [...prev, vehicleId]
    );
  };

  const filteredVehicles = electricVehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !selectedFilters.brand || selectedFilters.brand === 'All Brands' || 
                        vehicle.name.includes(selectedFilters.brand);
    return matchesSearch && matchesBrand;
  });

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1}deg)`
      }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }} />
        
        {/* Floating electric elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/5 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${12 + Math.random() * 20}px`
            }}
          >
            {i % 3 === 0 && <Zap className="w-full h-full" />}
            {i % 3 === 1 && <Battery className="w-full h-full" />}
            {i % 3 === 2 && <Leaf className="w-full h-full" />}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="mb-8 animate-in slide-in-from-top duration-1000">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-6">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-white/80">Zero Emissions • Premium Performance</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent mb-6 leading-tight">
              Luxury <span className="relative">
                Electric
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-orange-400/20 blur-2xl rounded-lg" />
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our curated collection of premium electric vehicles, each offering cutting-edge technology and sustainable performance
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Zap, number: '500+', label: 'Miles Range' },
              { icon: Battery, number: '0', label: 'Emissions' },
              { icon: Leaf, number: '4.8/5', label: 'Eco Rating' },
              { icon: Award, number: '15+', label: 'Brands Available' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'slideInUp 0.8s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Search Bar */}
              <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search by make, model, or dealer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {/* View Toggle */}
              <div className="flex rounded-xl overflow-hidden border border-white/10">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-4 transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-orange-600 text-white' 
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-4 transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-orange-600 text-white' 
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-white/10 animate-in slide-in-from-top duration-500">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { key: 'brand', options: brands, placeholder: 'Brand' },
                    { key: 'priceRange', options: priceRanges, placeholder: 'Price Range' },
                    { key: 'year', options: years, placeholder: 'Year' },
                    { key: 'range', options: rangeOptions, placeholder: 'Range' },
                    { key: 'chargingSpeed', options: chargingOptions, placeholder: 'Charging Speed' }
                  ].map((filter) => (
                    <select
                      key={filter.key}
                      value={selectedFilters[filter.key]}
                      onChange={(e) => setSelectedFilters(prev => ({ ...prev, [filter.key]: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 focus:scale-105"
                    >
                      <option value="" className="bg-gray-800">{filter.placeholder}</option>
                      {filter.options.map(option => (
                        <option key={option} value={option} className="bg-gray-800">{option}</option>
                      ))}
                    </select>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sort Bar */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <span className="text-gray-400">Showing</span> <span className="text-orange-400 font-semibold">{filteredVehicles.length}</span> <span className="text-gray-400">premium electric vehicles</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:border-orange-400 transition-all duration-300"
            >
              <option value="featured" className="bg-gray-800">Featured</option>
              <option value="price-low" className="bg-gray-800">Price: Low to High</option>
              <option value="price-high" className="bg-gray-800">Price: High to Low</option>
              <option value="range" className="bg-gray-800">Longest Range</option>
              <option value="charging" className="bg-gray-800">Fastest Charging</option>
            </select>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredVehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-700 hover:scale-105 hover:-rotate-1 cursor-pointer ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInUp 0.8s ease-out forwards'
                }}
                onMouseEnter={() => setActiveCard(vehicle.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setSelectedVehicle(vehicle)}
              >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${vehicle.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                
                {/* Image Section */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-80 flex-shrink-0' : 'h-64'
                }`}>
                  <img
                    src={vehicle.images[0]}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {vehicle.certified && (
                      <div className="flex items-center space-x-1 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <CheckCircle className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-semibold">Certified</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1 bg-blue-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <Zap className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-semibold">100% Electric</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(vehicle.id);
                      }}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        favorites.includes(vehicle.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(vehicle.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Range Indicator */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <Battery className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm font-semibold">{vehicle.range} mi</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className={`${viewMode === 'list' ? 'flex justify-between' : ''}`}>
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-200 transition-colors duration-300">
                            {vehicle.name}
                          </h3>
                          <p className="text-gray-400 text-sm">{vehicle.year} • {vehicle.seller}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                            ${vehicle.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400 line-through">
                            ${vehicle.originalPrice.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {/* Key Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Route className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{vehicle.range} mi range</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Timer className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{vehicle.acceleration}s 0-60</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{vehicle.chargingTime} min charge</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Battery className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{vehicle.batteryCapacity} kWh</span>
                        </div>
                      </div>

                      {/* Rating and Reviews */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{vehicle.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">({vehicle.reviews} reviews)</span>
                        <div className="flex items-center space-x-1">
                          <Shield className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-sm font-semibold">{vehicle.warranty}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {vehicle.features.slice(0, 4).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/10 hover:border-orange-400/50 transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className={`${viewMode === 'list' ? 'flex flex-col justify-center space-y-3 ml-6' : 'flex space-x-3'}`}>
                      <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 font-semibold text-sm">
                        View Details
                      </button>
                      <button className="flex-1 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold text-sm">
                        <Phone className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Details */}
                  <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${
                    viewMode === 'list' ? 'hidden' : ''
                  }`}>
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4 text-orange-400" />
                          <span className="text-sm">Virtual Tour</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Camera className="w-4 h-4 text-orange-400" />
                          <span className="text-sm">{vehicle.images.length} Photos</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Detail Modal */}
        {selectedVehicle && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVehicle(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image Gallery */}
                <div className="relative h-96 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedVehicle.images[0]}
                    alt={selectedVehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Gallery Navigation */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                    {selectedVehicle.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === 0 ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    
                    {/* Left Column */}
                    <div>
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h2 className="text-3xl font-bold text-white mb-2">{selectedVehicle.name}</h2>
                            <p className="text-gray-400">{selectedVehicle.year} • {selectedVehicle.seller}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-white mb-1">
                              ${selectedVehicle.price.toLocaleString()}
                            </div>
                            <div className="text-gray-400 line-through">
                              ${selectedVehicle.originalPrice.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < Math.floor(selectedVehicle.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                            <span className="text-white font-semibold ml-2">{selectedVehicle.rating}</span>
                          </div>
                          <span className="text-gray-400">({selectedVehicle.reviews} reviews)</span>
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
                        <h3 className="text-xl font-bold text-white mb-4">Electric Specifications</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { icon: Calendar, label: 'Year', value: selectedVehicle.year },
                            { icon: Route, label: 'Range', value: `${selectedVehicle.range} mi` },
                            { icon: Timer, label: '0-60 mph', value: `${selectedVehicle.acceleration}s` },
                            { icon: Gauge, label: 'Top Speed', value: `${selectedVehicle.topSpeed} mph` },
                            { icon: Battery, label: 'Battery', value: `${selectedVehicle.batteryCapacity} kWh` },
                            { icon: Zap, label: 'Fast Charge', value: `${selectedVehicle.chargingTime} min` }
                          ].map((spec) => (
                            <div key={spec.label} className="flex items-center space-x-3">
                              <spec.icon className="w-5 h-5 text-orange-400" />
                              <div>
                                <div className="text-gray-400 text-sm">{spec.label}</div>
                                <div className="text-white font-semibold">{spec.value}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedVehicle.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* Contact Form */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
                        <h3 className="text-xl font-bold text-white mb-4">Contact Dealer</h3>
                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                          />
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                          />
                          <textarea
                            placeholder="I'm interested in this vehicle..."
                            rows={3}
                            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 resize-none"
                          />
                          <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 font-semibold">
                            Send Message
                          </button>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <button className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                          <Phone className="w-4 h-4" />
                          <span>Call Now</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                          <Mail className="w-4 h-4" />
                          <span>Email</span>
                        </button>
                      </div>

                      {/* Schedule Test Drive */}
                      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30">
                        <h3 className="text-xl font-bold text-white mb-2">Schedule Test Drive</h3>
                        <p className="text-gray-300 mb-4">Experience this premium electric vehicle firsthand</p>
                        <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 font-semibold">
                          Book Test Drive
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Technology Section */}
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of automotive technology with AI-powered features and seamless connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Smartphone, 
                title: 'Smart Integration', 
                description: 'Seamless smartphone connectivity with wireless charging and OTA updates',
                gradient: 'from-blue-600 to-purple-600'
              },
              { 
                icon: Wifi, 
                title: 'Connected Services', 
                description: 'Real-time traffic, weather, and charging station information',
                gradient: 'from-orange-600 to-red-600'
              },
              { 
                icon: Eye, 
                title: 'Autonomous Features', 
                description: 'Advanced driver assistance with highway autopilot capabilities',
                gradient: 'from-purple-600 to-pink-600'
              },
              { 
                icon: Globe, 
                title: 'Global Network', 
                description: 'Access to worldwide charging networks and premium services',
                gradient: 'from-green-600 to-teal-600'
              }
            ].map((tech, index) => (
              <div
                key={tech.title}
                className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-700 hover:scale-105 hover:-rotate-1 cursor-pointer"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'slideInUp 0.8s ease-out forwards'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 mb-6`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <div className="bg-gradient-to-r from-orange-600/20 via-red-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Can't Find Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Dream EV?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert team can help you find the perfect electric vehicle. Tell us what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 font-semibold">
                Request Custom Search
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold">
                Speak with Expert
              </button>
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

        /* Hide scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
      `}</style>
    </div>
  );
};

export default LuxuryElectricPage;