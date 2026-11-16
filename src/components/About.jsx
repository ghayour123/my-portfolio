import { motion } from "framer-motion";
import { Link } from "react-scroll";
import SectionHeading from "./SectionHeading";
import { useMotion } from "../lib/motion";

const strengths = [
  {
    title: "Full Stack Development",
    description: "End-to-end solutions from UI to APIs, databases, and deployment.",
  },
  {
    title: "Clean & Scalable Code",
    description: "Maintainable architecture, clear structure, and production-ready practices.",
  },
  {
    title: "Modern Tech Stack",
    description: "React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, and cloud-ready apps.",
  },
  {
    title: "Reliable Delivery",
    description: "Clear communication, focused execution, and dependable project delivery.",
  },
];

const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "15+", label: "Technologies used" },
  { value: "Full-Stack", label: "End-to-end development" },
];

const About = () => {
  const { reveal, duration } = useMotion();

  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-line bg-ink-soft">
      <div className="shell section">
        <SectionHeading
          id="about-heading"
          index="01"
          kicker="About"
          title="From the interface through to production."
          intro="I am Ghayour Mehdi Khan, a Full-Stack Developer with experience collaborating with companies and startups."
        />

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <motion.div {...reveal(0.05)} className="min-w-0 lg:col-span-6">
            <p className="max-w-xl leading-relaxed text-mist">
              I build digital products that are clean, efficient, and scalable — spanning React and
              Next.js frontends, Node.js and NestJS backends, MongoDB and PostgreSQL, and
              production-ready API and real-time integrations.
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-fog">
              My work covers authentication, payment flows, REST and GraphQL APIs, and real-time
              features with Socket.IO. I focus on solving problems clearly and shipping
              production-level applications.
            </p>

            <dl className="mt-10 grid border-t border-line md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`min-w-0 border-b border-line py-5 last:border-b-0 md:border-b-0 md:border-r md:py-6 md:last:border-r-0 ${
                    index === 0 ? "md:pr-6" : index === stats.length - 1 ? "md:pl-6" : "md:px-6"
                  }`}
                >
                  <dt className="meta-label">{stat.label}</dt>
                  <dd className="mt-2 break-words font-display text-[clamp(1.8rem,4vw,2.75rem)] font-medium leading-none text-paper">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              to="contact"
              href="#contact"
              smooth
              duration={duration}
              offset={-72}
              className="btn btn-line mt-10"
            >
              Get in Touch
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <div className="min-w-0 lg:col-span-5 lg:col-start-8">
            <ul className="border-t border-line">
              {strengths.map((item, index) => (
                <motion.li
                  key={item.title}
                  {...reveal(index * 0.06)}
                  className="group border-b border-line py-6"
                >
                  <div className="flex gap-5">
                    <span className="font-display text-xl text-fog transition-colors duration-300 group-hover:text-gold">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.7rem] font-medium leading-none text-paper">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-fog">{item.description}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
