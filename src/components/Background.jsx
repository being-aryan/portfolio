import React from "react";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071226] via-[#071B33] to-[#050B16]" />

      {/* Soft glow blobs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-56 -right-56 h-[620px] w-[620px] rounded-full bg-white/5 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, -18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Minimal “stars” */}
      <div className="absolute inset-0 opacity-60">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-white/45"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{ opacity: [0.15, 0.7, 0.15] }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 6) * 0.25,
            }}
          />
        ))}
      </div>
    </div>
  );
}
