import { useMemo, useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Achievements() {
  const slides = useMemo(
    () => [
      {
        title: "Competitive Programming Excellence",
        text:
          "Solved 200+ DSA problems across LeetCode (100+), GeeksforGeeks, and HackerRank demonstrating strong algorithmic skills.",
        icon: "🏆",
      },
      {
        title: "Metacrafters Scholarship",
        text:
          "Top 185 among 2000+ participants. Awarded scholarship for strong blockchain project submissions and consistency.",
        icon: "🎓",
      },
      {
        title: "Performance-Focused Development",
        text:
          "Built scalable React apps with optimization mindset: code splitting, lazy loading, and clean UI systems.",
        icon: "⚡",
      },
    ],
    []
  );

  const [i, setI] = useState(0);

  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setI((v) => (v + 1) % slides.length);

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center premium-title">
            Achievements & Recognition
          </h2>
          <p className="text-center text-white/60 mt-3">
            Highlights that reflect my consistency and growth.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 glass card-shadow rounded-2xl p-10 border border-white/10 max-w-3xl mx-auto text-center">
            <div className="text-5xl">{slides[i].icon}</div>
            <div className="mt-4 text-white font-semibold text-xl">
              {slides[i].title}
            </div>
            <p className="mt-3 text-white/70 leading-relaxed">
              {slides[i].text}
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="h-10 w-10 rounded-full glass border border-white/10 hover:bg-white/8 transition"
                aria-label="Previous"
              >
                ‹
              </button>

              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition",
                      idx === i ? "bg-white/70" : "bg-white/20 hover:bg-white/35",
                    ].join(" ")}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="h-10 w-10 rounded-full glass border border-white/10 hover:bg-white/8 transition"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
