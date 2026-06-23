"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("#home");

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center justify-center gap-1 px-4 py-2 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] max-w-[90vw] sm:max-w-none">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActive(item.href)}
            className="group relative px-4 py-2 sm:px-6 rounded-full text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap"
          >
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                active === item.href
                  ? "bg-linear-to-r from-emerald-400/20 to-purple-500/20 shadow-[0_0_16px_rgba(52,211,153,0.15)] opacity-100"
                  : "opacity-0 group-hover:opacity-100 group-hover:bg-white/5"
              }`}
            />
            <span
              className={`relative z-10 transition-colors duration-300 ${
                active === item.href
                  ? "text-white"
                  : "text-white/60 group-hover:text-white"
              }`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
}
