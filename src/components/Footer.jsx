import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCode, FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "FAQ", to: "faq" },
    { name: "Contact", to: "contact" }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ghayour.khan.5817",
      icon: <FaFacebook />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ghayour-mehdi",
      icon: <FaLinkedin />,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@ghayour123",
      icon: <FaYoutube />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ghayour123",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/ghayour_baloch",
      icon: <FaInstagram />,
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer id="footer" className="bg-white">
      {/* Top Section - Call to Action */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-0">
            Let's{" "}
            <span style={{ color: '#FDAE1B' }}>Connect</span>{" "}
            there
          </h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-green-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            <span className="mr-4">View All Blogs</span>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FDAE1B' }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </div>
        
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#FDAE1B' }}>
                <span className="text-black font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Ghayour.</span>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Passionate Full Stack Developer crafting modern, efficient, and exceptional digital experiences with the MERN stack. Let's build something amazing together!
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: '#FDAE1B' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-black text-sm">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6" style={{ color: '#FDAE1B' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6" style={{ color: '#FDAE1B' }}>
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-3" />
                <span>+92 3057147879</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3" />
                <span>ghayourbaloch12@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-3" />
                <span>Rawalpindi, Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6" style={{ color: '#FDAE1B' }}>
              Get the latest information
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <motion.button
                type="submit"
                className="px-4 py-3 bg-green-800 text-white rounded-r-lg hover:bg-green-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FDAE1B' }}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-green-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              Copyright © {currentYear}{" "}
              <span style={{ color: '#FDAE1B' }}>Ghayour.</span>{" "}
              All Rights Reserved.
            </p>
            <div className="flex items-center text-white text-sm">
              <span>User Terms & Conditions</span>
              <span className="mx-2">|</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
