import { ContactForm } from "../ui/ContactForm";
import { ContactLinks } from "../ui/ContactLinks";

export default function Contact() {
  return (
    <section
      className="pb-section"
      id="contact"
      aria-label="Contact Information"
    >
      <div className="space-y-8">
        <div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Looking to build something interesting, tackle a tricky technical challenge, or just want to chat about tech? I'm always open to exploring collaborations, discussing emerging technologies (especially in AI and Go!), or debating the finer points of system design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ContactForm />
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}
