import {
  NavBar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "@/features/portfolio/index";

const MainPage = () => {
  return (
    <div className="min-h-screen relative select-none">
      <div className="starfield" />
      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export { MainPage };
