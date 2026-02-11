import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Hero() {
  const jump = (id) => {
    const el = document.querySelector(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-32 pb-16 overflow-hidden"
    >
      {/* IMPORTANT: ensures content stays above background */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <div className="text-center">

            {/* ===== OPEN TO OPPORTUNITIES PILL (FIXED) ===== */}
            <div className="inline-flex items-center gap-2 
              rounded-full 
              bg-white/10 backdrop-blur-xl 
              border border-white/15 
              px-5 py-2 
              text-white text-sm font-medium 
              shadow-lg">

              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </div>

            {/* ===== MAIN HEADING ===== */}
            <h1 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#8EB69B] via-white to-[#8EB69B] bg-clip-text text-transparent">
                Aryan Tiwari
              </span>
            </h1>

            {/* ===== SUBTEXT ===== */}
            <p className="mt-5 mx-auto max-w-2xl text-white/75 leading-relaxed">
              Full-Stack Developer & Blockchain Enthusiast crafting scalable React
              applications with clean architecture and optimized performance.
            </p>

            {/* ===== BUTTONS ===== */}
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">

              <button
                onClick={() => jump("#projects")}
                className="rounded-xl 
                  bg-[#8EB69B] text-[#051F20] 
                  px-6 py-3 font-semibold 
                  hover:scale-105 transition duration-300 
                  shadow-lg"
              >
                View Projects
              </button>

              <button
                onClick={() => jump("#contact")}
                className="rounded-xl 
                  bg-white/10 backdrop-blur-xl 
                  border border-white/15 
                  px-6 py-3 font-semibold 
                  text-white hover:bg-white/20 
                  transition duration-300"
              >
                Contact Me
              </button>

            </div>

            {/* ===== SCROLL INDICATOR ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-14 text-white/60 text-xs tracking-[0.25em]"
            >
              SCROLL

              <div className="mt-3 flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                  className="h-7 w-7 rounded-full 
                    border border-white/20 
                    flex items-center justify-center 
                    text-white/80"
                >
                  ↓
                </motion.div>
              </div>
            </motion.div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
