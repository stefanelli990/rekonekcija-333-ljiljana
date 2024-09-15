import { useState } from "react";
import { navLinks } from "../data";

export default function Menu({ scroll }) {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        className="flex justify-center items-center flex-col fixed right-4 top-9 gap-[8px] z-20 sm:hidden"
        aria-label="Toggle menu"
      >
        <div
          className={`w-8 h-[2px] rounded-full transition-transform duration-300 ${
            scroll || menuVisible ? "bg-darkColor" : "bg-white"
          } ${menuVisible ? "rotate-45 translate-y-2.5" : ""}`}
        ></div>
        <div
          className={`w-8 h-[2px] rounded-full transition-transform duration-300 ${
            scroll || menuVisible ? "bg-darkColor" : "bg-white"
          } ${menuVisible ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-8 h-[2px] rounded-full transition-transform duration-300 ${
            scroll || menuVisible ? "bg-darkColor" : "bg-white"
          } ${menuVisible ? "-rotate-45 -translate-y-2.5" : ""}`}
        ></div>
      </button>
      <div
        className={`wrapper bg-white fixed inset-0 flex justify-center items-center text-center transition-all duration-300 sm:hidden ${
          menuVisible ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav>
          <ul className="space-y-8 text-3xl font-normal">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a
                  href={`#${navLink.to}`}
                  onClick={() => setMenuVisible(false)}
                  aria-label={navLink.ariaLabel}
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
