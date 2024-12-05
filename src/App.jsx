// App.jsx

import { useState } from "react";
import Hero from "./components/Hero";
import Treatmants from "./components/Treatmants";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Counter from "./components/Counter";
import Cta from "./components/Cta";
import Connect from "./components/Connect";
import Navbar from "./components/Navbar";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // open menu
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };
  // close menu
  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <>
      <Navbar openMenu={openMenu} isOpen={isMenuOpen}/>
      <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
      <main>
        <Hero />
        <Counter/>
        <Treatmants />
        <Benefits />
        <About />
        <Faq />
        <Cta/>
        <Contact />
        <Connect/>
      </main>
      <Footer />
    </>
  );
}

export default App;
