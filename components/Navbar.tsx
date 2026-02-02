"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/servicios", label: "Servicios" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-fondo/90 backdrop-blur-md border-b border-texto/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link href="/" className="group">
            <h1 className="font-heading text-2xl font-semibold text-texto transition-colors hover:text-verde">
              Aitana Barreda
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-verde"
                    : "text-texto/70 hover:text-texto"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-verde rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/servicios#contacto"
              className="px-6 py-2.5 bg-verde text-fondo font-medium rounded-full transition-all duration-300 hover:bg-verde-light hover:shadow-md hover:scale-105"
            >
              Pide cita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-texto rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-texto rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-texto rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-verde"
                    : "text-texto/70 hover:text-texto"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/servicios#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block w-full text-center px-6 py-2.5 bg-verde text-fondo font-medium rounded-full transition-all duration-300 hover:bg-verde-light"
            >
              Pide cita
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
