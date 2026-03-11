/**
 * About.jsx
 * CHANGE: Removed profile picture (replaced with Core Expertise cards);
 *         removed Download CV/signature; added CTA block (availability + Get in Touch).
 * WHY: Industry-standard About: stats followed by clear next-step CTA to contact.
 * DEPS: framer-motion. Related: Hero, Services, Contact, Footer.
 */

import React from "react";
import { motion } from "framer-motion";

// --- Core expertise cards (industry-standard "value props" for About section) ---
const coreExpertise = [
  {
    title: "Full Stack Development",
    description: "End-to-end solutions from UI to database and APIs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Clean & Scalable Code",
    description: "Maintainable architecture and best practices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Modern Tech Stack",
    description: "React, Node, databases, and cloud-ready deployments.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Delivery on Time",
    description: "Clear communication and reliable project delivery.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden px-6 md:px-12 py-20 bg-green-800"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Section Header */}
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
            <span className="text-white font-medium">About Me</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Core Expertise (industry-standard value propositions) */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {coreExpertise.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-xl p-5 border-2 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                style={{ borderColor: "#FDAE1B" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-3" style={{ color: "#FDAE1B" }}>
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - About Me Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Main Title */}
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Who is{" "}
              <span style={{ color: '#FDAE1B', fontFamily: 'cursive' }}>
                Ghayour Mehdi Khan
              </span>
              ?
            </h2>

            {/* Description */}
            <p className="text-white text-lg leading-relaxed mb-8 max-w-lg">
              I am a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating digital experiences that make a difference. With a strong foundation 
              in both frontend and backend development, I bring ideas to life through clean, 
              efficient, and scalable solutions.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-white text-sm">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-white text-sm">Years of Experience</div>
              </div>
            </div>

            {/* CTA block: availability line + Get in Touch (industry-standard pattern) */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
              <p className="text-white/90 text-base max-w-md">
                Open to new projects and collaborations. Let&apos;s build something great together.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold px-6 py-3 rounded-xl border-2 shrink-0 transition-all duration-300 hover:bg-white/10"
                style={{ borderColor: "#FDAE1B", color: "#FDAE1B" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
