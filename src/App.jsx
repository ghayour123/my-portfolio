import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Journey = lazy(() => import("./components/Journey"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingSpinner = () => (
  <div className="flex min-h-[40vh] items-center justify-center" role="status" aria-label="Loading">
    <div className="spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Services />
          <Contact />
          <FAQ />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
