import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import NavigationHeader from "@/components/Navigationheader";
import Footer from "@/components/Footerwithlinks";
import Gallery from "@/components/Gallery";
import LocationSection from "@/components/Location";
import ReservationSection from "@/components/Reservation";
import SpecialOffers from "@/components/SpecialOffers";
export default function Home() {
  return (
    <>
      <NavigationHeader />
      <Hero />
      <AboutUs />
      <Gallery />
      <LocationSection />
      <ReservationSection />
      <SpecialOffers />
      <ContactUs />
      <Footer />
    </>
  );
}
