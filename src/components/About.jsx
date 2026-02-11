import Section from "../components/ui/Section.jsx";
import { GlassCard } from "../components/ui/Card.jsx";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import profileImg from "../assets/aryan.jpg";

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A little bit about who I am and what I do."
      className="pt-28 md:pt-32"
    >
      <ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* glow */}
              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 blur-2xl opacity-35 group-hover:opacity-60 transition duration-500" />

              {/* frame */}
              <div className="relative rounded-[24px] border border-white/10 bg-white/[0.03] p-2 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Aryan Tiwari"
                  className="h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] object-cover rounded-[18px]
                             ring-1 ring-white/10 group-hover:scale-[1.02] transition duration-500"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>

              {/* Floating LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-5 -left-5 glass p-1 rounded-xl border border-white/10 hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  className="w-10 h-10"
                  alt=""
                />
              </motion.a>

              {/* Floating GitHub */}
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-6 glass p-1 rounded-xl border border-white/10 hover:scale-110 transition"
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  className="w-10 h-10 invert"
                  alt=""
                />
              </motion.a>

              {/* Floating LeetCode */}
              <motion.a
                href="https://leetcode.com/yourusername"
                target="_blank"
                rel="noreferrer"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                className="absolute -right-6 top-10 glass p-1 rounded-xl border border-white/10 hover:scale-110 transition"
                aria-label="LeetCode"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  className="w-12 h-12"
                  alt=""
                />
              </motion.a>

              {/* Floating Email */}
              <motion.a
                href="mailto:yourmail@gmail.com"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.9, ease: "easeInOut" }}
                className="absolute -right-6 bottom-10 glass p-3 rounded-xl border border-white/10 hover:scale-110 transition text-white/90 text-3xl flex items-center justify-center"
                aria-label="Email"
              >
                ✉
              </motion.a>
            </div>
          </div>

          {/* Content */}
          <div>
            <GlassCard className="p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Results-Driven Computer Science Student
              </h3>

              <p className="mt-4 text-white/70 leading-relaxed">
                I'm a B.E. Computer Science student at Chandigarh University (CGPA: 7.0)
                with proven expertise in full-stack web development, blockchain
                technology, and data structures & algorithms.
              </p>

              <p className="mt-4 text-white/70 leading-relaxed">
                As a Top 185 scholarship recipient in the Metacrafters blockchain program
                among 2000+ participants, I’ve developed strong skills in Ethereum,
                Avalanche, and smart contract development. I’m passionate about clean
                code, thoughtful UI, and continuous learning.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Stat label="Expected Grad" value="2026" />
                <Stat label="Projects Built" value="10+" />
                <Stat label="Top 185 Scholar" value="Metacrafters" />
                <Stat label="Problems Solved" value="200+" />
              </div>
            </GlassCard>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center hover:bg-white/[0.06] transition">
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-xs text-white/50 mt-1">{label}</div>
    </div>
  );
}
