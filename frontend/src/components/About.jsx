import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import StarBackground from "./StarBackground"; // ✅ Import Stars

const techStack = [
  { name: "MongoDB", logo: "/assets/mongodb.png" },
  { name: "Express", logo: "/assets/expressjs.png" },
  { name: "React", logo: "/assets/reactjs.png" },
  { name: "Node.js", logo: "/assets/nodejs.png" },
  { name: "JavaScript", logo: "/assets/javascript.png" },
  { name: "Tailwind", logo: "/assets/css.png" }
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden px-6 md:px-12 py-20 flex flex-col items-center bg-[#11071F] text-white"
    >
      <StarBackground /> {/* ✅ Stars in background */}
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 glow-title text-center z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      {/* Typewriter Intro */}
      <motion.p
        className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mb-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Typewriter
          options={{
            strings: ["Building Blazing-Fast MERN Stack Apps..."],
            autoStart: true,
            loop: true
          }}
        />
      </motion.p>
      {/* Fun Dev Line */}
      <motion.p
        className="text-center text-purple-300 font-medium mb-10 max-w-xl z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        I’m a passionate Full Stack Developer crafting modern, efficient, and
        jaw-dropping digital experiences with the MERN stack 💻⚡
      </motion.p>
      {/* Dev Journey */}
      <motion.div
        className="bg-gradient-to-br from-[#2e0f55] to-[#451d84] p-6 md:p-10 rounded-xl max-w-3xl w-full text-sm md:text-base mb-10 shadow-xl shadow-purple-800/30 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
          🚀 My Dev Journey
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li>Started as a self-taught frontend enthusiast 👨‍💻</li>
          <li>Dived deep into backend with Node.js, Express & MongoDB 🧠</li>
          <li>Completed 6-month MERN Stack internship at Morosoft Labs ✅</li>
          <li>Now building real-world apps & deploying full-stack magic 🌐</li>
        </ul>
      </motion.div>
      {/* Tech Stack */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-4 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-full backdrop-blur border border-purple-500 shadow-md hover:shadow-purple-700/40"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-8 h-8 rounded-full object-contain"
            />
            <span className="text-sm text-white font-semibold tracking-wide">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
      {/* Education */}
      <motion.div
        className="mt-14 text-left max-w-3xl w-full bg-[#1c1034] p-6 rounded-lg border-l-4 border-purple-500 shadow-md z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl text-purple-400 font-semibold mb-2 flex items-center gap-2">
          🎓 Education
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Bachelor's in Software Engineering from{" "}
          <span className="text-white font-semibold">
            Arid Agriculture University, Rawalpindi
          </span>{" "}
          — where I honed my fundamentals and explored full-stack development.
        </p>
      </motion.div>
      {/* <motion.a
        href="https://drive.google.com/uc?export=download&id=1c_m-g3Al0OJ6zVev0dlEZBZy3YGduUXA"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg z-10"
      >
        📄 Download My Resume
      </motion.a> */}
    </section>
  );
};

export default About;
