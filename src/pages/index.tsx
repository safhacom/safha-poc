import AboutSection from "@/components/AboutSection"
import BlogSection from "@/components/BlogSection"
import FooterSection from "@/components/FooterSection"
import HeroSection from "@/components/HeroSection"
import NavigationHeader from "@/components/NavigationHeader"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
  return (
    <>
      <NavigationHeader />
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
  )
}
