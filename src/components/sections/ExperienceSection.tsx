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
            <div className="relative pl-6 border-l-2 border-border">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-muted-foreground/40" />
              <p className="text-xs text-muted-foreground mb-1">{exp.duration}</p>
              <h3 className="text-base font-semibold text-foreground">
                {exp.role}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
