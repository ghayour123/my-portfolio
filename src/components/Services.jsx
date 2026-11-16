import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useMotion } from "../lib/motion";

const services = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "Responsive, interactive interfaces with React, Next.js, Tailwind CSS, and modern UI patterns across devices.",
  },
  {
    id: "02",
    title: "Backend Development",
    description:
      "Server-side applications with Node.js, Express, and NestJS — including authentication, data flow, and performance-minded APIs.",
  },
  {
    id: "03",
    title: "Database Management",
    description:
      "Data modeling and management with MongoDB, PostgreSQL, SQL, and Supabase for reliable application backends.",
  },
  {
    id: "04",
    title: "APIs & Real-time",
    description:
      "REST and GraphQL APIs, third-party integrations, Socket.IO and WebSockets, and payment flows including Stripe.",
  },
];

const Services = () => {
  const { reveal } = useMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-line bg-ink-soft"
    >
      <div className="shell section">
        <SectionHeading
          id="services-heading"
          index="05"
          kicker="Services"
          title="What I can help you build."
        />

        <div className="mt-12 border-b border-line md:mt-16">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              {...reveal(index * 0.05)}
              className="group grid gap-3 border-t border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-11"
            >
              <p className="font-display text-3xl text-fog transition-colors duration-300 group-hover:text-gold md:col-span-2">
                {service.id}
              </p>
              <h3 className="font-display text-[clamp(1.9rem,3vw,2.7rem)] font-medium leading-none text-paper md:col-span-4">
                {service.title}
              </h3>
              <p className="leading-relaxed text-fog md:col-span-6">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
