import { navLinks, socialLinks } from "@/lib/constants/navigationConstants";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-[50] w-full backdrop-blur-lg">
      <div className="border-b border-gray-200 bg-white/80 dark:border-gray-800/50 dark:bg-gray-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between sm:h-20">
            <Link
              href="/"
              className="text-lg font-medium tracking-tight text-gray-900 transition-colors hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300 sm:text-xl"
            >
              Joshua Tuddenham
            </Link>

            {/* Desktop navigation */}
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social links & theme toggle */}
            <div className="hidden items-center gap-6 md:flex">
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
                    className={`${
                      id === "github" ? "dark:invert" : ""
                    } opacity-80 transition-opacity hover:opacity-100`}
                  />
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              <div className="relative z-20">
                <ThemeToggle />
              </div>
              <label
                htmlFor="menu-toggle"
                className="cursor-pointer rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
              >
                <Menu className="h-5 w-5" />
              </label>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu - CSS only implementation */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />
      <div className="absolute -z-10 w-full bg-white/90 opacity-0 shadow-lg backdrop-blur-lg transition-all duration-200 peer-checked:z-0 peer-checked:translate-y-0 peer-checked:opacity-100 dark:bg-gray-900/90 md:hidden">
        <ul className="grid gap-2 px-4 py-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
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
    </header>
  );
}
