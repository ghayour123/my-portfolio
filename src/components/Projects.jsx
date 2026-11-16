import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useMotion } from "../lib/motion";

const projects = [
  {
    id: 1,
    title: "LeafOxy",
    subtitle: "Landscaping & Garden E-Commerce",
    description:
      "LeafOxy is a Pakistan-focused platform for premium plants, gardening supplies, and professional landscaping — combining an online store with garden design, maintenance, turf installation, and nationwide service coverage.",
    features: [
      "Shop plants, planters, tools, and lawn products",
      "Landscaping design, installation, and maintenance services",
      "Service areas across Islamabad, Rawalpindi, and major cities",
    ],
    image: "/assets/leafoxy-preview.jpg",
    width: 1400,
    height: 1050,
    tags: ["E-Commerce", "Product Catalog", "Landscaping Services"],
    domain: "leafoxy.com",
    live: "https://leafoxy.com/",
  },
  {
    id: 2,
    title: "iSabiTV",
    subtitle: "Afrocentric Video Streaming Platform",
    description:
      "iSabiTV documents and preserves Black stories from Africa and the global diaspora through curated films, a family-safe Kids zone, creator uploads, contests, and educational partnerships — with creator monetization and moderated, dignity-first content standards.",
    features: [
      "Movies, documentaries, and user-generated creator content",
      "iSabiTV Kids and community contests",
      "Creator dashboards with monetization and content moderation",
    ],
    image: "/assets/isabitv-preview.jpg",
    width: 1200,
    height: 600,
    tags: ["Next.js", "React", "Video Streaming"],
    domain: "isabitv.com",
    live: "https://www.isabitv.com/",
  },
];

const Projects = () => {
  const { reveal } = useMotion();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-line bg-ink-soft">
      <div className="shell section">
        <SectionHeading
          id="projects-heading"
          index="03"
          kicker="Selected Work"
          title="Featured projects."
          intro="Production platforms with live demos — built for real users and ongoing delivery."
        />

        <div className="mt-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              {...reveal(index * 0.08)}
              className="grid items-center gap-8 border-t border-line py-12 last:border-b md:py-16 lg:grid-cols-12 lg:gap-14"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className={`group media-frame block min-w-0 lg:col-span-7 ${
                  index % 2 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt=""
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                  className={`media-zoom w-full object-cover object-top ${
                    project.id === 1 ? "aspect-[4/3]" : "aspect-[2/1]"
                  }`}
                />
              </a>

              <div className={`min-w-0 lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}>
                <p className="kicker">0{project.id}</p>
                <h3 className="mt-3 font-display text-[clamp(2.4rem,4vw,3.5rem)] font-medium leading-none text-paper">
                  {project.title}
                </h3>
                <p className="mt-3 text-mist">{project.subtitle}</p>
                <p className="mt-5 leading-relaxed text-fog">{project.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-mist">
                      <span className="text-gold" aria-hidden="true">
                        —
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="meta-label mt-6">{project.tags.join("  /  ")}</p>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-fill"
                  >
                    Live Demo
                    <span aria-hidden="true">↗</span>
                  </a>
                  <span className="text-sm text-fog">{project.domain}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
