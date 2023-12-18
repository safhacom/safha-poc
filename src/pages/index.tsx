import AboutUs from "@/components/AboutUs"
// import LocationSection from "@/components/Location";
import ContactForm from "@/components/Contactform"
import Footer from "@/components/Footerwithlinks"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import Home2 from "@/components/Home"
import NavigationHeader from "@/components/Navigationheader"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <Hero />
      <AboutUs />
      <Home2 />

      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
      {/* <Services />
      <Testimonials />
      <ContactusSection /> */}
    </>
  )
}
