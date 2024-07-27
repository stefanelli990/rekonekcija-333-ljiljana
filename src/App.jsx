import { HelmetProvider } from "react-helmet-async"
import Seo from "./components/Seo"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reconnection from "./components/Reconnection";
import Quote from "./components/Quote";
import Treatmants from "./components/Treatmants";
import Benefits from "./components/Benefits";
import About from "./components/About"
import Faq from "./components/Faq"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <HelmetProvider>
      <Seo 
      title="Rekonekcija 333 Ljiljana"
      description="Otkrijte transformativnu moć rekonekcijskog isceljivanja. Iskusite holističko zdravlje i duhovno poravnanje uz naše stručne praktičare. Istražite naše usluge, recenzije klijenata i rezervišite svoju seansu već danas za obnovljeni osećaj ravnoteže i harmonije."
      keywords="Rekonekcijsko isceljivanje, lična rekonekcija, holističko zdravlje, duhovno poravnanje, isceliteljske usluge"
      image="https://yourwebsite.com/path/to/your-image.jpg"
      url="https://yourwebsite.com"
      />
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
