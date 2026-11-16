import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useMotion } from "../lib/motion";

const experience = [
  {
    period: "August 2025 — Present",
    place: "Coders Lodge",
    role: "Full-Stack Developer",
    type: "Full-time",
    current: true,
    // Coders Lodge: keep the full production stack list; update role summary only
    description:
      "Developing and maintaining production-ready web applications, working across frontend and backend systems. Building scalable features, integrating third-party services, payments, APIs, and real-time functionality while contributing to the full product development lifecycle.",
    stack: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "NestJS",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Third-Party API Integrations",
      "Socket.IO",
      "WebSockets",
      "Live Streaming Integrations",
      "Stripe Payment Integration",
      "Docker",
    ],
  },
  {
    period: "2024 — 2025 · 8 months",
    place: "Morosoft Labs · Rawalpindi",
    role: "Full-Stack Developer Intern",
    type: "Internship",
    // Morosoft Labs: internship summary + focused stack from the resume
    description:
      "Worked on full-stack web applications, developing responsive user interfaces, backend functionality, and REST APIs. Collaborated with the development team to build features, manage databases, and improve application performance.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

const education = [
  {
    period: "2021 — 2025",
    place: "Arid Agriculture University Rawalpindi",
    role: "Bachelor in Software Engineering",
  },
  {
    period: "2019 — 2021",
    place: "Faran Model College",
    role: "Pre Engineering",
  },
  {
    period: "2017 — 2019",
    place: "High School",
    role: "High School Science",
  },
];

const Journey = () => {
  const { reveal } = useMotion();

  return (
    <section id="journey" aria-labelledby="journey-heading" className="border-t border-line bg-ink">
      <div className="shell section">
        <SectionHeading
          id="journey-heading"
          index="04"
          kicker="The Journey"
          title="Experience and education."
        />

        <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-8">
            {experience.map((item, index) => (
              <motion.article
                key={item.place + item.period}
                {...reveal(index * 0.06)}
                className="border-t border-line py-8 last:border-b md:py-10"
              >
                <div className="grid gap-3 md:grid-cols-12 md:gap-8">
                  <p className="text-sm text-gold md:col-span-4">{item.period}</p>
                  <div className="min-w-0 md:col-span-8">
                    <h3 className="text-balance font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[0.95] text-paper">
                      {item.role}
                    </h3>
                    <p className="mt-3 text-mist">
                      {item.place}
                      <span className="mx-2 text-gold">/</span>
                      {item.type}
                      {item.current && (
                        <>
                          <span className="mx-2 text-gold">/</span>
                          <span className="text-gold">Current role</span>
                        </>
                      )}
                    </p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-fog">{item.description}</p>
                    <p className="mt-5 break-words text-sm leading-7 text-mist">
                      {item.stack.join("  ·  ")}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.aside
            {...reveal(0.08)}
            className="min-w-0 lg:sticky lg:top-24 lg:col-span-4 lg:self-start lg:border-l lg:border-line lg:pl-10"
          >
            <h3 className="font-display text-3xl font-medium text-paper">Education</h3>
            <div className="mt-6">
              {education.map((item) => (
                <div key={item.place} className="border-t border-line py-6 last:border-b">
                  <p className="text-sm text-gold">{item.period}</p>
                  <h4 className="mt-2 text-paper">{item.place}</h4>
                  <p className="mt-1 text-sm text-fog">{item.role}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Journey;
