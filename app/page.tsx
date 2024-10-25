import { Metadata } from "next";
import { AboutMe } from "./components/sections/AboutMe";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Roboto, Source_Serif_4 } from "next/font/google";
import { Contact } from "./components/sections/Contact";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  weight: ["200", "400", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Tuddenham | Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in modern web technologies. View my latest projects and blog posts.",
  openGraph: {
    title: "Joshua Tuddenham | Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in modern web technologies. View my latest projects and blog posts.",
    url: "https://joshuatuddenham.com",
    siteName: "Joshua Tuddenham",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joshua Tuddenham Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Tuddenham | Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in modern web technologies. View my latest projects and blog posts.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main
      id="top"
      className={`${roboto.className} ${sourceSerif4.className} flex min-h-screen flex-col items-center justify-between`}
    >
      {/* Hero Section */}
      <section id="hero" className="w-full">
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="w-full py-5 md:py-20 pb-section"
        aria-label="My technical skills"
      >
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full py-5 md:py-20 pb-section"
        aria-label="My portfolio projects"
      >
        <Projects />
      </section>

      {/* Blog Section */}
      {/* <section
        id="blog"
        className="w-full py-20 pb-section"
        aria-label="My blog posts"
      >
        <Blog />
      </section> */}

      {/* Contact Section */}

      <section
        id="contact"
        className="w-full py-5 md:py-20 pb-section"
        aria-label="Contact form"
      >
        <Contact />
      </section>
    </main>
  );
}
