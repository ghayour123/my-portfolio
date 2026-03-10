import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImg from "/assets/ghayour.jpeg";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white text-gray-800 px-6 pt-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-block px-6 py-3 border-2 border-dashed border-gray-400 rounded-lg">
              <span className="text-gray-600 text-lg font-medium">Hello There!</span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-gray-800"
            >
                     I'm <span className="underline" style={{ color: '#FDAE1B', textDecorationColor: '#FDAE1B' }}>Ghayour,</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-4xl md:text-6xl text-gray-800 mt-2"
            >
              Full Stack Developer
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-3xl md:text-5xl text-gray-800 mt-2"
            >
              Based in Pakistan.
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8"
          >
            I'm an experienced Full Stack Developer with 3+ years in the field, collaborating with various companies and startups.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-green-700"
            >
              <span className="flex-1">View My Portfolio</span>
              <div className="w-12 h-12 rounded-full flex items-center justify-center ml-4" style={{ backgroundColor: '#FDAE1B' }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center border-2 border-gray-400 text-gray-700 hover:border-gray-600 hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 bg-white"
            >
              <span>Hire Me</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image + Decorative Elements Section */}
        <motion.div 
          className="relative w-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {/* Large Orange Arc Background */}
          <motion.div
            className="absolute w-[500px] h-[500px] border-8 rounded-full"
            style={{
              borderLeftColor: '#FDAE1B',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: 'transparent',
              transform: 'rotate(-45deg)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* Main Image */}
          <motion.img
            src={heroImg}
            alt="Ghayour Mehdi Khan - Full Stack Developer"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.7 }}
            transition={{ duration: 1 }}
            className={`relative w-[300px] md:w-[350px] h-[300px] md:h-[350px] object-cover rounded-full shadow-2xl z-10 ${imageLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setImageLoaded(true)}
          />

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
