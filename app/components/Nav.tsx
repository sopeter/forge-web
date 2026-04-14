"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/80 border-b border-white/10"
          : "py-4 bg-black/40 border-b border-white/5"
      }`}
    >
      {/* Wordmark */}
      <div className="flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">🔥</span>
        <span className="text-white font-black text-xl tracking-widest uppercase">
          Forge
        </span>
      </div>

      {/* Nav right */}
      <div className="flex items-center gap-3">
        <span className="hidden md:inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-orange-500/50 text-orange-500/70">
          In Development
        </span>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-orange-500 text-black hover:bg-orange-400 transition-colors duration-200"
        >
          <span>🍎</span> App Store
        </a>
      </div>
    </nav>
  );
}
