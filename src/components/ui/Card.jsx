export function GlassCard({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl",
        "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
