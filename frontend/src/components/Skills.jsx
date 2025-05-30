import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import StarBackground from "./StarBackground";

const skills = [
  { name: "HTML", img: "/assets/html5.png" },
  { name: "CSS", img: "/assets/css.png" },
  { name: "JavaScript", img: "/assets/javascript.png" },
  { name: "React", img: "/assets/reactjs.png" },
  { name: "Node.js", img: "/assets/nodejs.png" },
  { name: "MongoDB", img: "/assets/mongodb.png" }
];

const Skills = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 14,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full px-6 sm:px-10 py-16 text-white overflow-hidden bg-[radial-gradient(ellipse_at_center,_#11071F_0%,_#180B2D_40%,_#0D061A_100%)] flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* Top overlay gradient */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-[#11071F] to-transparent z-20 pointer-events-none" />

      {/* Star Background */}
      <StarBackground />

      {/* Left Heading */}
      <div className="md:w-1/3 w-full text-center md:text-left z-30">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-28 glow-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
      </div>

      {/* Orbit + Icons */}
      <div className="relative md:w-2/3 w-full flex items-center justify-center z-30">
        {/* Center Circle */}
        <motion.div
          className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-[0_0_60px_15px_#A855F7] text-center px-4 z-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          Technical <br /> Skills
        </motion.div>

        {/* Orbiting Icons */}
        <motion.div
          animate={controls}
          className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px]"
          style={{ originX: "50%", originY: "50%" }}
        >
          {skills.map((skill, i) => {
            const angle = (360 / skills.length) * i;
            const rad = (angle * Math.PI) / 180;
            const x = 150 * Math.cos(rad);
            const y = 150 * Math.sin(rad);

            return (
              <motion.div
                key={skill.name}
                className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center cursor-pointer select-none skill-icon-glow blur-[0.5px]"
                style={{
                  top: "50%",
                  left: "50%",
                  x,
                  y,
                  translateX: "-50%",
                  translateY: "-50%",
                  background: "linear-gradient(135deg, #a855f7, #d8b4fe)"
                }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0 0 35px 18px #A855F7",
                  transition: { duration: 0.3 }
                }}
                title={skill.name}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
