import AboutUs from "@/components/AboutUs";
// import LocationSection from "@/components/Location";
import ContactForm from "@/components/Contactform";
import Home2 from "@/components/Home";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import NavigationHeader from "@/components/Navigationheader";
import Gallery from "@/components/Gallery";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footerwithlinks";
export default function Home() {
  return (
    <>
      <NavigationHeader />
      <Hero />
      <AboutUs />
      <Home2 />
      <SpecialOffers />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
