// MobileMenu.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { NavLink, SocialLink } from "@/types";

interface MobileMenuProps {
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}

export function MobileMenu({ navLinks, socialLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on navigation
  const handleClick = () => {
    setIsOpen(false);
  };

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-4">
        <div className="relative z-20">
          <ThemeToggle />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white/90 shadow-lg backdrop-blur-lg dark:bg-gray-900/90">
          <ul className="grid gap-2 px-4 py-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={handleClick}
                  locale={false}
                  className="block rounded-md px-4 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-2 grid grid-cols-3 gap-4 border-t border-gray-200 pt-4 dark:border-gray-800">
              {socialLinks.map(({ href, icon, label, id }) => (
                <Link
                  key={id}
                  href={href}
                  onClick={handleClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md bg-gray-100 py-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <Image
                    src={icon}
                    alt={label}
                    width={20}
                    height={20}
                    className={`${id === "github" ? "dark:invert" : ""}`}
                  />
                </Link>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
