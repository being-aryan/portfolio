import ScrollReveal from "./ScrollReveal";

const items = [
  {
    year: "2022 – May 2026",
    title: "B.E. Computer Science",
    org: "Chandigarh University",
    meta: "Gharuan, Chandigarh",
    desc:
      "CGPA: 7.0/10. Specializing in full-stack development, blockchain technology, and data structures & algorithms.",
  },
  {
    year: "July 2024 – Aug 2024",
    title: "Blockchain Development Bootcamp",
    org: "Metacrafters",
    meta: "Remote",
    desc:
      "Completed 200+ hour program. Ranked Top 185 among 2000+ participants. Earned $500 scholarship for exceptional work.",
  },
  {
    year: "2024",
    title: "Cloud Computing – Elite Silver Medal",
    org: "NPTEL",
    meta: "Online",
    desc:
      "Secured top 5% among 50,000+ participants. Topics: AWS, Azure, Google Cloud, Docker, Kubernetes, microservices.",
  },
  {
    year: "2024",
    title: "Multi-Core Architecture & DBMS",
    org: "NPTEL",
    meta: "Online",
    desc:
      "Distinction in parallel processing, cache optimization, SQL query tuning, and database normalization.",
  },
  {
    year: "2022",
    title: "Higher Secondary Certificate",
    org: "Children Public School",
    meta: "Fatehpur, Uttar Pradesh",
    desc:
      "Class XII with 60%. Strong foundation in mathematics and computer science.",
  },
   {
    year: "2020",
    title: "Secondary School Certificate",
    org: "Maharishi Vidya Mandir",
    meta: "Fatehpur, Uttar Pradesh",
    desc:
      "Class X with 74.5%. Developed a strong foundation in core academic subjects with the ability to apply concepts to real-world situations.",
  },
];

function TimelineCard({ side, item }) {
  return (
    <div className={`flex ${side === "left" ? "justify-start" : "justify-end"}`}>
      <div className="w-full md:w-[420px] glass card-shadow rounded-2xl p-7 border border-white/10">
        <div className="text-xs text-white/60">{item.year}</div>
        <div className="mt-2 text-white font-semibold">{item.title}</div>
        <div className="text-white/70 text-sm mt-1">
          {item.org} • <span className="text-white/55">{item.meta}</span>
        </div>
        <p className="mt-3 text-white/70 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center premium-title">
            Education & Certifications
          </h2>
          <p className="text-center text-white/60 mt-3">
            My academic journey and achievements.
          </p>
        </ScrollReveal>

        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-6">
            {items.map((item, idx) => (
              <ScrollReveal key={item.title}>
                <div className="relative">
                  <div
                    className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-white/30"
                  />
                  <TimelineCard side={idx % 2 === 0 ? "left" : "right"} item={item} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
