import React from "react";
import { motion } from "framer-motion";
import heroImg from "/assets/ghayour.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#11071F] text-white px-6"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-12">
            I'm <span className="text-purple-400">Ghayour</span>, a <br />
            Full Stack Developer
          </h1>
          <p className="text-lg text-gray-300">
            {/* I build modern, blazing-fast apps with the MERN stack and VIP-level
            designs. */}
            Crafting blazing-fast MERN stack apps with elite designs that speak
            success.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Image + Aura Section */}
        <div className="relative w-full flex justify-center items-center">
          {/* Aura Effect */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute w-[280px] h-[280px] bg-purple-500 rounded-full blur-2xl opacity-50 z-0"
            style={{ backgroundColor: "#A855F7" }} // 💥 Vibe color here!
          />
          {/* Outer Glow Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-[330px] h-[330px] border-4 border-purple-600 rounded-full opacity-20 blur-xl z-0"
            style={{ borderColor: "#A855F7" }} // 💥 Ring glow color here!
          />
          {/* Main Image */}
          <motion.img
            src={heroImg}
            alt="ghayour"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[250px] md:w-[300px] rounded-full border-4 border-[#A855F7] shadow-[0_0_60px_15px_#A855F7] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
