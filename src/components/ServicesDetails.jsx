import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

const ServicesDetails = () => {
  const { serviceId } = useParams();

  // --- Comprehensive Service Data ---
  // This data structure contains detailed information for each service
  // Following MCP Context 7 best practices for clean, maintainable code
  const servicesData = {
    1: {
      id: 1,
      title: "Frontend Development",
      subtitle: "Modern, Responsive User Interfaces",
      description: "I specialize in creating stunning, responsive web applications that provide exceptional user experiences across all devices. My frontend development services focus on performance, accessibility, and modern design principles.",
      
      // --- Service Overview Section ---
      overview: {
        icon: (
          <div className="w-16 h-16 bg-white border-2 border-green-800 rounded-full flex items-center justify-center relative shadow-lg">
            <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
              <div className="text-lg font-bold" style={{ color: '#FDAE1B' }}>UX</div>
            </div>
          </div>
        ),
        features: [
          "Responsive Design for All Devices",
          "Modern React & Next.js Applications", 
          "Interactive User Interfaces",
          "Performance Optimization",
          "Cross-Browser Compatibility",
          "Accessibility Compliance"
        ]
      },

      // --- Technologies & Tools Section ---
      technologies: {
        title: "Technologies & Frameworks",
        categories: [
          {
            name: "Frontend Frameworks",
            items: ["React.js", "Next.js", "Vue.js", "Angular"]
          },
          {
            name: "Styling & UI",
            items: ["Tailwind CSS", "Styled Components", "Material-UI", "Ant Design"]
          },
          {
            name: "State Management",
            items: ["Redux", "Context API", "Zustand", "Recoil"]
          },
          {
            name: "Build Tools",
            items: ["Vite", "Webpack", "Parcel", "Create React App"]
          }
        ]
      },

      // --- Process & Methodology Section ---
      process: {
        title: "Development Process",
        steps: [
          {
            step: "01",
            title: "Discovery & Planning",
            description: "Understanding your requirements, target audience, and business goals to create a comprehensive project roadmap."
          },
          {
            step: "02", 
            title: "Design & Prototyping",
            description: "Creating wireframes, mockups, and interactive prototypes to visualize the final product before development."
          },
          {
            step: "03",
            title: "Development & Testing",
            description: "Building the application with clean, maintainable code and implementing comprehensive testing strategies."
          },
          {
            step: "04",
            title: "Deployment & Optimization",
            description: "Deploying to production with performance optimization, SEO implementation, and ongoing maintenance support."
          }
        ]
      },

      // --- Industries Served Section ---
      industries: {
        title: "Industries I Serve",
        list: [
          { name: "E-Commerce", description: "Online stores and marketplaces" },
          { name: "Healthcare", description: "Medical platforms and health apps" },
          { name: "Education", description: "Learning management systems" },
          { name: "Finance", description: "Banking and fintech applications" },
          { name: "Real Estate", description: "Property listing platforms" },
          { name: "SaaS", description: "Software as a Service applications" }
        ]
      },

      // --- Pricing & Packages Section ---
      pricing: {
        title: "Service Packages",
        packages: [
          {
            name: "Basic Frontend",
            price: "$500 - $1,500",
            features: [
              "Responsive Design",
              "Basic Animations",
              "Cross-browser Testing",
              "Mobile Optimization"
            ]
          },
          {
            name: "Advanced Frontend", 
            price: "$1,500 - $3,500",
            features: [
              "Custom React Components",
              "State Management",
              "API Integration",
              "Performance Optimization",
              "SEO Implementation"
            ]
          },
          {
            name: "Enterprise Frontend",
            price: "$3,500+",
            features: [
              "Complex Application Architecture",
              "Advanced Animations",
              "Progressive Web App",
              "Accessibility Compliance",
              "Ongoing Maintenance"
            ]
          }
        ]
      },

      // --- Portfolio Examples Section ---
      portfolio: {
        title: "Recent Frontend Projects",
        projects: [
          {
            name: "E-Commerce Platform",
            description: "Modern online store with React, Redux, and Stripe integration",
            technologies: ["React", "Redux", "Tailwind CSS", "Stripe API"]
          },
          {
            name: "Healthcare Dashboard",
            description: "Patient management system with real-time data visualization",
            technologies: ["Next.js", "Chart.js", "Material-UI", "WebSocket"]
          },
          {
            name: "Learning Management System",
            description: "Interactive educational platform with video streaming",
            technologies: ["React", "Video.js", "Firebase", "PWA"]
          }
        ]
      }
    },

    2: {
      id: 2,
      title: "Backend Development",
      subtitle: "Robust Server-Side Solutions",
      description: "I build scalable, secure, and efficient backend systems that power modern web applications. My backend development focuses on performance, security, and maintainable code architecture.",
      
      overview: {
        icon: (
          <div className="w-16 h-16 bg-white border-2 border-green-800 rounded-full flex items-center justify-center relative shadow-lg">
            <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#FDAE1B' }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
        ),
        features: [
          "RESTful API Development",
          "Database Design & Optimization",
          "Authentication & Authorization",
          "Server Performance Tuning",
          "Cloud Deployment",
          "Security Implementation"
        ]
      },

      technologies: {
        title: "Backend Technologies",
        categories: [
          {
            name: "Server Frameworks",
            items: ["Node.js", "Express.js", "NestJS", "Fastify"]
          },
          {
            name: "Databases",
            items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
          },
          {
            name: "Authentication",
            items: ["JWT", "OAuth 2.0", "Passport.js", "Auth0"]
          },
          {
            name: "Cloud Services",
            items: ["AWS", "Google Cloud", "Vercel", "Railway"]
          }
        ]
      },

      process: {
        title: "Backend Development Process",
        steps: [
          {
            step: "01",
            title: "Architecture Planning",
            description: "Designing scalable system architecture, database schema, and API structure for optimal performance."
          },
          {
            step: "02",
            title: "API Development",
            description: "Building RESTful APIs with proper error handling, validation, and documentation."
          },
          {
            step: "03",
            title: "Database Implementation",
            description: "Setting up databases, implementing data models, and optimizing queries for performance."
          },
          {
            step: "04",
            title: "Security & Deployment",
            description: "Implementing security measures, testing, and deploying to production with monitoring."
          }
        ]
      },

      industries: {
        title: "Backend Solutions For",
        list: [
          { name: "SaaS Applications", description: "Multi-tenant backend systems" },
          { name: "Mobile Apps", description: "API backends for mobile applications" },
          { name: "E-Commerce", description: "Payment processing and inventory management" },
          { name: "IoT Platforms", description: "Real-time data processing systems" },
          { name: "Analytics", description: "Data collection and processing backends" },
          { name: "Content Management", description: "CMS and content delivery systems" }
        ]
      },

      pricing: {
        title: "Backend Service Packages",
        packages: [
          {
            name: "API Development",
            price: "$800 - $2,000",
            features: [
              "RESTful API Design",
              "Database Integration",
              "Basic Authentication",
              "API Documentation"
            ]
          },
          {
            name: "Full Backend System",
            price: "$2,000 - $5,000",
            features: [
              "Complete Backend Architecture",
              "Advanced Authentication",
              "Real-time Features",
              "Cloud Deployment",
              "Performance Optimization"
            ]
          },
          {
            name: "Enterprise Backend",
            price: "$5,000+",
            features: [
              "Microservices Architecture",
              "Advanced Security",
              "Scalability Solutions",
              "Monitoring & Analytics",
              "24/7 Support"
            ]
          }
        ]
      },

      portfolio: {
        title: "Backend Project Examples",
        projects: [
          {
            name: "Multi-tenant SaaS Platform",
            description: "Scalable backend with user management and billing system",
            technologies: ["Node.js", "PostgreSQL", "Stripe", "Redis"]
          },
          {
            name: "Real-time Chat Application",
            description: "WebSocket-based messaging system with file sharing",
            technologies: ["Express.js", "Socket.io", "MongoDB", "AWS S3"]
          },
          {
            name: "E-commerce Backend",
            description: "Complete online store backend with payment processing",
            technologies: ["NestJS", "MySQL", "PayPal API", "JWT"]
          }
        ]
      }
    },

    3: {
      id: 3,
      title: "Database Management",
      subtitle: "Efficient Data Solutions",
      description: "I design and implement robust database systems that ensure data integrity, performance, and scalability. My database management services cover everything from design to optimization and maintenance.",
      
      overview: {
        icon: (
          <div className="w-16 h-16 bg-white border-2 border-green-800 rounded-full flex items-center justify-center relative shadow-lg">
            <div className="w-12 h-12 bg-green-800 rounded flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#FDAE1B' }}>
                <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
              </svg>
            </div>
          </div>
        ),
        features: [
          "Database Design & Modeling",
          "Query Optimization",
          "Data Migration Services",
          "Backup & Recovery",
          "Performance Monitoring",
          "Security Implementation"
        ]
      },

      technologies: {
        title: "Database Technologies",
        categories: [
          {
            name: "Relational Databases",
            items: ["PostgreSQL", "MySQL", "SQL Server", "Oracle"]
          },
          {
            name: "NoSQL Databases",
            items: ["MongoDB", "Redis", "Cassandra", "DynamoDB"]
          },
          {
            name: "Cloud Databases",
            items: ["AWS RDS", "Google Cloud SQL", "Azure Database", "Supabase"]
          },
          {
            name: "Database Tools",
            items: ["Prisma", "Sequelize", "Mongoose", "TypeORM"]
          }
        ]
      },

      process: {
        title: "Database Management Process",
        steps: [
          {
            step: "01",
            title: "Analysis & Design",
            description: "Analyzing requirements and designing optimal database schema with proper relationships and indexing."
          },
          {
            step: "02",
            title: "Implementation",
            description: "Setting up databases, creating tables, and implementing data models with best practices."
          },
          {
            step: "03",
            title: "Optimization",
            description: "Performance tuning, query optimization, and implementing caching strategies."
          },
          {
            step: "04",
            title: "Maintenance",
            description: "Regular backups, monitoring, security updates, and ongoing performance optimization."
          }
        ]
      },

      industries: {
        title: "Database Solutions For",
        list: [
          { name: "E-Commerce", description: "Product catalogs and order management" },
          { name: "Healthcare", description: "Patient records and medical data" },
          { name: "Finance", description: "Transaction processing and analytics" },
          { name: "Education", description: "Student records and learning data" },
          { name: "Manufacturing", description: "Inventory and production tracking" },
          { name: "Logistics", description: "Supply chain and delivery management" }
        ]
      },

      pricing: {
        title: "Database Service Packages",
        packages: [
          {
            name: "Database Setup",
            price: "$300 - $800",
            features: [
              "Database Design",
              "Schema Implementation",
              "Basic Optimization",
              "Documentation"
            ]
          },
          {
            name: "Database Optimization",
            price: "$800 - $2,000",
            features: [
              "Performance Analysis",
              "Query Optimization",
              "Indexing Strategy",
              "Monitoring Setup"
            ]
          },
          {
            name: "Full Database Management",
            price: "$2,000+",
            features: [
              "Complete Database Solution",
              "Migration Services",
              "Backup & Recovery",
              "24/7 Monitoring",
              "Security Implementation"
            ]
          }
        ]
      },

      portfolio: {
        title: "Database Project Examples",
        projects: [
          {
            name: "Multi-tenant Database System",
            description: "Scalable database architecture for SaaS platform",
            technologies: ["PostgreSQL", "Redis", "Prisma", "AWS RDS"]
          },
          {
            name: "Real-time Analytics Database",
            description: "High-performance database for real-time data processing",
            technologies: ["MongoDB", "Redis", "TimescaleDB", "Grafana"]
          },
          {
            name: "E-commerce Database Migration",
            description: "Migrated legacy system to modern database architecture",
            technologies: ["MySQL", "MongoDB", "Data Migration Tools", "AWS"]
          }
        ]
      }
    }
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/" className="text-green-800 hover:text-green-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- Header Section --- */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Back Button */}
            <div className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center text-gray-600 hover:text-green-800 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Services
              </Link>
            </div>

            {/* Service Icon */}
            <div className="flex justify-center mb-8">
              {service.overview.icon}
            </div>

            {/* Service Title & Subtitle */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {service.subtitle}
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Service Features Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.overview.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Technologies Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {service.technologies.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.technologies.categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-800 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {service.process.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Industries Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {service.industries.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.industries.list.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {service.pricing.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.pricing.packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl shadow-lg ${
                    index === 1 ? 'bg-green-800 text-white transform scale-105' : 'bg-white'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className={`text-xl font-bold mb-4 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-6 ${index === 1 ? 'text-yellow-400' : 'text-green-800'}`}>
                    {pkg.price}
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                          index === 1 ? 'bg-yellow-400' : 'bg-green-800'
                        }`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                        <span className={index === 1 ? 'text-white' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                      index === 1 
                        ? 'bg-yellow-400 text-green-800 hover:bg-yellow-300' 
                        : 'bg-green-800 text-white hover:bg-green-700'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Portfolio Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {service.portfolio.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.portfolio.projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 bg-green-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-yellow-400 text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300"
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-800 transition-colors duration-300"
              >
                Schedule Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetails;
