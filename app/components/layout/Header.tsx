"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
    <header className="sticky top-0 px-12 flex flex-col items-center w-full bg-white dark:bg-[#333] z-[3000]">
      <nav className="flex justify-between items-center w-full py-8 px-4 text-xl font-medium dark:text-gray-200">
        <Link
          href="/"
          className={`nav-link custom-nav-link transition-opacity duration-300 ${
            hoveredLink && hoveredLink !== "home" ? "opacity-50" : ""
          }`}
          onMouseEnter={() => setHoveredLink("home")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Joshua Tuddenham
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`custom-nav-link transition-opacity duration-300 ${
                  hoveredLink && hoveredLink !== href ? "opacity-50" : ""
                }`}
                onMouseEnter={() => setHoveredLink(href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {label}
              </Link>
            </li>
          ))}

          {socialLinks.map(({ href, icon, label, id }) => (
            <li key={id}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`custom-nav-link transition-opacity duration-300 ${
                  hoveredLink && hoveredLink !== id ? "opacity-50" : ""
                }`}
                onMouseEnter={() => setHoveredLink(id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Image
                  src={icon}
                  alt={label}
                  width={20}
                  height={20}
                  className={`nav-img ${id === "github" ? "dark:invert" : ""}`}
                />
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
