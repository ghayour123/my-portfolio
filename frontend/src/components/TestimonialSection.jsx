import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarBackground from "./StarBackground"; // ✅ Import your star background

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager @TechNova",
    feedback:
      "Working with Ghayour was a game changer. His MERN skills, attention to detail, and commitment were phenomenal!",
    image: "/assets/user1.jpg"
  },
  {
    name: "Adeel Ahmed",
    role: "CTO @CodeWave",
    feedback:
      "Ghayour delivered our project on time with exceptional quality. He's a rare dev with both frontend & backend brilliance!",
    image: "/assets/user2.jpg"
  },
  {
    name: "Elena Smith",
    role: "Founder @Launchly",
    feedback:
      "Super impressed with his communication and coding. Highly recommend him for full-stack projects!",
    image: "/assets/user3.jpg"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div style={{ marginTop: "30px" }}>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-purple-500 opacity-50 hover:opacity-100 transition-all duration-300"></div>
    )
  };

  return (
    <section className="relative z-10 bg-[#11071F]  text-white px-4 md:px-20 py-24 overflow-hidden">
      {/* ✅ Animated Stars Background */}
      <StarBackground />

      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 glow-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        ⭐ Client Feedback
      </motion.h2>

      {/* Testimonials Slider */}
      <Slider {...settings} className="max-w-3xl mx-auto">
        {testimonials.map((testi, index) => (
          <motion.div
            key={index}
            className="px-6 md:px-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-xl p-10 backdrop-blur-md shadow-xl border border-purple-600 transition-transform duration-500 hover:scale-[1.02] hover:shadow-purple-800/40">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-16 h-16 rounded-full border-2 border-purple-400 shadow-md"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {testi.name}
                  </h4>
                  <p className="text-sm text-purple-300">{testi.role}</p>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-purple-400 text-2xl absolute -top-4 left-0 opacity-80" />
                <p className="text-gray-200 text-base leading-relaxed italic pl-6 pr-1">
                  {testi.feedback}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
