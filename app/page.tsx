import { Suspense } from "react";
import { AboutMe } from "./components/sections/AboutMe";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { Blog } from "./components/sections/Blog";
import { Section } from "./components/ui/Section";
import { SectionSkeleton } from "./components/ui/SectionSkeleton";
import { siteMetadata } from "@/lib/metadata";
import { PROJECTS } from "@/lib/constants/projectConstants";

export const dynamic = "force-static";
export const preferredRegion = "auto";
export const metadata = siteMetadata;

const applicationProjects = PROJECTS.filter(p => !p.projectType || p.projectType === 'application');
const utilityProjects = PROJECTS.filter(p => ['tool', 'library', 'starter'].includes(p.projectType || ''));

const featuredApplicationsIntro = "I'm passionate about building and continuously exploring new technologies. This section highlights some of my recent user-facing applications, from AI-powered platforms to award-winning hackathon entries.";
const devToolsIntro = "Beyond full applications, I also enjoy creating tools and starter kits that streamline development and explore specific technologies. Here are some of my contributions to the developer ecosystem.";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white dark:focus:bg-gray-900 focus:text-blue-600"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8"
        role="main"
      >
        {/* Hero Section */}
        <section
          className="relative py-8 sm:py-12 border-t border-gray-200 dark:border-gray-800"
          aria-label="Introduction"
        >
          <AboutMe />
        </section>

        {/* Skills Section */}
        <Suspense fallback={<SectionSkeleton height="md" />}>
          <Section id="skills" title="Skills">
            <Skills />
          </Section>
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={<SectionSkeleton height="xl" />}>
          <Section id="projects" title="Featured Applications">
            <Projects projects={applicationProjects} introText={featuredApplicationsIntro} />
          </Section>
        </Suspense>


        {utilityProjects.length > 0 && (
          <Suspense fallback={<SectionSkeleton height="md" />}>
            <Section id="dev-tools" title="Developer Tools & Utilities">
              <Projects projects={utilityProjects} introText={devToolsIntro} cardType="minimal" />
            </Section>
          </Suspense>
        )}

        {/* Blog Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <Section id="blog" title="Blog">
            <Blog />
          </Section>
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<SectionSkeleton height="sm" />}>
          <Section id="contact" title="Contact">
            <Contact />
          </Section>
        </Suspense>
      </main>
    </>
  );
}
