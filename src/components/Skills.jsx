import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useMotion } from "../lib/motion";

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS"],
  },
  {
    title: "APIs & Real-time",
    items: [
      "REST APIs",
      "GraphQL",
      "Third-Party API Integrations",
      "Socket.IO",
      "WebSockets",
      "Live Streaming Integrations",
    ],
  },
  {
    title: "Data & Tools",
    items: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Redis",
      "Supabase",
      "Docker",
      "Git",
      "Authentication",
      "Stripe Payment Integration",
    ],
  },
];

const marqueeSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Socket.IO",
  "Tailwind CSS",
  "Docker",
  "Redis",
];

const Skills = () => {
  const { reveal } = useMotion();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-line bg-ink">
      <div className="shell section">
        <SectionHeading
          id="skills-heading"
          index="02"
          kicker="Skills"
          title="A working toolkit."
          intro="Frontend, backend, databases, APIs, and real-time systems — the technologies behind the work."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 lg:mt-20">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} {...reveal(index * 0.06)} className="min-w-0">
              <h3 className="font-display text-3xl font-medium text-paper">{group.title}</h3>
              <ul className="mt-5 border-t border-line">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-line py-3 text-sm text-mist transition-colors duration-300 hover:text-gold"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-t border-line py-5" aria-hidden="true">
        <div className="marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center pr-10">
              {marqueeSkills.map((skill) => (
                <span
                  key={`${copy}-${skill}`}
                  className="font-display text-[1.7rem] font-medium whitespace-nowrap text-fog/80 md:text-3xl"
                >
                  {skill}
                  <span className="mx-8 text-gold">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
