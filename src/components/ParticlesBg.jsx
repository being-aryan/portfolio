import { useEffect, useRef } from "react";

export default function ParticlesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1 + Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      a: 0.25 + Math.random() * 0.35,
    }));

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    let raf = 0;

    const loop = () => {
      // ✅ clear to transparent but body is now dark, so no white flash
      ctx.clearRect(0, 0, w, h);

      // small glow dots
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -50) p.x = w + 50;
        if (p.x > w + 50) p.x = -50;
        if (p.y < -50) p.y = h + 50;
        if (p.y > h + 50) p.y = -50;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      }

      // connect near particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.12;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[1] opacity-70 will-change-transform"
      style={{
        transform: "translateZ(0)", // ✅ GPU compositing to prevent flicker
      }}
    />
  );
}
