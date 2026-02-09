import { useState } from "react";
import { projects } from "../data";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-semibold">Projects</h2>

      <div className="flex gap-4 mt-4">
        {["All", "React", "Full-Stack"].map(f => (
          <button key={f} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      <AnimatePresence>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {filtered.map(p => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p>{p.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
}
