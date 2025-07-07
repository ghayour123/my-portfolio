import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import StarBackground from "./components/StarBackground";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSection from "./components/TestimonialSection";
function App() {
  return (
    <div>
      <StarBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <WorkExperience />
      <Projects />
      <TestimonialSection />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
