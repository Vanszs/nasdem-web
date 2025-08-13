"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Beranda", "/"],
  ["Profil Partai", "/profil"],
  ["Program & Kegiatan", "/program"],
  ["Berita & Artikel", "/berita"],
  ["Galeri", "/galeri"],
  ["Anggota", "/anggota"],
  ["Sosial", "/sosial"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)] shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo - positioned to the left */}
        <Link
          href="/"
          className="font-extrabold text-2xl tracking-tight text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:scale-105 transition-transform duration-200"
        >
          Partai<span className="text-[var(--accent)]"> Nasdem</span>
        </Link>

        {/* Navigation and Login - positioned to the right */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <nav className="flex items-center gap-6 text-sm font-medium text-[var(--text-muted)]">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white py-2 px-1"
              >
                {label}
              </Link>
            ))}
          </nav>
          
          {/* Fixed Login Button */}
          <Link
            href="/admin/login"
            className="btn-outline text-xs px-3 py-1.5"
          >
            Login Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full border border-[var(--border)] hover:bg-[var(--light-bg)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
          className="md:hidden border-t border-[var(--border)] bg-white/95 backdrop-blur-sm"
        >
          <div className="w-full max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-[var(--primary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-lg px-2"
              >
                {label}
              </Link>
            ))}
            
            {/* Fixed Mobile Login Button */}
            <Link
              href="/admin/login"
              onClick={() => setOpen(false)}
              className="mt-3 btn-outline text-xs px-3 py-1.5"
            >
              Login Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
