import { useMemo, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const allProjects = [
  {
    title: "Sorting Algorithm Visualizer",
    period: "June 2024 – July 2024",
    category: "Web",
    desc:
      "Interactive educational web app visualizing sorting algorithms with real-time execution, complexity analysis and performance.",
    bullets: ["Smooth 60 FPS animations", "Adjustable speed (1x–5x)", "Dynamic array size"],
    tags: ["React", "JavaScript", "HTML5", "CSS3"],
    link: "#",
  },
  {
    title: "Explore Together",
    period: "July 2023 – Jan 2024",
    category: "Web",
    desc:
      "Full-stack travel recommendation platform integrating Maps, weather, and smart UI for location-based planning.",
    bullets: ["Mobile-first responsive", "API integrations", "Clean UI layout"],
    tags: ["React", "Material UI", "REST APIs"],
    link: "#",
  },
  {
    title: "Blockchain DApp Development",
    period: "July 2024 – Aug 2024",
    category: "Blockchain",
    desc:
      "Intensive web3 project work covering Solidity, EVM architecture, smart contract security, and gas optimization.",
    bullets: ["Top 185 among 2000+", "Scholarship awarded", "Security-focused"],
    tags: ["Solidity", "Ethereum", "Avalanche", "Web3"],
    link: "#",
  },
];

function Chip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-4 py-2 rounded-full text-sm transition border",
        active
          ? "bg-white text-slate-900 border-white"
          : "glass text-white/75 border-white/10 hover:bg-white/8 hover:text-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function ProjectCard({ p }) {
  return (
    <div className="glass card-shadow rounded-2xl p-8 border border-white/10 hover:-translate-y-2 transition-all duration-300">
      <div className="h-44 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/25 text-4xl">
        ⛓️
      </div>

      <div className="mt-6">
        <div className="text-white font-semibold">{p.title}</div>
        <div className="text-xs text-white/55 mt-1">{p.period}</div>

        <p className="mt-3 text-white/70 text-sm leading-relaxed">
          {p.desc}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-white/40">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-white/6 border border-white/10 text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return allProjects;
    return allProjects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center premium-title">
            Featured Projects
          </h2>
          <p className="text-center text-white/60 mt-3">
            A selection of work I&apos;m proud of.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 flex justify-center gap-3">
            {["All", "Web", "Blockchain"].map((x) => (
              <Chip key={x} active={filter === x} onClick={() => setFilter(x)}>
                {x}
              </Chip>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ScrollReveal key={p.title}>
              <ProjectCard p={p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
