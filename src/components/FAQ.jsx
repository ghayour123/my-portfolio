import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useMotion } from "../lib/motion";

const faqs = [
  {
    question: "What technologies do you use for full stack development?",
    answer:
      "I work across the full stack — React, Next.js, TypeScript, Node.js, Express, NestJS, MongoDB, PostgreSQL, Redis, REST and third-party APIs, Socket.IO, and modern deployment tooling.",
  },
  {
    question: "Are you available for freelance full stack projects?",
    answer:
      "Yes. I take on freelance full stack projects including web applications, APIs, database design, and end-to-end solutions. Reach out through the contact form to discuss your requirements.",
  },
  {
    question: "What types of projects have you worked on?",
    answer:
      "I've worked on production web platforms including e-commerce and landscaping services, video streaming and creator tools, learning systems, and business applications — covering frontend, backend, and database integration.",
  },
  {
    question: "How do you ensure code quality and performance?",
    answer:
      "I follow clean architecture, careful reviews, testing where needed, and performance-minded UI/API design. I use modern tooling, version control, and responsive patterns for solid user experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { reduce, reveal } = useMotion();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-line bg-ink-soft">
      <div className="shell section">
        <SectionHeading id="faq-heading" index="07" kicker="FAQ" title="Questions, answered." />

        <div className="mt-12 md:mt-16">
          {faqs.map((faq, index) => {
              const open = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <motion.div
                  key={faq.question}
                  {...reveal(index * 0.04)}
                  className="border-t border-line last:border-b"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      onClick={() => setOpenIndex(open ? -1 : index)}
                      aria-expanded={open}
                      aria-controls={panelId}
                    >
                      <span className="text-base text-paper sm:text-lg">{faq.question}</span>
                      <span className="mt-0.5 shrink-0 text-xl leading-none text-gold" aria-hidden="true">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        key={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 leading-relaxed text-fog">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
