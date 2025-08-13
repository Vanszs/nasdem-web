"use client";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="#" className="font-extrabold text-2xl tracking-tight text-blue-900">
          Poliform
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-900/70">
          {[
            ["Product", "#product"],
            ["Lifestyle", "#lifestyle"],
            ["News", "#news"],
            ["Projects", "#projects"],
          ].map(([label, href]) => (
            <Link 
              key={label} 
              href={href} 
              className="hover:text-orange-500 transition-colors hover:font-semibold"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2 rounded-full border border-blue-900/20 hover:bg-blue-50 transition-colors" aria-label="Open menu">
          <Menu className="w-5 h-5 text-blue-900" />
        </button>
      </div>
    </header>
  );
}
