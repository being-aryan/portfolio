import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-zinc-900 z-50 shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-bold">Aryan Tiwari</span>

        <div className="hidden md:flex gap-6">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
          ))}
          <DarkModeToggle />
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="block py-2">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
