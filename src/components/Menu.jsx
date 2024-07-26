import { Link as ScrollLink } from "react-scroll"
import { useState } from "react";

export default function Menu({ scroll }) {

  const navLinks = [
    { name: "Rekonekcija", to: "rekonekcija" },
    { name: "Tretmani", to: "tretmani" },
    { name: "O meni", to: "o-meni" },
    { name: "Kontakt", to: "kontakt" },
  ]

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        className="flex justify-center items-center flex-col fixed right-4 top-9 gap-[7px] z-20 sm:hidden"
        aria-label="Toggle menu"
      >
        <div
          className={`w-8 h-[3px] rounded-full transition-transform duration-300 ${
            scroll || menuVisible ? "bg-darkColor" : "bg-white"
          } ${menuVisible ? "rotate-45 translate-y-2.5" : ""}`}
        ></div>
        <div
          className={`w-8 h-[3px] rounded-full transition-transform duration-300 ${
            scroll || menuVisible ? "bg-darkColor" : "bg-white"
          } ${menuVisible ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-8 h-[3px] rounded-full transition-transform duration-300 ${
            scroll || menuVisible ? "bg-darkColor" : "bg-white"
          } ${menuVisible ? "-rotate-45 -translate-y-2.5" : ""}`}
        ></div>
      </button>
      <div
        className={`wrapper bg-white fixed inset-0 flex justify-center items-center text-center transition-all duration-300 ${
          menuVisible ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav>
          <ul className="space-y-8 text-3xl font-normal">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <ScrollLink
                  to={navLink.to}
                  smooth={true}
                  duration={800}
                  onClick={() => setMenuVisible(false)}
                  offset={-50}
                >
                  {navLink.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
