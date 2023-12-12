import AboutUs from "@/components/AboutUs";
import LocationSection from "@/components/Location";
import ContactForm from "@/components/Contactform";
import GallerySection from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import NavigationHeader from "@/components/Navigationheader";
import ReservationSection from "@/components/Reservation";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footerwithlinks";
export default function Home() {
  return (
    <>
      <NavigationHeader />
      <Hero />
      <AboutUs />
      <SpecialOffers />
      <GallerySection />
      <Testimonials />
      <ReservationSection />
      <LocationSection />
      <ContactForm />
      <Footer />
    </>
  );
}
