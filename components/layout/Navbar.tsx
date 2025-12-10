"use client";

import { useState } from "react";
import { cn } from "../utils/cn";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Works", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="hidden items-center gap-6 text-sm uppercase tracking-[0.18em] text-neutral-800 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="border-b border-transparent pb-1 text-neutral-800 transition hover:border-neutral-900 hover:text-neutral-950"
          >
            {item.label}
          </a>
        ))}
      </div>
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
        onClick={() => setOpen((p) => !p)}
        aria-label="Toggle navigation"
      >
        <span className="text-sm">☰</span>
      </button>
      <div
        className={cn(
          "absolute right-0 mt-3 w-48 rounded-2xl border border-border bg-card p-4 shadow-xl transition md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-muted transition hover:text-foreground" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

