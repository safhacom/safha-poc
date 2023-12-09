import AboutSection from "@/components/About Us";
import HowItWorks from "@/components/How It Works";
import NavigationHeader from "@/components/Navigation header component";
import HeroSection from "@/components/HeroSection component";
import PropertySearch from "@/components/Property Search";
import LatestNews from "@/components/Latest News";
import ContactForm from "@/components/Contact Form";
import Testimonials from "@/components/Testimonials";
//import AgentsSection from "@/components/Agents Section";
import Footer from "@/components/Footer";
import FeaturedProperties from "@/components/Featured Properties";
//import NewsletterSubscription from "@/components/News";

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <HeroSection backgroundImage="/ai-background.png" />
      <AboutSection />
      <FeaturedProperties />
      <PropertySearch />
      <HowItWorks />
      <Testimonials />
      <LatestNews />
      <ContactForm />
      <Footer />
      {/* <Services />
      <Testimonials />
      <ContactusSection /> */}
    </>
  );
}
