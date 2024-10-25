"use client";

import { ContactForm } from "../ui/ContactForm";
import Image from "next/image";

export function Contact() {
  return (
    <section className="py-5 md:py-10 pb-section" id="contact">
      <h2 className="text-center p-4 underline decoration-[var(--theme-1)] decoration-2 underline-offset-2 text-3xl">
        Contact
      </h2>

      <div className="blog-grid grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto w-4/5 mt-6">
        {" "}
        <ContactForm />
        <section className="contact-info ml-auto space-y-8">
          <div className="contact-line flex items-center gap-4 pt-8">
            <a
              href="mailto:joshuaisaact@gmail.com"
              className="underline flex flex-row gap-4 decoration-[var(--theme-1)]"
            >
              <Image
                src="/media/nav/email.png"
                alt="email"
                width={20}
                height={20}
                className="dark:invert"
              />
              joshuaisaact@gmail.com
            </a>
          </div>

          <div className="contact-line flex items-center gap-4">
            <a
              href="https://github.com/joshuaisaact"
              target="_blank"
              rel="noopener noreferrer"
              className="underline flex flex-row gap-4 decoration-[var(--theme-1)]"
            >
              <Image
                src="/media/skills/github.svg"
                alt="github"
                width={20}
                height={20}
                className="dark:invert"
              />
              /joshuaisaact
            </a>
          </div>

          <div className="contact-line flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/joshuatuddenham/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline flex flex-row gap-4 decoration-[var(--theme-1)]"
            >
              <Image
                src="/media/nav/linkedin-original.svg"
                alt="linkedin"
                width={20}
                height={20}
              />
              /joshuatuddenham
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
