export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/40 border-b border-white/5">
      {/* Wordmark */}
      <div className="flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">🔥</span>
        <span className="text-white font-black text-xl tracking-widest uppercase">
          Forge
        </span>
      </div>

      {/* Status badge */}
      <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-orange-500 text-orange-500">
        In Development · iOS 17+
      </span>
    </nav>
  );
}
