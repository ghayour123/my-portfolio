import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import StarBackground from "./StarBackground";

const skills = [
  // Frontend Technologies
  { name: "HTML", img: "/assets/html5.png", level: 95, category: "Frontend" },
  { name: "CSS", img: "/assets/css.png", level: 90, category: "Frontend" },
  { name: "JavaScript", img: "/assets/javascript.png", level: 88, category: "Frontend" },
  { name: "TypeScript", img: "/assets/typescript.png", level: 85, category: "Frontend" },
  { name: "React", img: "/assets/reactjs.png", level: 85, category: "Frontend" },
  { name: "Next.js", img: "/assets/nextjs.png", level: 80, category: "Frontend" },
  
  // Backend Technologies
  { name: "Node.js", img: "/assets/nodejs.png", level: 82, category: "Backend" },
  { name: "NestJS", img: "/assets/nestjs.png", level: 78, category: "Backend" },
  { name: "Express.js", img: "/assets/expressjs.png", level: 80, category: "Backend" },
  
  // Database Technologies
  { name: "MongoDB", img: "/assets/mongodb.png", level: 80, category: "Database" },
  { name: "SQL", img: "/assets/sql.png", level: 75, category: "Database" },
  { name: "Supabase", img: "/assets/supabase.png", level: 70, category: "Database" }
];

const skillCategories = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  Backend: ["Node.js", "NestJS", "Express.js", "Python"],
  Database: ["MongoDB", "SQL", "Supabase"]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState("Frontend");

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full px-6 sm:px-10 py-20 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
      }}
    >
      {/* Star Background */}
      <StarBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical arsenal spans across modern web technologies, enabling me to build 
            <span className="text-purple-400 font-semibold"> full-stack applications</span> with 
            <span className="text-blue-400 font-semibold"> exceptional performance</span> and 
            <span className="text-green-400 font-semibold"> user experience</span>.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-2 border border-white/10">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {skills
            .filter((skill) => skill.category === activeCategory)
            .map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Skill Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.category}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Proficiency</span>
                      <span className="text-sm font-semibold text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="mt-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < Math.floor(skill.level / 20)
                            ? "bg-purple-400"
                            : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always exploring new technologies and frameworks to stay at the forefront of web development. 
              Currently diving deeper into <span className="text-purple-400 font-semibold">NestJS</span>, 
              <span className="text-blue-400 font-semibold"> Supabase</span>, and 
              <span className="text-orange-400 font-semibold"> Advanced SQL</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
