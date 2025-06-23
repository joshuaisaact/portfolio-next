import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";
import { jakarta } from "@/lib/fonts";

import Header from "./components/navigation/NavBar";
import { ThemeProvider } from "next-themes";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: {
      default: SITE_CONFIG.title,
      template: `%s | ${SITE_CONFIG.title}`,
    },
    description: SITE_CONFIG.description, // Remove the %s template
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.title,
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: SITE_CONFIG.title,
      template: `%s | ${SITE_CONFIG.title}`,
    },
    description: SITE_CONFIG.description, // Remove the %s template
  },
  icons: SITE_CONFIG.icons,
};

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

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.className} min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900`}
      >
        <div
          className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0_/_0.03)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255_/_0.03)_1px,transparent_0)] pointer-events-none"
          aria-hidden="true"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
