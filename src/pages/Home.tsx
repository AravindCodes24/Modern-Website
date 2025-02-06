import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code, Cloud, Database, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power4.out',
    });

    // Services Animation
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top center+=100',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
    });

    // Stats Animation
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top center+=100',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Transforming Ideas into
            <span className="text-blue-400"> Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive innovation and business growth
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive solutions for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-blue-600" />,
                title: 'Software Development',
                description: 'Custom software solutions tailored to your business requirements',
              },
              {
                icon: <Cloud className="h-8 w-8 text-blue-600" />,
                title: 'Cloud Solutions',
                description: 'Scalable and secure cloud infrastructure for your applications',
              },
              {
                icon: <Database className="h-8 w-8 text-blue-600" />,
                title: 'Data Analytics',
                description: 'Transform your data into actionable insights',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="service-card bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Clients Worldwide' },
              { number: '200+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;