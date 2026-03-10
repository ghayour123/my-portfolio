import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Smart Donors - Blood Donation Platform",
    description: "A comprehensive blood donation management system with real-time donor matching, secure registrations, and streamlined tracking.",
    mainImage: "/assets/smart-d2.jpg",
    allImages: [
      "/assets/smart-d2.jpg",
      "/assets/smart-d3.jpg",
      "/assets/smart-d4.jpg",
      "/assets/smart-d5.jpeg",
      "/assets/smart-d6.jpg",
      "/assets/smart-d7.jpg",
      "/assets/smart-d8.jpg"
    ],
    badges: ["Full Stack", "React", "Node.js"],
    github: "https://github.com/ghayour123/smart-donors",
    live: "https://smart-donors-demo.netlify.app"
  },
  {
    id: 2,
    title: "Skill Hub - Learning Platform",
    description: "An interactive online learning platform with course enrollment, progress tracking, and user management features.",
    mainImage: "/assets/skill-hub.PNG",
    allImages: [
      "/assets/skill-hub.PNG",
      "/assets/skill-h2.PNG",
      "/assets/skill-h3.PNG"
    ],
    badges: ["Full Stack", "MongoDB", "Express"],
    github: "https://github.com/ghayour123/skill-hub",
    live: "https://skill-hub-demo.netlify.app"
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleImages = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Side - Title */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gray-900">My Latest </span>
              <span style={{ color: '#FDAE1B' }}>Projects</span>
            </h2>
          </div>

          {/* Right Side - View All Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-green-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            <span className="mr-4">View All Projects</span>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FDAE1B' }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="mb-6">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
                
                {/* View More Images Button */}
                {project.allImages.length > 1 && (
                  <motion.button
                    onClick={() => toggleImages(project.id)}
                    className="mt-3 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedProject === project.id ? 'Hide Images' : `View ${project.allImages.length} Images`}
                  </motion.button>
                )}
              </div>

              {/* Additional Images (when expanded) */}
              {expandedProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 grid grid-cols-2 gap-3"
                >
                  {project.allImages.slice(1).map((image, imgIndex) => (
                    <motion.img
                      key={imgIndex}
                      src={image}
                      alt={`${project.title} Screenshot ${imgIndex + 2}`}
                      className="w-full h-32 object-cover rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: imgIndex * 0.1 }}
                    />
                  ))}
                </motion.div>
              )}

              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Project Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.badges.map((badge, badgeIndex) => (
                  <span
                    key={badgeIndex}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#FDAE1B', color: 'white' }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Action Arrow */}
              <div className="flex justify-end">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
