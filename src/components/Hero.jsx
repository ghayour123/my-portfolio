import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useMotion } from "../lib/motion";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);
  const { enter, duration } = useMotion();

  useEffect(() => {
    if (imageRef.current?.complete) setImageLoaded(true);
  }, []);

  return (
    <section id="home" aria-labelledby="home-heading" className="relative bg-ink">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell relative pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-28">
        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-8">
          <motion.div {...enter(0)} className="order-1 min-w-0 lg:col-span-7 lg:row-start-1">
            <p className="kicker">Full-Stack Developer</p>
           
            <h1
              id="home-heading"
              className="masthead mt-5 whitespace-nowrap text-paper sm:whitespace-normal"
            >
              Ghayour <span className="italic sm:block">Khan</span>
            </h1>
          </motion.div>

          <motion.div {...enter(0.12)} className="order-3 min-w-0 lg:col-span-7 lg:row-start-2">
            <p className="max-w-xl text-base leading-relaxed text-fog sm:text-lg">
              I build thoughtful digital experiences through clean code, modern technologies, and a
              passion for solving real-world problems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="projects"
                href="#projects"
                smooth
                duration={duration}
                offset={-72}
                className="btn btn-fill w-full sm:w-auto"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="contact"
                href="#contact"
                smooth
                duration={duration}
                offset={-72}
                className="btn btn-line w-full sm:w-auto"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.figure
            {...enter(0.16)}
            className="order-2 mx-auto w-full min-w-0 max-w-[19rem] sm:max-w-[22.5rem] md:max-w-[26rem] lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-[27.5rem] lg:justify-self-end"
          >
            <div className="media-frame relative aspect-[5/6]">
              {!imageLoaded && <div className="skeleton absolute inset-0" />}
              <img
                ref={imageRef}
                src="/assets/gm-khan.jpg"
                alt="Portrait of Ghayour Khan"
                width={768}
                height={1024}
                fetchPriority="high"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                className={`h-full w-full object-cover object-top transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
