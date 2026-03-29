import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const HeroSection = () => (
  <section className="
    min-h-[60vh] 
    sm:min-h-[70vh] 
    lg:min-h-screen 
    flex items-center 
    pt-20 sm:pt-24 lg:pt-0 
    pb-10 sm:pb-12 lg:pb-0
  ">
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 
    grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">

      {/* Text Content */}
      <div className="text-center lg:text-left">
        
        <FadeIn>
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            {siteConfig.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold tracking-tight text-foreground leading-tight 
          max-w-md sm:max-w-lg mx-auto lg:mx-0">
            {siteConfig.tagline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg 
          text-muted-foreground max-w-md mx-auto lg:mx-0 
          leading-relaxed">
            {siteConfig.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="#projects"
            className="inline-block mt-6 sm:mt-8 text-sm font-medium 
            text-accent hover:underline underline-offset-4 
            transition-colors duration-200"
          >
            View Projects →
          </a>
        </FadeIn>
      </div>
      
      {/* Profile Image */}
      <FadeIn delay={0.2}>
        <div className="flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0">
          <div className="relative">
            
            <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-tr 
            from-black/30 via-transparent to-transparent 
            dark:from-blue-500/40 dark:via-purple-500/20 
            blur-2xl opacity-80" />
            
            <img
              src="/profile.jpg"
              alt="Profile"
              className="relative 
              w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 
              object-cover rounded-2xl border border-border shadow-lg"
            />
          </div>
        </div>
      </FadeIn>

    </div>
  </section>
);

export default HeroSection;