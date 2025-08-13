"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Product", "#collection"],
  ["Lifestyle", "#highlight"],
  ["News", "#metrics"],
  ["Projects", "#modern"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--stroke)] shadow-sm">
      <div className="site-container h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-extrabold text-2xl tracking-tight text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Poliform
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[color:rgba(var(--primary-rgb),0.75)]">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-full border border-[color:rgba(var(--primary-rgb),0.2)] hover:bg-[color:rgba(var(--primary-rgb),0.05)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="w-5 h-5 text-[var(--primary)]" />
          ) : (
            <Menu className="w-5 h-5 text-[var(--primary)]" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[var(--stroke)] bg-white/95 backdrop-blur-sm"
        >
          <div className="site-container py-3 flex flex-col gap-2">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-[var(--primary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
