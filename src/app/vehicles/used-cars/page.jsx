"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Filter, Heart, Share2, Eye, Calendar, Gauge, Fuel, 
  MapPin, Star, ArrowRight, Car, Shield, Award, Zap, ChevronDown,
  ChevronLeft, ChevronRight, Play, Camera, Phone, Mail, Navigation,
  Settings, Users, Palette, Clock, CheckCircle, X, Grid, List
} from 'lucide-react';

const LuxuryUsedCarsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: '',
    brand: '',
    year: '',
    mileage: '',
    fuelType: '',
    transmission: ''
  });
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
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

  const usedCars = [
    {
      id: 1,
      name: 'BMW M4 Competition',
      year: 2022,
      price: 85900,
      originalPrice: 92500,
      mileage: 12400,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'New York',
      images: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
        'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800'
      ],
      features: ['Navigation', 'Leather Seats', 'Sunroof', 'Bluetooth'],
      rating: 4.8,
      reviews: 127,
      seller: 'Elite Motors',
      certified: true,
      warranty: '2 Years',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 2,
      name: 'Mercedes-AMG GT63S',
      year: 2021,
      price: 125900,
      originalPrice: 135000,
      mileage: 8900,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Los Angeles',
      images: [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
        'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800'
      ],
      features: ['AMG Performance', 'Premium Audio', 'Heated Seats', 'Adaptive Cruise'],
      rating: 4.9,
      reviews: 89,
      seller: 'Luxury Auto',
      certified: true,
      warranty: '3 Years',
      gradient: 'from-red-600 to-orange-500'
    },
    {
      id: 3,
      name: 'Audi RS6 Avant',
      year: 2023,
      price: 118500,
      originalPrice: 128000,
      mileage: 5200,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Miami',
      images: [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
        'https://images.unsplash.com/photo-1570294817154-b93e58de0eb5?w=800'
      ],
      features: ['Quattro AWD', 'Virtual Cockpit', 'Matrix LED', 'Bang & Olufsen'],
      rating: 4.7,
      reviews: 156,
      seller: 'Premium Cars',
      certified: true,
      warranty: '2 Years',
      gradient: 'from-green-600 to-teal-500'
    },
    {
      id: 4,
      name: 'Porsche 911 Turbo S',
      year: 2022,
      price: 189900,
      originalPrice: 205000,
      mileage: 3800,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Chicago',
      images: [
        'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800',
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800'
      ],
      features: ['Sport Chrono', 'PASM', 'Ceramic Brakes', 'Burmester Audio'],
      rating: 4.9,
      reviews: 92,
      seller: 'Porsche Center',
      certified: true,
      warranty: '4 Years',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      id: 5,
      name: 'Tesla Model S Plaid',
      year: 2023,
      price: 98900,
      originalPrice: 108000,
      mileage: 6700,
      fuelType: 'Electric',
      transmission: 'Automatic',
      location: 'San Francisco',
      images: [
        'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800'
      ],
      features: ['Autopilot', '17" Touchscreen', 'Premium Connectivity', 'Supercharging'],
      rating: 4.6,
      reviews: 203,
      seller: 'Tesla Direct',
      certified: true,
      warranty: '4 Years',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 6,
      name: 'Lamborghini Huracán',
      year: 2021,
      price: 245900,
      originalPrice: 265000,
      mileage: 2100,
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Las Vegas',
      images: [
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
        'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800'
      ],
      features: ['All-Wheel Drive', 'Carbon Fiber', 'Sport Exhaust', 'Alcantara Interior'],
      rating: 4.8,
      reviews: 67,
      seller: 'Exotic Motors',
      certified: true,
      warranty: '2 Years',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const brands = ['All Brands', 'BMW', 'Mercedes', 'Audi', 'Porsche', 'Tesla', 'Lamborghini'];
  const priceRanges = ['All Prices', 'Under $50k', '$50k - $100k', '$100k - $200k', 'Over $200k'];
  const years = ['All Years', '2023', '2022', '2021', '2020', '2019'];

  const toggleFavorite = (carId) => {
    setFavorites(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const filteredCars = usedCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !selectedFilters.brand || selectedFilters.brand === 'All Brands' || 
                        car.name.includes(selectedFilters.brand);
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-600/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }} />
        
        {/* Floating car icons */}
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
            <Car className="w-full h-full" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="mb-8 animate-in slide-in-from-top duration-1000">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-6">
              <Award className="w-5 h-5 text-orange-400" />
              <span className="text-white/80">Certified Pre-Owned Excellence</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent mb-6 leading-tight">
              Premium <span className="relative">
                Used Cars
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-orange-400/20 blur-2xl rounded-lg" />
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our curated collection of luxury pre-owned vehicles, each inspected for excellence and certified for your peace of mind
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Car, number: '500+', label: 'Premium Cars' },
              { icon: Shield, number: '100%', label: 'Certified' },
              { icon: Star, number: '4.8/5', label: 'Rating' },
              { icon: Award, number: '15+', label: 'Years Experience' }
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
                    { key: 'fuelType', options: ['All Types', 'Petrol', 'Electric', 'Hybrid'], placeholder: 'Fuel Type' },
                    { key: 'transmission', options: ['All', 'Automatic', 'Manual'], placeholder: 'Transmission' },
                    { key: 'mileage', options: ['All', 'Under 10k', '10k-50k', 'Over 50k'], placeholder: 'Mileage' }
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
              <span className="text-gray-400">Showing</span> <span className="text-orange-400 font-semibold">{filteredCars.length}</span> <span className="text-gray-400">premium vehicles</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:border-orange-400 transition-all duration-300"
            >
              <option value="featured" className="bg-gray-800">Featured</option>
              <option value="price-low" className="bg-gray-800">Price: Low to High</option>
              <option value="price-high" className="bg-gray-800">Price: High to Low</option>
              <option value="year" className="bg-gray-800">Newest First</option>
              <option value="mileage" className="bg-gray-800">Lowest Mileage</option>
            </select>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredCars.map((car, index) => (
              <div
                key={car.id}
                className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-700 hover:scale-105 hover:-rotate-1 cursor-pointer ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInUp 0.8s ease-out forwards'
                }}
                onMouseEnter={() => setActiveCard(car.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setSelectedCar(car)}
              >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${car.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                
                {/* Image Section */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-80 flex-shrink-0' : 'h-64'
                }`}>
                  <img
                    src={car.images[0]}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {car.certified && (
                      <div className="flex items-center space-x-1 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <CheckCircle className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-semibold">Certified</span>
                      </div>
                    )}
                    <div className="bg-orange-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-semibold">
                        ${(car.originalPrice - car.price).toLocaleString()} Off
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(car.id);
                      }}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        favorites.includes(car.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(car.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Image Gallery Indicator */}
                  <div className="absolute bottom-4 left-4 flex space-x-1">
                    {car.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          imgIndex === 0 ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Video Play Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Play className="w-4 h-4 ml-1" />
                    </button>
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
                            {car.name}
                          </h3>
                          <p className="text-gray-400 text-sm">{car.year} • {car.seller}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                            ${car.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400 line-through">
                            ${car.originalPrice.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {/* Key Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Gauge className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{car.mileage.toLocaleString()} mi</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fuel className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{car.fuelType}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Settings className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{car.transmission}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400" />
                          <span className="text-gray-300 text-sm">{car.location}</span>
                        </div>
                      </div>

                      {/* Rating and Reviews */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{car.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">({car.reviews} reviews)</span>
                        <div className="flex items-center space-x-1">
                          <Shield className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-sm font-semibold">{car.warranty}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {car.features.slice(0, 4).map((feature, featureIndex) => (
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
                          <span className="text-sm">{car.images.length} Photos</span>
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

        {/* Car Detail Modal */}
        {selectedCar && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCar(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image Gallery */}
                <div className="relative h-96 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedCar.images[0]}
                    alt={selectedCar.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Gallery Navigation */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                    {selectedCar.images.map((_, index) => (
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
                            <h2 className="text-3xl font-bold text-white mb-2">{selectedCar.name}</h2>
                            <p className="text-gray-400">{selectedCar.year} • {selectedCar.seller}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-white mb-1">
                              ${selectedCar.price.toLocaleString()}
                            </div>
                            <div className="text-gray-400 line-through">
                              ${selectedCar.originalPrice.toLocaleString()}
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
                                  i < Math.floor(selectedCar.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                            <span className="text-white font-semibold ml-2">{selectedCar.rating}</span>
                          </div>
                          <span className="text-gray-400">({selectedCar.reviews} reviews)</span>
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
                        <h3 className="text-xl font-bold text-white mb-4">Specifications</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { icon: Calendar, label: 'Year', value: selectedCar.year },
                            { icon: Gauge, label: 'Mileage', value: `${selectedCar.mileage.toLocaleString()} mi` },
                            { icon: Fuel, label: 'Fuel Type', value: selectedCar.fuelType },
                            { icon: Settings, label: 'Transmission', value: selectedCar.transmission },
                            { icon: MapPin, label: 'Location', value: selectedCar.location },
                            { icon: Shield, label: 'Warranty', value: selectedCar.warranty }
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
                          {selectedCar.features.map((feature, index) => (
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
                        <p className="text-gray-300 mb-4">Experience this premium vehicle firsthand</p>
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

        {/* Load More Button */}
        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <button className="group bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1 font-semibold">
            <span className="flex items-center space-x-2">
              <span>Load More Premium Cars</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Bottom CTA Section */}
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <div className="bg-gradient-to-r from-orange-600/20 via-red-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Can't Find Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Dream Car?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert team can help you find the perfect luxury vehicle. Tell us what you're looking for.
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

export default LuxuryUsedCarsPage;