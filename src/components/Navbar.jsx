"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Optional for active link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // for active link

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-primary z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo/logo.png"
            alt="Masjid Logo"
            width={110}
            height={100}
            priority
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden focus:outline-none transition-transform duration-200"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Menu */}
        <nav
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden lg:overflow-visible lg:opacity-100 lg:max-h-none lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto mt-4 lg:mt-0 text-white`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 lg:px-0 lg:py-0 text-lg font-semibold transition hover:text-secondary ${
                    pathname === item.href ? "text-secondary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Donate Button */}
          <div className="mt-4 lg:mt-0 lg:ml-6">
            <Link
              href="#donate"
              className="inline-block px-5 py-2 bg-secondary text-dark font-semibold rounded hover:opacity-90 transition"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
