import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const ExperienceSection = () => (
  <section id="experience" className="py-12 sm:py-16">
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-8">
          Experience
        </h2>
      </FadeIn>

      <div className="space-y-6 sm:space-y-8 max-w-2xl">
        {siteConfig.experience.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="relative pl-5 sm:pl-6 border-l border-border 
            pb-5 sm:pb-6 hover:bg-muted/40 transition rounded-md px-3 sm:px-4 py-3 -ml-3 sm:-ml-4">
              
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-foreground" />

              {/* Duration */}
              <p className="text-xs text-muted-foreground/70 mb-1">
                {exp.duration}
              </p>

              {/* Role */}
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
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
                    className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
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