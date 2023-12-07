// import AboutSection from "@/components/About-Us";
// import ContactusSection from "@/components/Contact-Us";
import Header from "@/components/Navigation-header-component";
import Hero from "@/components/HeroSection-component";
import Aboutus from "@/components/About-US";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/testimonials";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <Hero backgroundImageSrc="/ai-background.png" />
      <Aboutus />
      <Features />
      <Benefits />
      <Products />
      <Testimonials />
      <Pricing />

      {/* <Services />
      <Testimonials />
      <ContactusSection /> */}
    </>
  );
}
