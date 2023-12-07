// import AboutSection from "@/components/About-Us";
// import ContactusSection from "@/components/Contact-Us";
import AboutUs from "@/components/AboutUs"
import Benefits from "@/components/Benefits"
import Features from "@/components/Features"
import Hero from "@/components/HeroSection-component"
import Header from "@/components/Navigation-header-component"
import Pricing from "@/components/Pricing"
import Products from "@/components/Products"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <Header />
      <Hero backgroundImageSrc="/ai-background.png" />
      <AboutUs />
      <Features />
      <Benefits />
      <Products />
      <Testimonials />
      <Pricing />

      {/* <Services />
      <Testimonials />
      <ContactusSection /> */}
    </>
  )
}
