import type { Metadata } from "next";
import "../styles/globals.css";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";
import { jakarta } from "@/lib/fonts";

import { Providers } from "./components/Providers";
import Link from "next/link";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.title,
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  icons: SITE_CONFIG.icons,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.className} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
