"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-[#22c55e] font-bold text-xl font-mono tracking-tight">
            GS
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#a3a3a3] hover:text-[#22c55e] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1xxWahuW1e9u88qZeC9ZfAji0LRrTWEwG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#22c55e] text-[#22c55e] px-4 py-1.5 rounded text-sm font-medium hover:bg-[#22c55e]/10 transition-colors"
            >
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#a3a3a3] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#2a2a2a]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#a3a3a3] hover:text-[#22c55e] transition-colors text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1xxWahuW1e9u88qZeC9ZfAji0LRrTWEwG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#22c55e] text-[#22c55e] px-4 py-2 rounded text-sm font-medium text-center hover:bg-[#22c55e]/10 transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
