import { useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export function useMotion() {
  const preference = useReducedMotion();
  const reduce =
    preference === null
      ? typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : preference;

  const reveal = (delay = 0) => {
    if (reduce) return {};
    return {
      initial: { opacity: 0, y: 22 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "0px 0px -8% 0px" },
      transition: { duration: 0.7, delay, ease },
    };
  };

  const enter = (delay = 0) => {
    if (reduce) return {};
    return {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.75, delay, ease },
    };
  };

  return {
    reduce,
    duration: reduce ? 0 : 700,
    reveal,
    enter,
  };
}
