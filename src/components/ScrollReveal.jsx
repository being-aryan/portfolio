import { motion, useReducedMotion } from "framer-motion";

export default function ScrollReveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
