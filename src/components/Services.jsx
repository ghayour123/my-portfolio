import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React, Next.js, Tailwind CSS, and modern CSS frameworks. Creating seamless user experiences across all devices.",
      icon: (
        <div className="w-12 h-12 bg-white border-2 border-green-800 rounded-full flex items-center justify-center relative shadow-lg">
          <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center">
                   {/* UX Text */}
                   <div className="text-xs font-bold" style={{ color: '#FDAE1B' }}>
                     UX
                   </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Express, NestJS, and RESTful APIs. Implementing authentication, database management, and server optimization.",
      icon: (
        <div className="w-12 h-12 bg-white border-2 border-green-800 rounded-full flex items-center justify-center relative">
          <div className="w-6 h-6 bg-green-800 rounded-full flex items-center justify-center">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#FDAE1B' }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Database Management",
      description: "Designing and managing databases with MongoDB, PostgreSQL, MySQL, and Supabase. Implementing data modeling, optimization, and real-time synchronization.",
      icon: (
        <div className="w-12 h-12 bg-white border-2 border-green-800 rounded-full flex items-center justify-center relative">
          <div className="w-6 h-6 bg-green-800 rounded flex items-center justify-center">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#FDAE1B' }}>
              <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
            </svg>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="relative py-20 px-6 bg-white">
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Side - Title */}
          <div className="mb-8 md:mb-0">
            {/* Subtitle */}
            <div className="flex items-center mb-4">
                   <div className="w-8 h-0.5 mr-3" style={{ backgroundColor: '#FDAE1B' }}></div>
              <span className="text-gray-600 font-medium">Services</span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Services I Provide
            </h2>
          </div>

          {/* Right Side - View All Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-green-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            <span className="mr-4">View All Services</span>
                   <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FDAE1B' }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Service Icon */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <motion.div
                whileHover={{ x: 5 }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-gray-900 font-medium transition-colors duration-300"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = '#FDAE1B'}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FDAE1B' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
