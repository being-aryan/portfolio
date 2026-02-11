import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  // nav height + top gap (top-4) + extra breathing
  const OFFSET = 96; // tweak if you want (80-110 range)

  const ids = useMemo(() => navItems.map((n) => n.href.replace("#", "")), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Make ALL sections respect navbar when scrolling to anchors
  useEffect(() => {
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.style.scrollMarginTop = `${OFFSET}px`;
    });
  }, [ids]);

  // ✅ Active section highlight (premium)
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + OFFSET + 1;

      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = `#${id}`;
      }
      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  // ✅ Smooth scroll with offset (no hidden headings)
  const go = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;

    window.history.replaceState(null, "", href);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "mx-auto max-w-6xl rounded-2xl",
          "glass card-shadow",
          "px-4 md:px-6 py-3",
          scrolled ? "bg-white/7" : "bg-white/4",
          "border border-white/10 backdrop-blur-xl",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => go("#home")}
            className="font-semibold tracking-tight text-white/90 hover:text-white transition"
          >
            {"<Aryan/>"}
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <div className="rounded-full bg-white/5 border border-white/10 px-2 py-1 flex gap-1">
              {navItems.map((it) => {
                const isActive = active === it.href;
                return (
                  <button
                    key={it.href}
                    onClick={() => go(it.href)}
                    className={[
                      "px-3 py-1.5 text-sm rounded-full transition",
                      isActive
                        ? "bg-white text-slate-900 font-semibold"
                        : "text-white/70 hover:text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    {it.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <select
              className="glass rounded-xl px-3 py-2 text-sm text-white/80 outline-none bg-transparent"
              onChange={(e) => go(e.target.value)}
              value={active}
            >
              {navItems.map((it) => (
                <option key={it.href} value={it.href}>
                  {it.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
