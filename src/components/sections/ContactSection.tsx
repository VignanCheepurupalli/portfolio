import { Github, Linkedin, Mail } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const ContactSection = () => (
  <section id="contact" className="py-24 sm:py-32">
    <div className="container">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">
          Get in Touch
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-muted-foreground mb-8 max-w-md">
          Interested in working together? Feel free to reach out.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default ContactSection;
