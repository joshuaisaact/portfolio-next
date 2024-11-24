import { Metadata, Viewport } from "next";
import { siteInfo } from "./site-info";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const siteMetadata: Metadata = {
  // Base metadata
  metadataBase: new URL(siteInfo.url),
  title: siteInfo.title,
  description: siteInfo.description,

  // Basic metadata
  applicationName: siteInfo.name,
  authors: [{ name: "Josh Tuddenham" }],
  generator: "Next.js",
  keywords: [
    "Full-Stack Engineer",
    "Software Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Enterprise Software",
    "Capital Markets Technology",
    "Web Development",
    "JavaScript",
    "Next.js",
  ],
  referrer: "origin-when-cross-origin",

  // Icons and manifest
  icons: {
    icon: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/shortcut-icon.png"],
  },
  manifest: "/manifest.json",

  // Open Graph metadata
  openGraph: {
    title: siteInfo.title,
    description: siteInfo.description,
    url: siteInfo.url,
    siteName: siteInfo.name,
    images: [
      {
        url: siteInfo.image,
        width: 1200,
        height: 630,
        alt: "Josh Tuddenham Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: siteInfo.title,
    description: siteInfo.description,
    images: [siteInfo.image],
  },

  // Robots and verification
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Category and classification
  category: "technology",

  // Publisher info for rich results
  publisher: siteInfo.name,
};
