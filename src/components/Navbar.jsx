// Navbar jsx

import { navLinks } from "../data";

export default function Navbar({ navbarClasses, logoStyle, navLinkClasses, btnClasses, hamburgerClasses, openMenu, isOpen, scrolled }) {

  return (
    <header className={`inset-x-0 z-10 duration-300 ${navbarClasses} ${scrolled ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="wrapper flex justify-between items-center mx-auto py-4">
                <a href={"#hero"} className="cursor-pointer" aria-label="Go to Hero section">
                <img className="w-[75px]" src={logoStyle} alt="Rekonekcija 333 Ljiljana Logo"/>
                </a>
                <nav>
                <ul className={`hidden sm:flex space-x-6 items-center ${navLinkClasses}`}>
                    {navLinks.map((navLink, index) => (
                    <li key={index}>
                        <a
                        href={`#${navLink.to}`}
                        aria-label={navLink.ariaLabel}
                        className={`cursor-pointer  hover:text-primaryColor duration-200`}
                        >
                        {navLink.name}
                        </a>
                    </li>
                    ))}
                    <li>
                    <a href="tel:+381691162977" className={`btn ${btnClasses}`}>zakažite tretman</a>
                    </li>
                </ul>
                </nav>
                <button
            
                className="flex justify-center items-center flex-col absolute right-4 top-9 gap-[8px] z-50 sm:hidden"
                aria-label="Toggle menu"
                onClick={openMenu}
            >
                <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 ${hamburgerClasses} ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
                <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 ${hamburgerClasses} ${isOpen ? "opacity-0" : ""}`}></div>
                <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 ${hamburgerClasses} ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
            </button>
        </div>
    </header>
  )
}