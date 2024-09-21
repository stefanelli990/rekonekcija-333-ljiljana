// Navbar.jsx

import { useState, useEffect } from "react";
import { navLinks } from "../data";
import { motion } from "framer-motion";

export default function Navbar({ scrolled, openMenu }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "hero") {
              setActiveSection("");
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroSection) observer.observe(heroSection);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.to);
      if (section) observer.observe(section);
    });

    return () => {
      if (heroSection) observer.unobserve(heroSection);
      navLinks.forEach((link) => {
        const section = document.getElementById(link.to);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.header
      animate={{ y: scrolled ? 90.5 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`inset-x-0 z-10 ${scrolled ? "bg-white shadow-navbar fixed -top-[90.5px]" : "absolute"}`}
    >
      <div className="wrapper flex justify-between items-center mx-auto py-4">
        <a href={"#hero"} className="cursor-pointer" aria-label="Go to Hero section">
          <img className="w-[75px]" src="/logo.svg" alt="Rekonekcija 333 Ljiljana Logo" />
        </a>
        <nav>
          <ul className={`hidden sm:flex space-x-4 ${scrolled ? "text-darkColor" : "text-white"}`}>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a
                  href={`#${navLink.to}`}
                  aria-label={navLink.ariaLabel}
                  className={`cursor-pointer ${
                    activeSection === navLink.to ? "text-primaryColor " : ""
                  }`}
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
      
        className="flex justify-center items-center flex-col absolute right-4 top-9 gap-[8px] z-50 sm:hidden"
        aria-label="Toggle menu"
        onClick={openMenu}
      >
        <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 ${scrolled ? 'bg-darkColor' : 'bg-white'} ${!openMenu ? "rotate-45 translate-y-2.5" : ""}`}></div>
        <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 ${scrolled ? 'bg-darkColor' : 'bg-white'} ${!openMenu ? "opacity-0" : ""}`}></div>
        <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 ${scrolled ? 'bg-darkColor' : 'bg-white'} ${!openMenu ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
      </button>
      </div>
    </motion.header>
  );
}
