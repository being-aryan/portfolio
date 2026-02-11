import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;

      // translate3d = GPU stable (no white flash)
      el.style.transform = `translate3d(${x - 240}px, ${y - 240}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[480px] w-[480px] rounded-full opacity-35 blur-2xl will-change-transform"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.55), rgba(56,189,248,0.28), rgba(0,0,0,0) 70%)",
        transform: "translate3d(-9999px,-9999px,0)",
      }}
    />
  );
}
