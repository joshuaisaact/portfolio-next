import type { Metadata } from "next";
import "../styles/globals.css";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";
import { Header } from "./components/layout/Header";
import { BackToTop } from "./components/layout/BackToTop";
import { Footer } from "./components/layout/Footer";
import { Providers } from "./components/Providers";

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
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
          <BackToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
