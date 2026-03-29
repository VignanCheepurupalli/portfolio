import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const SkillsSection = () => (
  <section id="skills" className="py-12 sm:py-16">
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-8">
          Skills
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {siteConfig.skills.map((skill, i) => (
          <FadeIn key={skill} delay={i * 0.03}>
            <div className="text-xs sm:text-sm text-muted-foreground 
            px-3 sm:px-4 py-2 sm:py-3 
            rounded-lg border border-border 
            hover:border-muted-foreground/30 hover:text-foreground 
            transition-colors duration-200 text-center">
              {skill}
            </div>
          </FadeIn>
        ))}
      </div>

    </div>
  </section>
);

export default SkillsSection;