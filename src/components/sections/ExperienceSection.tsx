import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const ExperienceSection = () => (
  <section id="experience" className="py-24 sm:py-32">
    <div className="container">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-12">
          Experience
        </h2>
      </FadeIn>

      <div className="space-y-10 max-w-2xl">
        {siteConfig.experience.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="relative pl-6 border-l border-border pb-8 hover:bg-muted/40 transition rounded-md px-4 py-3 -ml-4">
              {/* Timeline dot */}
              <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-foreground" />

              {/* Duration */}
              <p className="text-xs text-muted-foreground/70 mb-1">
                {exp.duration}
              </p>

              {/* Role */}
              <h3 className="text-lg font-semibold text-foreground">
                {exp.role}
              </h3>

              {/* Company + Location */}
              <p className="text-sm text-muted-foreground mb-2">
                {exp.company} • {exp.location}
              </p>

              {/* Bullet Points */}
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground leading-relaxed">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-muted px-2.5 py-1 rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;