import React from "react";
import { motion } from "framer-motion";
import heroImg from "/assets/ghayour.jpeg";

const skillBadges = [
  { name: "Frontend Development", color: "golden" },
  { name: "Backend Development", color: "white" },
  { name: "Web Application", color: "golden" },
  { name: "Database Management", color: "white" },
  { name: "Responsive Design", color: "golden" },
  { name: "Full Stack Solutions", color: "white" },
  { name: "API Development", color: "golden" },
  { name: "Cloud Services", color: "white" }
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
          
          {/* Left Side - Profile Picture with Yellow Circle */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Orange Circle Background */}
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              {/* Main Orange Circle */}
              <div className="absolute inset-0 rounded-full shadow-2xl bg-transparent">
                {/* Profile Picture */}
                <div className="absolute inset-8 bg-white rounded-full overflow-hidden shadow-xl">
                  <img
                    src={heroImg}
                    alt="Ghayour Mehdi Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Skill Badges positioned around the circle */}
              {skillBadges.map((badge, index) => {
                const angle = (index * 45) - 90; // Start from top, distribute evenly
                const radius = 280; // Distance from center
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={index}
                    className={`absolute px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                      badge.color === 'orange' 
                        ? 'bg-orange-500 text-green-800' 
                        : badge.color === 'custom'
                        ? 'bg-green-800'
                        : badge.color === 'golden'
                        ? 'bg-green-800'
                        : badge.color === 'white'
                        ? 'bg-white'
                        : 'bg-green-800 text-white'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      ...(badge.color === 'custom' && { 
                        backgroundColor: '#FF6900', 
                        color: 'white' 
                      }),
                      ...(badge.color === 'golden' && { 
                        backgroundColor: '#FDAE1B', 
                        color: 'white' 
                      }),
                      ...(badge.color === 'white' && { 
                        backgroundColor: 'white', 
                        color: '#15803d' 
                      })
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {badge.name}
                  </motion.div>
                );
              })}
            </div>
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

            {/* Download CV Button */}
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1c_m-g3Al0OJ6zVev0dlEZBZy3YGduUXA"
              target="_blank"
              rel="noopener noreferrer"
                     className="inline-flex items-center bg-green-800 text-white font-semibold px-8 py-4 rounded-xl border-2 shadow-lg transition-all duration-300 hover:bg-green-700 hover:scale-105"
                     style={{ borderColor: '#FDAE1B' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex-1">Download CV</span>
              <div className="w-10 h-10 rounded-full flex items-center justify-center ml-4" style={{ backgroundColor: '#FDAE1B' }}>
                <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </motion.a>

            {/* Signature */}
            <div className="mt-8">
              <span 
                className="text-2xl font-bold"
                style={{ color: '#FDAE1B', fontFamily: 'cursive' }}
              >
                Ghayour Mehdi Khan
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
