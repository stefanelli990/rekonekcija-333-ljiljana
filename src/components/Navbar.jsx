import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { navLinks } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 duration-300 ${
        scrolled ? "bg-white shadow-navbar " : ""
      }`}
    >
      <div className="wrapper flex justify-between items-center mx-auto py-4">
        <a href={"#hero"}
        className="cursor-pointer"
        aria-label="Go to Hero section"
        >
          <img
            className="w-[75px]"
            src="/logo.svg"
            alt="Rekonekcija 333 Ljiljana Logo"
          />
        </a>
        <nav>
          <ul
            className={`hidden sm:flex space-x-4 font-normal ${
              scrolled ? "text-darkColor" : "text-white"
            }`}
          >
            {navLinks.map((navLink, index) => (
              <li key={index}>
              <a href={`#${navLink.to}`}
                 aria-label={navLink.ariaLabel}
                 className="cursor-pointer hover:text-primaryColor duration-200">
                {navLink.name}
              </a>
            </li>
            ))}
          </ul>
        </nav>
        <Menu scroll={scrolled} />
      </div>
    </header>
  );
}
