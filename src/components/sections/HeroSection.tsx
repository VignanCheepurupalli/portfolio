import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-16">
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* Text Content */}
      <div>
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
      
      {/* Profile Image */}
      <FadeIn delay={0.2}>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-tr 
            from-black/30 via-transparent to-transparent 
            dark:from-blue-500/40 dark:via-purple-500/20 
            blur-2xl opacity-80" />
            
            <img
              src="/profile.jpg"
              alt="Profile"
              className="relative w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl border border-border shadow-lg"
            />
          </div>
        </div>
      </FadeIn>

    </div>
  </section>
);

export default HeroSection;
