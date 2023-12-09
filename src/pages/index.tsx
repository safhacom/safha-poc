// import AboutSection from "@/components/About-Us";
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

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <HeroSection />
      <AboutUs />
      <PropertyListings />
      <FeaturedProperties />
      <ServicesOffered />
      <NewsletterSubscription />
      <BlogSection />
      <Testimonials />
      <ContactForm />
      <Footer />

      {/* <Services />
      <Testimonials />
      <ContactusSection /> */}
    </>
  );
}
