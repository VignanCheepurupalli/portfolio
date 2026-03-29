import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const AboutSection = () => (
  <section id="about" className="py-12 sm:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-6 sm:mb-8">
          About
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm sm:text-base md:text-lg">
          {siteConfig.about}
        </p>
      </FadeIn>

    </div>
  </section>
);

export default AboutSection;