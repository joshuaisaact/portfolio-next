import { navLinks, socialLinks } from "@/lib/constants/navigationConstants";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-[50] w-full backdrop-blur-lg">
      <div className="border-b border-gray-200 bg-white/80 dark:border-gray-800/50 dark:bg-gray-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-14 items-center justify-between ">
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
                    locale={false}
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

            {/* Mobile menu component */}
            <MobileMenu navLinks={navLinks} socialLinks={socialLinks} />
          </nav>
        </div>
      </div>
    </header>
  );
}
