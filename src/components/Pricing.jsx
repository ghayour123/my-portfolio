import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Hourly",
      price: "$8",
      period: "/ Hour",
      cardStyle: "bg-green-700 text-white shadow-xl",
      titleStyle: "text-white",
      priceStyle: "text-white",
      periodStyle: "text-white",
      iconBg: "bg-white",
      iconColor: "text-green-700",
      features: [
        "React & Next.js Development",
        "Node.js & Express APIs",
        "Database Design & Management",
        "UI/UX Implementation",
        "Code Review & Optimization",
        "Bug Fixing & Debugging",
        "Performance Optimization",
        "Technical Consultation"
      ]
    },
    {
      id: 2,
      title: "Monthly",
      price: "$600",
      period: "/ Month",
      cardStyle: "bg-white text-green-800",
      titleStyle: "text-green-800",
      priceStyle: "text-green-800",
      periodStyle: "text-green-800",
      iconBg: "bg-green-800",
      iconColor: "text-white",
      features: [
        "Full Stack Web Applications",
        "MERN Stack Development",
        "Database Architecture",
        "API Development & Integration",
        "Frontend & Backend Solutions",
        "Version Control & Deployment",
        "Project Management",
        "24/7 Support & Maintenance"
      ]
    },
    {
      id: 3,
      title: "Quarterly",
      price: "$1,500",
      period: "/ Quarter",
      cardStyle: "bg-green-700 text-white shadow-xl",
      titleStyle: "text-white",
      priceStyle: "text-white",
      periodStyle: "text-white",
      iconBg: "bg-white",
      iconColor: "text-green-700",
      features: [
        "Complete E-commerce Solutions",
        "Enterprise Web Applications",
        "Scalable System Architecture",
        "Advanced Database Optimization",
        "Cloud Infrastructure Setup",
        "DevOps & CI/CD Pipeline",
        "Security Implementation",
        "Long-term Partnership"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-green-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Subtitle */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-0.5 bg-white mr-3"></div>
            <span className="text-white font-medium">Pricing Table</span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">My </span>
            <span style={{ color: '#FDAE1B' }}>Pricing Model</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`${plan.cardStyle} rounded-2xl p-8 shadow-lg relative overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Plan Title */}
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${plan.titleStyle}`}>
                  {plan.title}
                </h3>
                
                {/* Action Icon */}
                <div className={`w-12 h-12 ${plan.iconBg} rounded-full flex items-center justify-center`}>
                  <svg className={`w-5 h-5 ${plan.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className={`text-5xl font-bold ${plan.priceStyle}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ml-2 ${plan.periodStyle}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {/* Checkmark Icon */}
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0" style={{ backgroundColor: '#FDAE1B' }}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    
                    {/* Feature Text */}
                    <span className={`${plan.titleStyle} text-sm leading-relaxed`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
