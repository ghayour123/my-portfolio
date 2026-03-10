import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lazy load components for better performance
const Services = lazy(() => import("./components/Services"));
const ServicesDetails = lazy(() => import("./components/ServicesDetails"));
const Journey = lazy(() => import("./components/Journey"));
const Pricing = lazy(() => import("./components/Pricing"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));
const About = lazy(() => import("./components/About"));
const FAQ = lazy(() => import("./components/FAQ"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#11071F]">
    <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);
// --- Home Page Component ---
// This component contains all the main sections of the portfolio
const HomePage = () => (
  <>
    <Hero />
    <Suspense fallback={<LoadingSpinner />}>
      <Services />
      <About />
      <Journey />
      <Pricing />
      <Projects />
      <FAQ />
      <Footer />
    </Suspense>
  </>
);

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* --- Main Portfolio Route --- */}
          <Route path="/" element={<HomePage />} />
          
          {/* --- Services Details Route --- */}
          <Route 
            path="/services/:serviceId" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ServicesDetails />
              </Suspense>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
