import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-5xl font-bold">Aryan Tiwari</h1>
        <p className="mt-4 text-xl">Software Developer | Full-Stack | Web3</p>
        <p className="mt-6 max-w-xl">
          Computer Science student specializing in scalable React apps,
          blockchain development, and performance optimization.
        </p>
      </motion.div>
    </section>
  );
}
