import AboutSection from "@/components/AboutUs";
import ChefSpecials from "@/components/Chef'sSpecials";
import ContactForm from "@/components/Contactform";
import EventsSection from "@/components/Events";
import FeaturedDishes from "@/components/FeaturedDishes";
import GallerySection from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/Location";
import MenuHighlights from "@/components/MenuHighlights";
import NavigationHeader from "@/components/Navigationheader";
import Reservation from "@/components/Reservation";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Footer from "@/components/Footerwithlinks";
export default function Home() {
  return (
    <>
      <NavigationHeader />
      <Hero />
      <AboutSection />
      <FeaturedDishes />
      <MenuHighlights />
      <ChefSpecials />
      <Testimonials />
      <Reservation />
      <GallerySection />
      <EventsSection />
      <LocationSection />
      <SocialMediaLinks />
      <ContactForm />
      <Footer />
      {/* <Services />
      <Testimonials />
      <ContactusSection /> */}
    </>
  );
}
