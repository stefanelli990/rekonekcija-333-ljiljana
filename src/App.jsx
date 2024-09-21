// App.jsx

import { useState, useEffect } from "react";
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
import Menu from "./components/Menu";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    const scrollPosition = window.scrollY;

    const handleScroll = () => {
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const scrollPosition = window.scrollY;
  
      // Check if the user has scrolled to within 100px from the end of the hero section
      if (scrollPosition >= heroHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu directly
  };

  return (
    <>
      <Navbar scrolled={scrolled} openMenu={openMenu} />
      <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
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
    </>
  );
}

export default App;
