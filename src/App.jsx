import { HelmetProvider } from "react-helmet-async";
import Seo from "./components/Seo";
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

function App() {
  return (
    <HelmetProvider>
     
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
