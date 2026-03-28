"use client";

import { Github, Linkedin, Mail, Copy } from "lucide-react";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
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

            {/* Email (Gmail) */}
            <div className="relative group">
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${siteConfig.email}&su=Let's%20Connect&body=Hi%20Vignan,%20I%20came%20across%20your%20portfolio%20and...`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>

              {/* Tooltip for Mail icon */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground text-background text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Send Email
              </span>
            </div>

            {/* Copy Email with Tooltip */}
            <div className="relative group">
              <button
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Copy Email"
              >
                <Copy size={20} />
              </button>

              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground text-background text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {copied ? "Copied!" : "Copy Email"}
              </span>
            </div>

            {/* GitHub */}
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            {/* LinkedIn */}
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
};

export default ContactSection;