import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reconnection from "./components/Reconnection";
import Quote from "./components/Quote";
import Treatmants from "./components/Treatmants";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Reconnection Healing</title>
        <meta
          name="description"
          content="Discover the transformative power of Reconnection Healing. Experience holistic wellness and spiritual alignment with our expert practitioners. Explore our services, client testimonials, and book your session today for a renewed sense of balance and harmony."
        />
      </Helmet>
      <Navbar />
      <Hero />
      <Reconnection />
      <Quote />
      <Treatmants />
      <Benefits />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </HelmetProvider>
  );
}

export default App;
