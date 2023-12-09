// import AboutSection from "@/components/About-Us";
<<<<<<< HEAD
import BlogSection from "@/components/Latest News and Blog Posts";
import NavigationHeader from "@/components/Navigation header component";
import HeroSection from "@/components/HeroSection component";
import AboutUs from "@/components/About Us";
import PropertyListings from "@/components/Property Listings";
import ContactForm from "@/components/Contact Information";
import Testimonials from "@/components/Testimonials";
import ServicesOffered from "@/components/Services Offered";
import Footer from "@/components/Footer with Legal Information";
import FeaturedProperties from "@/components/Featured Properties";
import NewsletterSubscription from "@/components/Newsletter Subscription";
=======
// import ContactusSection from "@/components/Contact-Us";
import AboutUs from "@/components/AboutUs"
import Benefits from "@/components/Benefits"
import Features from "@/components/Features"
import Hero from "@/components/HeroSection-component"
import Header from "@/components/Navigation-header-component"
import Pricing from "@/components/Pricing"
import Products from "@/components/Products"
import Testimonials from "@/components/Testimonials"
>>>>>>> 575822283b2ad42572ed4deb253d745ea924919d

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <NavigationHeader />
      <HeroSection />
      <AboutUs />
      <PropertyListings />
      <FeaturedProperties />
      <ServicesOffered />
      <NewsletterSubscription />
      <BlogSection />
=======
      <Header />
      <Hero backgroundImageSrc="/ai-background.png" />
      <AboutUs />
      <Features />
      <Benefits />
      <Products />
>>>>>>> 575822283b2ad42572ed4deb253d745ea924919d
      <Testimonials />
      <ContactForm />
      <Footer />

      {/* <Services />
      <Testimonials />
      <ContactusSection /> */}
    </>
  )
}
