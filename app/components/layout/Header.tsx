"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Menu, X } from "lucide-react"; // For hamburger icon

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/joshuatuddenham/",
      icon: "/media/nav/linkedin-original.svg",
      label: "LinkedIn",
      id: "linkedin",
    },
    {
      href: "https://github.com/joshuaisaact",
      icon: "/media/nav/github.svg",
      label: "GitHub",
      id: "github",
    },
  ];

  return (
    <header className="sticky top-0 w-full bg-white dark:bg-[#333] z-[50]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <nav className="flex justify-between items-center py-6">
          <Link
            href="#top"
            className={`nav-link custom-nav-link transition-opacity duration-300 text-xl  font-medium dark:text-gray-200 ${
              hoveredLink && hoveredLink !== "home" ? "opacity-50" : ""
            }`}
            onMouseEnter={() => setHoveredLink("home")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Joshua Tuddenham
          </Link>

          <div className="flex gap-4 items-center md:hidden">
            {socialLinks.map(({ href, icon, label, id }) => (
              <Link
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-nav-link"
              >
                <Image
                  src={icon}
                  alt={label}
                  width={24} // Adjust size for better mobile usability
                  height={24} // Adjust size for better mobile usability
                  className={`nav-img ${id === "github" ? "dark:invert" : ""}`}
                />
              </Link>
            ))}
            <ThemeToggle /> {/* Increase size for better mobile usability */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`custom-nav-link md:text-lg transition-opacity duration-300 ${
                    hoveredLink && hoveredLink !== href ? "opacity-50" : ""
                  }`}
                  onMouseEnter={() => setHoveredLink(href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="flex gap-4 items-center">
              {" "}
              {/* Flex container for social links */}
              {socialLinks.map(({ href, icon, label, id }) => (
                <Link
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`custom-nav-link`}
                >
                  <Image
                    src={icon}
                    alt={label}
                    width={24}
                    height={24}
                    className={`nav-img ${id === "github" ? "dark:invert" : ""}`}
                  />
                </Link>
              ))}
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-full transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="bg-white dark:bg-[#333] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 custom-nav-link text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
