// App.jsx

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Treatmants from "./components/Treatmants";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Counter from "./components/Counter";
import Cta from "./components/Cta";
import Connect from "./components/Connect";
import Navbar from "./components/Navbar";


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

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
      {!scrolled && (
        <Navbar navbarClasses={'absolute'} logoStyle={'/logo-white.svg'} scrolled={true} navLinkClasses={'text-white'} btnClasses={'btn-outline'} hamburgerClasses={'bg-white'} openMenu={openMenu} isOpen={isMenuOpen}/>
      )}
      <Navbar navbarClasses={'fixed bg-offWhite shadow-navbar'} scrolled={scrolled} logoStyle={'/logo-primary.svg'} navLinkClasses={'text-darkColor'} btnClasses={'btn-primary'} hamburgerClasses={'bg-darkColor'} openMenu={openMenu} isOpen={isMenuOpen}/>
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
