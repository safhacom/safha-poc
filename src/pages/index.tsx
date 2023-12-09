import AboutSection from "@/components/AboutSection"
import FooterSection from "@/components/FooterSection"
import HeaderSection from "@/components/HeaderSection"
import HeroSection from "@/components/HeroSection"
import PricingSection from "@/components/PricingSection"
import ProjectsSection from "@/components/ProjectsSection"
import ServicesSection from "@/components/ServicesSection"

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <PricingSection />
      <FooterSection />
    </>
  )
}
