import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/Contactform";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import NavigationHeader from "@/components/Navigationheader";
import SpecialOffers from "@/components/SpecialOffers";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footerwithlinks";
import Reservations from "@/components/Reservations";
export default function Home() {
  return (
    <>
      <NavigationHeader />
      <Hero />
      <AboutUs />
      <SpecialOffers />
      <Gallery />
      <Testimonials />
      <Reservations />
      <ContactForm />
      <Footer />
    </>
  );
}
