import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const AboutSection = () => (
  <section id="about" className="py-24 sm:py-32">
    <div className="container">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-8">
          About
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-muted-foreground leading-relaxed max-w-2xl text-base sm:text-lg">
          {siteConfig.about}
        </p>
      </FadeIn>
    </div>
  </section>
);

export default AboutSection;
