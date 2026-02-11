export function PrimaryButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold
      text-[#051F20]
      bg-gradient-to-r from-[#8EB69B] via-[#DAF1DE] to-[#8EB69B]
      shadow-[0_10px_30px_rgba(0,0,0,0.35)]
      hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)]
      hover:scale-[1.04] transition duration-300 ${className}`}
    >
      {children}
    </a>
  );
}

export function GhostButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold
      border border-[#8EB69B]/70 text-[#8EB69B]
      bg-[#051F20]/20 backdrop-blur-xl
      hover:bg-[#8EB69B] hover:text-[#051F20]
      transition duration-300 ${className}`}
    >
      {children}
    </a>
  );
}

export function IconButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold
      border border-[#235347]/55 text-[#DAF1DE]
      bg-[#163832]/55 backdrop-blur-xl
      hover:border-[#8EB69B]/70 hover:text-[#8EB69B]
      transition duration-300 ${className}`}
    >
      {children}
    </a>
  );
}
