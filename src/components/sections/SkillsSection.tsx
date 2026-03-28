import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const SkillsSection = () => (
  <section id="skills" className="py-24 sm:py-32">
    <div className="container">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-12">
          Skills
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {siteConfig.skills.map((skill, i) => (
          <FadeIn key={skill} delay={i * 0.03}>
            <div className="text-sm text-muted-foreground px-4 py-3 rounded-lg border border-border hover:border-muted-foreground/30 hover:text-foreground transition-colors duration-200 text-center">
              {skill}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
