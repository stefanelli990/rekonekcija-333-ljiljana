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
      <Seo
        title="Rekonekcija 333 Ljiljana | Otkrijte Moć Rekonekcijskog Isceljenja"
        description="Otkrijte transformativnu moć rekonekcijskog isceljivanja i iskusite holističko zdravlje i duhovno blagostanje."
        author="Ljiljana Medović"
        keywords="rekonekcijsko isceljivanje, lična rekonekcija, isceljenje, rekonekcija, holističko zdravlje, duhovno poravnanje, isceliteljske usluge"
        image="https://rekonekcija333ljiljana.com/og-image.jpg"
        url="https://rekonekcija333ljiljana.com"
      />
      <Navbar />
      <main>
        <Hero />
        <Reconnection />
        <Quote />
        <Treatmants />
        <Benefits />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
