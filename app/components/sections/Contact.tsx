"use client";

import { useState } from "react";
import { ContactForm } from "../ui/ContactForm";
import Image from "next/image";

export function Contact() {
  return (
    <section className="py-20 pb-section" id="contact">
      <h2 className="text-center p-4 underline decoration-[var(--theme-1)] decoration-2 underline-offset-2 text-3xl">
        Contact
      </h2>

      <div className="contact-container grid grid-cols-2 p-8">
        <ContactForm />

        <section className="contact-info ml-auto space-y-8">
          <div className="contact-line flex items-center gap-4">
            <Image
              src="/media/nav/email.png"
              alt="email"
              width={20}
              height={20}
              className="dark:invert"
            />
            <a
              href="mailto:joshuaisaact@gmail.com"
              className="hover:underline decoration-[var(--theme-1)]"
            >
              joshuaisaact@gmail.com
            </a>
          </div>

          <div className="contact-line flex items-center gap-4">
            <Image
              src="/media/skills/github.svg"
              alt="github"
              width={20}
              height={20}
              className="dark:invert"
            />
            <a
              href="https://github.com/joshuaisaact"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-[var(--theme-1)]"
            >
              github.com/joshuaisaact
            </a>
          </div>

          <div className="contact-line flex items-center gap-4">
            <Image
              src="/media/nav/linkedin-original.svg"
              alt="linkedin"
              width={20}
              height={20}
              className="dark:invert"
            />
            <a
              href="https://www.linkedin.com/in/joshuatuddenham/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-[var(--theme-1)]"
            >
              linkedin.com/in/joshuatuddenham
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
