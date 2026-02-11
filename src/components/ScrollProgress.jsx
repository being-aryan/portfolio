import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      setP(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-sky-400 via-purple-400 to-white"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}
