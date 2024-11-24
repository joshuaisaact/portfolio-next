import Image from "next/image";

const contactLinks = [
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
  {
    href: "https://bsky.app/profile/joshtuddenham.tech",
    icon: "/media/nav/bluesky.svg",
    label: "Bluesky Profile: joshuaisaac.bsky.social",
    text: "@joshtuddenham.tech",
    darkInvert: false,
  },
] as const;

export function ContactLinks() {
  return (
    <section aria-label="Contact Links">
      <div className="flex flex-col space-y-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Let&apos;s Connect
        </h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 lg:flex-col">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[var(--theme-1)] dark:hover:border-[var(--theme-1)] transition-colors"
              aria-label={link.label}
            >
              <Image
                src={link.icon}
                alt=""
                width={18}
                height={18}
                className={`${link.darkInvert ? "dark:invert" : ""} opacity-75 group-hover:opacity-100 transition-opacity`}
                sizes="18px"
                aria-hidden="true"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[var(--theme-1)] transition-colors">
                {link.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
