import { navLinks, socialLinks } from "@/lib/constants/navigationConstants";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-[50] bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo/Name */}
          <Link
            href="/"
            className="text-lg sm:text-xl font-medium tracking-tight hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 transition"
          >
            Joshua Tuddenham
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 py-2 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links & theme toggle */}
          <div className="hidden md:flex items-center gap-6">
            {socialLinks.map(({ href, icon, label, id }) => (
              <Link
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
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
            {/* <ThemeToggle /> */}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Hidden checkbox to control mobile menu */}
        <input type="checkbox" id="menu-toggle" className="hidden" />

        {/* Label for the hamburger icon */}
        <label
          htmlFor="menu-toggle"
          className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
        >
          <span className="block w-6 h-6">BURGER</span>
        </label>

        {/* Mobile Menu */}
        <div className="absolute inset-x-0 top-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg transform translate-y-2 transition-all duration-200">
          <ul className="space-y-4 px-4 py-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 text-base text-gray-600 dark:text-gray-300"
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
