import type { Icons } from "next/dist/lib/metadata/types/metadata-types";

export const SITE_CONFIG = {
  title: "Joshua Tuddenham | Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in modern web technologies. View my latest projects and blog posts.",
  url: "https://joshuatuddenham.com",
  locale: "en_GB",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: {
      url: "/apple-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  } satisfies Icons,
};
