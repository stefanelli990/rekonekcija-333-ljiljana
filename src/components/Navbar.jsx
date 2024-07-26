import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.svg";
import Menu from "../components/Menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { name: "Rekonekcija", to: "rekonekcija" },
    { name: "Tretmani", to: "tretmani" },
    { name: "O meni", to: "o-meni" },
    { name: "Kontakt", to: "kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 duration-300 ${
        scrolled ? "bg-white " : ""
      }`}
    >
      <div className="wrapper flex justify-between items-center mx-auto py-4">
        <ScrollLink to={"hero"}
        duration={800}
        smooth={true}
        className="cursor-pointer">
          <img
            className="w-[75px]"
            src={logo}
            alt="Rekonekcija 333 Ljiljana Logo"
          />
        </ScrollLink>
        <nav>
          <ul
            className={`hidden sm:flex space-x-4 font-normal ${
              scrolled ? "text-darkColor" : "text-white"
            }`}
          >
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <ScrollLink
                  to={navLink.to}
                  smooth={true}
                  duration={800}
                  className="cursor-pointer hover:text-primaryColor duration-200"
                >
                  {navLink.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
        <Menu scroll={scrolled} />
      </div>
    </header>
  );
}
