import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#190B2D] text-gray-300 relative z-10">
      {/* Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Copyright */}
        <p className="text-sm text-center md:text-left tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">
            © {new Date().getFullYear()} Ghayour Mehdi Khan
          </span>{" "}
          — All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl">
          {[
            {
              href: "https://github.com/ghayour123",
              icon: <FaGithub />
            },
            {
              href: "https://linkedin.com/in/ghayour-mehdi",
              icon: <FaLinkedin />
            },
            {
              href: "mailto:ghayourbaloch12@gmail.com",
              icon: <FaEnvelope />
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 p-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
