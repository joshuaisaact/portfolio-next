"use client";

import { ContactForm } from "../ui/ContactForm";
import Image from "next/image";

export function Contact() {
  return (
    <section
      className="pb-section"
      id="contact"
      aria-label="Contact Information"
    >
      <div className="space-y-8">
        <div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Looking to build something interesting? I&apos;m always open to
            discussing new opportunities, technical challenges, or the perfect
            state management pattern.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          <ContactForm />
          <section
            className="space-y-6 lg:space-y-8"
            aria-label="Contact Links"
          >
            {[
              {
                href: "mailto:joshuaisaact@gmail.com",
                icon: "/media/nav/email.png",
                label: "Email: joshuaisaact@gmail.com",
                text: "joshuaisaact@gmail.com",
                darkInvert: true,
              },
              {
                href: "https://github.com/joshuaisaact",
                icon: "/media/skills/github.svg",
                label: "GitHub Profile: joshuaisaact",
                text: "joshuaisaact",
                darkInvert: true,
              },
              {
                href: "https://www.linkedin.com/in/joshuatuddenham/",
                icon: "/media/nav/linkedin-original.svg",
                label: "LinkedIn Profile: joshuatuddenham",
                text: "joshuatuddenham",
                darkInvert: false,
              },
            ].map((link) => (
              <div key={link.href} className="flex items-center gap-4">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4 hover:text-[var(--theme-1)] transition-colors"
                  aria-label={link.label}
                >
                  <Image
                    src={link.icon}
                    alt=""
                    width={20}
                    height={20}
                    className={`${link.darkInvert ? "dark:invert" : ""} opacity-75 group-hover:opacity-100 transition-opacity`}
                    sizes="20px"
                    aria-hidden="true"
                  />
                  <span className="underline decoration-[var(--theme-1)]">
                    {link.text}
                  </span>
                </a>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
