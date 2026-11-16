import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useMotion } from "../lib/motion";

/**
 * Change summary:
 * - Skills section restyled for a clearer, more modern layout
 * - Same skill content; stronger hierarchy, hover states, and staggered motion
 * - Related: SectionHeading, useMotion, index.css (.marquee)
 */

const skillGroups = [
  {
    title: "Frontend",
    note: "Interfaces users see and feel",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    note: "APIs, services, and server logic",
    items: ["Node.js", "Express.js", "NestJS"],
  },
  {
    title: "APIs & Real-time",
    note: "Connections that keep products live",
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
    note: "Storage, auth, payments, and delivery",
    items: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Redis",
      "Supabase",
      "Docker",
      "Git",
      "Authentication",
      "Payment Integrations",
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
  const { reveal, reduce } = useMotion();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative border-t border-line bg-ink-soft">
      {/* Soft gold wash — atmosphere only, not the main visual */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(196,165,116,0.08),transparent_58%)]"
        aria-hidden="true"
      />

      <div className="shell section relative">
        <SectionHeading
          id="skills-heading"
          kicker="Skills"
          title="A working toolkit."
          intro="Frontend, backend, databases, APIs, and real-time systems — the technologies behind the work."
        />

        {/* --- Skill groups: editorial rows with interactive tags --- */}
        <div className="mt-14 border-t border-line lg:mt-20">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              {...reveal(groupIndex * 0.07)}
              className="group/skill border-b border-line py-9 sm:py-11"
            >
            
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
                <div className="min-w-0 lg:col-span-4">
                  <p className="meta-label text-gold/80">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.65rem)] font-medium leading-none text-paper">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-fog">{group.note}</p>
                </div>

                <ul className="flex min-w-0 flex-wrap gap-2.5 sm:gap-3 lg:col-span-8">
                  {group.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
                      transition={{
                        duration: 0.45,
                        delay: reduce ? 0 : groupIndex * 0.04 + skillIndex * 0.035,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="skill-chip inline-flex items-center border border-line bg-ink/40 px-3.5 py-2 text-sm text-mist transition-[border-color,color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:bg-surface hover:text-gold">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Continuous tech marquee --- */}
      <div className="relative overflow-hidden border-t border-line bg-ink py-6" aria-hidden="true">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-24" />
        <div className="marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center pr-8">
              {marqueeSkills.map((skill) => (
                <span
                  key={`${copy}-${skill}`}
                  className="font-display text-[1.55rem] font-medium whitespace-nowrap text-fog/75 md:text-[1.85rem]"
                >
                  {skill}
                  <span className="mx-7 text-gold/80">·</span>
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
