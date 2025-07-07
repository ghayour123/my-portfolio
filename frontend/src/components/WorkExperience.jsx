import React from "react";
import { motion } from "framer-motion";
import StarBackground from "./StarBackground";

const WorkExperience = () => {
  return (
    <section className="min-h-screen relative overflow-hidden px-6 md:px-12 py-20 bg-[#11071F]  text-white flex flex-col items-center justify-center">
      {/* Star Background behind everything */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      {/* Actual content in front of stars */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Title with animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div
          className="bg-gradient-to-br from-[#2e0f55] to-[#451d84] p-6 md:p-10 rounded-2xl w-full max-w-5xl shadow-lg flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Badge Image */}
          <motion.img
            src="/assets/lab-logo.jpg"
            alt="Badge"
            className="w-32 h-32 object-contain rounded-xl shadow-md bg-purple-500 animate-pulse opacity-60"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Right Content */}
          <div className="flex-1">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Morosoft Labs
            </motion.h3>

            <p className="text-lg text-purple-200 font-medium mb-4">
              MERN-Stack Developer - 1 Year
            </p>

            <motion.ul
              className="text-sm md:text-base space-y-2 text-gray-200 list-disc pl-5"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {}
              }}
            >
              {[
                "Developed RESTful APIs using Node.js, Express.js, and MongoDB.",
                "Built cloud-integrated modules and optimized backend performance.",
                "Collaborated in team projects using HTML, CSS, React.js.",
                "Gained deployment exposure using AWS and explored modern JS tools."
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              className="mt-6 px-6 py-2 bg-[#a855f7] hover:bg-[#9333ea] transition-all rounded-lg font-semibold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
