"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, Shield, Users, Car, Star, Trophy, Target, Heart,
  Eye, Zap, Globe, TrendingUp, Clock, CheckCircle, ArrowRight,
  Play, Pause, Volume2, Calendar, MapPin, Mail, Phone,
  Linkedin, Twitter, Instagram, ChevronRight, Sparkles,
  Crown, Diamond, Gem, Rocket, Mountain, Flag, User
} from 'lucide-react';

const LuxuryAboutPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / maxScroll);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items matching the image
  const navItems = [
    { name: 'Vehicles', icon: Car },
    { name: 'Services', icon: Shield },
    { name: 'About', icon: Users },
    { name: 'Contact', icon: Phone },
    { name: 'Get Quote', icon: Mail }
  ];

  // Rest of your existing data (stats, values, timeline, team, achievements)...

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1}deg)`
      }}
    >
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navigation Header - Matching the image */}
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Crown className="w-8 h-8 text-orange-400" />
            <h1 className="text-2xl font-bold text-white">
              <span className="text-orange-400">AUTO</span>ELITE
            </h1>
            <span className="text-xs text-gray-400 ml-2 hidden md:block">Premium Automotive</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href="#" 
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-1"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
          
          <button className="md:hidden text-gray-300 hover:text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section - Updated to match "Discover Our Story" from image */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-32">
          <div className="animate-in slide-in-from-top duration-1000">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent">
                Discover Our Story
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              The journey of AutoElite from a visionary idea to the pinnacle of luxury automotive retail.
            </p>

            {/* CTA Button */}
            <button className="group bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore Our Legacy</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Rest of your existing sections (stats, values, timeline, team, achievements)... */}
        {/* ... */}
      </div>

      {/* Rest of your existing JSX... */}
      {/* ... */}

      <style jsx global>{`
        /* Your existing global styles... */
      `}</style>
    </div>
  );
};

export default LuxuryAboutPage;