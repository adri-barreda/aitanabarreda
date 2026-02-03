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
          <Link href="/" className="group flex items-center gap-3">
            {/* Logo Aliento */}
            <svg
              width="48"
              height="34"
              viewBox="0 0 80 56"
              fill="none"
              className="transition-transform duration-300 group-hover:scale-105"
            >
              <path
                d="M4 48 C8 46 14 42 22 35 C28 30 33 25 38 20 C42 16 45 13 48 11 C50 10 51 9 52 9 C54 11 57 16 62 24 C68 34 76 44 86 50"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-verde"
              />
              <path
                d="M76 48 C72 44 66 36 58 28 C52 22 47 17 43 14 C40 12 38 11 36 11 C34 13 30 18 26 26 C20 38 12 48 4 52"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.35"
                className="text-verde"
              />
              <circle
                cx="68"
                cy="14"
                r="8"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
                opacity="0.6"
                className="text-rosa"
              />
            </svg>
            <h1 className="font-heading text-2xl font-semibold text-texto transition-colors group-hover:text-verde">
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
