import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// Framer Motion Variants
const navVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full fixed top-0 left-0 z-50 bg-[#1A0B2E] shadow-md font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-extrabold text-white tracking-wide cursor-pointer"
        >
          Ghayour
        </motion.div>

        {/* Desktop Links */}
        <motion.ul className="hidden md:flex gap-10 text-[16px] font-medium">
          {navLinks.map((link) => (
            <motion.li key={link} variants={itemVariants}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 transition-transform duration-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-lg"
              >
                {link}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center bg-[#1A0B2E] py-4 gap-4 text-gray-300 font-medium shadow-md"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
