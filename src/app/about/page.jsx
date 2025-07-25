
"use client";
import React, { useState } from 'react';
import { Users, Award, Globe, MessageCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Timeline milestones
  const milestones = [
    {
      year: 2010,
      title: 'Founded AutoElite',
      description: 'Started as a small dealership with a passion for premium vehicles.',
      image: '/images/milestone-2010.png',
    },
    {
      year: 2015,
      title: 'Expanded Nationwide',
      description: 'Opened multiple locations across the country.',
      image: '/images/milestone-2015.png',
    },
    {
      year: 2020,
      title: 'Launched Sports Division',
      description: 'Introduced high-performance sports cars to our lineup.',
      image: '/images/milestone-2020.png',
    },
    {
      year: 2025,
      title: 'Global Recognition',
      description: 'Earned awards for innovation and customer satisfaction.',
      image: '/images/milestone-2025.png',
    },
  ];

  // Team members
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      image: '/images/team-john.png',
      bio: 'Visionary leader with 20 years in the automotive industry.',
    },
    {
      name: 'Jane Smith',
      role: 'Chief Engineer',
      image: '/images/team-jane.png',
      bio: 'Expert in performance vehicle design and innovation.',
    },
    {
      name: 'Mark Wilson',
      role: 'Head of Sales',
      image: '/images/team-mark.png',
      bio: 'Drives customer satisfaction with a focus on quality.',
    },
  ];

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
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-500/40 to-yellow-400/40 animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 animate-in slide-in-from-top-2 duration-700">
            About AutoElite
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Driving innovation, performance, and customer satisfaction since 2010.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Our Story</span>
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 animate-in slide-in-from-bottom-2 duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20" />
            <Users className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Customer First</h3>
            <p className="text-gray-300 text-sm">
              We prioritize your needs with exceptional service and quality vehicles.
            </p>
          </div>
          <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 animate-in slide-in-from-bottom-2 duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20" />
            <Award className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300 text-sm">
              Leading the industry with cutting-edge technology and design.
            </p>
          </div>
          <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 animate-in slide-in-from-bottom-2 duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20" />
            <Globe className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Sustainability</h3>
            <p className="text-gray-300 text-sm">
              Committed to eco-friendly practices and efficient vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 via-orange-500 to-yellow-400" />
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-in slide-in-from-bottom-2 duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-1/2 px-6">
                  <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20" />
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.year} - {milestone.title}</h3>
                    <p className="text-gray-300 text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-1/2 px-6">
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl group perspective-1000 animate-in slide-in-from-bottom-2 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 group-hover:from-red-600/40 group-hover:to-yellow-400/40 transition-all duration-500" />
              <div className="p-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-500"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-300 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in slide-in-from-top-2 duration-500">
          Get in Touch
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
                placeholder="Your Inquiry or Feedback..."
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
            Join the AutoElite Family
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Discover our vehicles, services, and passion for automotive excellence.
          </p>
          <Link
            href="/vehicles"
            className="px-10 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Explore Vehicles</span>
          </Link>
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

export default AboutPage;
