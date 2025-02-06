import React from 'react';
import { Code, Cloud, Database, Shield, Cpu, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: 'Custom Software Development',
      description: 'Tailored solutions designed to meet your specific business requirements, from web applications to enterprise software.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Integration']
    },
    {
      icon: <Cloud className="h-12 w-12 text-blue-600" />,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services to help you migrate, optimize, and manage your infrastructure.',
      features: ['Cloud Migration', 'Infrastructure Management', 'Cloud Security', 'Performance Optimization']
    },
    {
      icon: <Database className="h-12 w-12 text-blue-600" />,
      title: 'Data Analytics',
      description: 'Transform your raw data into actionable insights with our advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Big Data Solutions']
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive security solutions and best practices.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Security Training']
    },
    {
      icon: <Cpu className="h-12 w-12 text-blue-600" />,
      title: 'IT Infrastructure',
      description: 'Build and maintain a robust IT infrastructure that scales with your business needs.',
      features: ['Network Design', 'System Integration', 'Hardware Solutions', 'IT Support']
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation with our strategic consulting services.',
      features: ['Digital Strategy', 'Process Automation', 'Technology Adoption', 'Change Management']
    }
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;