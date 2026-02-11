import ScrollReveal from "../../components/ScrollReveal";

export default function Section({ id, title, subtitle, className = "", children }) {
  return (
    <section
      id={id}
      className={`relative py-20 max-w-6xl mx-auto px-4 ${className}`}
      style={{ scrollMarginTop: "110px" }} 
    >
      <div className="text-center mb-12">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-white/60 max-w-2xl mx-auto">
              {subtitle}
            </p>
          ) : null}
        </ScrollReveal>
      </div>

      {children}
    </section>
  );
}
