import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold dark:text-white">About Me</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          I’m a Computer Science student at Chandigarh University (CGPA 8.2),
          with hands-on experience in full-stack development, blockchain,
          and data structures. I’ve optimized React applications by up to 40%
          and ranked among the top 185 scholars in the Metacrafters Blockchain Program.
        </p>
      </motion.div>
    </section>
  );
}
