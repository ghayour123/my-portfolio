import { motion } from "framer-motion";
import { useMotion } from "../lib/motion";

export default function SectionHeading({ id, index, kicker, title, intro, className = "" }) {
  const { reveal } = useMotion();

  return (
    <motion.header {...reveal()} className={className}>
      <p className="kicker">
        {index} — {kicker}
      </p>
      <h2
        id={id}
        className="mt-4 max-w-4xl text-balance font-display text-[clamp(2.55rem,5.2vw,4.7rem)] font-medium leading-[0.94] tracking-[-0.03em] text-paper"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-fog sm:text-lg">{intro}</p>
      ) : null}
    </motion.header>
  );
}
