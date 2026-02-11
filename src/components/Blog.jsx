import ScrollReveal from "./ScrollReveal";

const posts = [
  {
    title: "Building Premium UI with Tailwind",
    desc: "How glassmorphism, spacing rhythm, and typography hierarchy instantly improves UI.",
    date: "2026",
  },
  {
    title: "React Performance Checklist",
    desc: "Practical optimizations: memo, lazy loading, code splitting, and avoiding re-renders.",
    date: "2026",
  },
  {
    title: "Getting Started with Solidity",
    desc: "A clean learning path: fundamentals, best practices, and building your first smart contract.",
    date: "2026",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center premium-title">
            Blog
          </h2>
          <p className="text-center text-white/60 mt-3">
            Notes, breakdowns, and learnings from building.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <ScrollReveal key={p.title}>
              <div className="glass card-shadow rounded-2xl p-7 border border-white/10 hover:-translate-y-2 transition-all duration-300">
                <div className="text-xs text-white/55">{p.date}</div>
                <div className="mt-2 text-white font-semibold">{p.title}</div>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  {p.desc}
                </p>
                <button className="mt-6 text-sm text-white/75 hover:text-white transition">
                  Read more →
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
