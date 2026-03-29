import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />

    <main className="px-4 sm:px-6 lg:px-8">
      
      {/* HERO (full width feel, but still padded) */}
      <HeroSection />

      {/* CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto space-y-14 sm:space-y-20 lg:space-y-24">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>

    </main>

    <Footer />
  </>
);

export default Index;