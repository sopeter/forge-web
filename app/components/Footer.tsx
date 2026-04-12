export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-white/10 text-center">
      {/* Wordmark */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-2xl" aria-hidden="true">🔥</span>
        <span className="text-white font-black text-xl tracking-widest uppercase">
          Forge
        </span>
      </div>

      {/* Status line */}
      <p className="text-white/50 text-sm mb-3">
        Currently in development for iOS 17+
      </p>

      {/* Tagline */}
      <p className="text-white/30 text-xs tracking-widest uppercase mb-8">
        AI-powered · Body composition driven · Apple Health integrated
      </p>

      {/* Copyright */}
      <p className="text-white/20 text-xs">© 2026 Forge</p>
    </footer>
  );
}
