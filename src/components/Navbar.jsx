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

const navLinks = ["Home", "Services", "About", "Journey", "Pricing", "Projects", "FAQ"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full fixed top-0 left-0 z-50 bg-green-800 shadow-lg font-sans"
    >
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FDAE1B' }}>
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-wide text-white">
            Ghayour.
          </span>
        </motion.div>

        {/* Desktop Links */}
        <motion.ul className="hidden md:flex gap-6 text-[15px] font-medium">
          {navLinks.map((link) => {
            const linkId = link.toLowerCase();
            return (
              <motion.li key={link} variants={itemVariants}>
                <Link
                  to={linkId}
                  smooth={true}
                  duration={500}
                  className="relative px-4 py-2 cursor-pointer text-white transition-all duration-300"
                  style={{
                    '--hover-color': '#FDAE1B'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FDAE1B'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  {link}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Contact Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block mr-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 hover:text-green-900 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Icon */}
        <motion.div
          className="md:hidden text-2xl text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? <FiX /> : <FiMenu />}
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden bg-green-800 border-t border-white/10"
        >
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-6 gap-4 text-white font-medium"
          >
            {navLinks.map((link, index) => {
              const linkId = link.toLowerCase();
              return (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={linkId}
                    smooth={true}
                    duration={500}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
                  >
                    {link}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
