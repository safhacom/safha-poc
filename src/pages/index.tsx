import AboutSection from "@/components/AboutSection"
import BlogSection from "@/components/BlogSection"
import FooterSection from "@/components/FooterSection"
import HeaderSection from "@/components/HeaderSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <FooterSection />
    </>
  )
}
