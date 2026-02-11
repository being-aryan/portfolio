import ScrollReveal from "./ScrollReveal";

function Bar({ label, value }) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-sm text-white/75">
        <span>{label}</span>
        <span className="text-white/60">{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-sky-200"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="glass card-shadow rounded-2xl p-7 border border-white/10 hover:-translate-y-2 transition-all duration-300">
      <div className="text-white/90 font-semibold">{title}</div>
      <div className="mt-4">
        {items.map((x) => (
          <Bar key={x.label} label={x.label} value={x.value} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const data = [
    {
      title: "Frontend",
      items: [
        { label: "React.js / Next.js", value: 92 },
        { label: "TypeScript / JavaScript (ES6+)", value: 90 },
        { label: "HTML5 / CSS3 / Tailwind", value: 95 },
        { label: "UI Systems", value: 86 },
      ],
    },
    {
      title: "Backend",
      items: [
        { label: "Node.js / Express", value: 85 },
        { label: "REST API Development", value: 88 },
        { label: "Python", value: 80 },
        { label: "C++", value: 85 },
      ],
    },
    {
      title: "Blockchain & Web3",
      items: [
        { label: "Solidity", value: 82 },
        { label: "Ethereum / EVM", value: 80 },
        { label: "Avalanche (AVAX)", value: 78 },
        { label: "Smart Contracts / DApps", value: 80 },
      ],
    },
    {
      title: "Database",
      items: [
        { label: "MySQL", value: 85 },
        { label: "MongoDB / NoSQL", value: 82 },
        { label: "Query Optimization", value: 78 },
        { label: "DB Design", value: 80 },
      ],
    },
    {
      title: "Developer Tools",
      items: [
        { label: "Git / GitHub", value: 92 },
        { label: "VS Code / Postman", value: 90 },
        { label: "Linux Terminal", value: 80 },
        { label: "npm / Bundlers", value: 85 },
      ],
    },
    {
      title: "Core Competencies",
      items: [
        { label: "DSA", value: 88 },
        { label: "OOP", value: 90 },
        { label: "Agile / Scrum", value: 78 },
        { label: "Design Patterns", value: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center premium-title">
            My Skills
          </h2>
          <p className="text-center text-white/60 mt-3">
            Technologies and tools I work with every day.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((c) => (
            <ScrollReveal key={c.title}>
              <SkillCard title={c.title} items={c.items} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
