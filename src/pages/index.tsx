import AboutSection from "@/components/About-Us";
import ContactusSection from "@/components/Contact-Us";
import HomeSection from "@/components/Home";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HomeSection />
      <HeroSection backgroundImageSrc="/ai-background.png" />
      <AboutSection
        title="About Me"
        description="I'm a professional developer with a passion for creating modern, elegant, and user-friendly applications."
        imageUrl="/about.png"
      />
      <ProjectsSection />
      <BlogSection />
      <FooterSection />
    </>
  );
}
