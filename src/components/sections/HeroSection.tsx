import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-16">
    <div className="container">
      <FadeIn>
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
          {siteConfig.title}
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-2xl">
          {siteConfig.tagline}
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
          {siteConfig.intro}
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <a
          href="#projects"
          className="inline-block mt-8 text-sm font-medium text-accent hover:underline underline-offset-4 transition-colors duration-200"
        >
          View Projects →
        </a>
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
