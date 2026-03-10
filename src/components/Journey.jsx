import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Journey = () => {
  const educationData = [
    {
      period: "2021-2025",
      institution: "Arid Agriculture University Rawalpindi",
      degree: "Bachelor in Software Engineering"
    },
    {
      period: "2019-2021",
      institution: "Faran Model College",
      degree: "Pre Engineering"
    },
    {
      period: "2017-2019",
      institution: "High School",
      degree: "High School Science"
    }
  ];

  const workData = [
    {
      period: "2025-Present",
      company: "CodersLodge",
      role: "Full Stack Developer"
    },
    {
      period: "2024-2025",
      company: "Freelance",
      role: "Full Stack Developer"
    },
    {
      period: "2023-2024",
      company: "Morosoft Labs",
      role: "Full Stack Developer Intern (6 months)"
    }
  ];

  return (
    <section id="journey" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Category Label */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-0.5 mr-3" style={{ backgroundColor: '#FDAE1B' }}></div>
            <span className="text-gray-600 font-medium">Education & Work</span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">My Academic and </span>
            <span style={{ color: '#FDAE1B' }}>Professional Journey</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Card Header */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#FDAE1B' }}>
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm mb-1">{edu.period}</p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{edu.institution}</h4>
                    <p className="text-gray-600">{edu.degree}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Card Header */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#FDAE1B' }}>
                <FaBriefcase className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {workData.map((work, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm mb-1">{work.period}</p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{work.company}</h4>
                    <p className="text-gray-600">{work.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
