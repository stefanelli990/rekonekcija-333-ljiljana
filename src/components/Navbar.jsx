// Navbar jsx

import logoImg from '../../public/logo-white.svg';
import { navLinks } from "../data";

export default function Navbar({ openMenu, isOpen }) {

  return (
    <header className="absolute inset-x-0 z-10">
        <div className="wrapper flex justify-between items-center mx-auto py-4">
                <a href={"#hero"} className="cursor-pointer" aria-label="Go to Hero section">
                <img className="w-[75px]" src={logoImg} alt="Rekonekcija 333 Ljiljana Logo"/>
                </a>
                <nav>
                <ul className={`hidden sm:flex space-x-6 items-center`}>
                    {navLinks.map((navLink, index) => (
                    <li key={index}>
                        <a
                        href={`#${navLink.to}`}
                        aria-label={navLink.ariaLabel}
                        className="cursor-pointer text-white hover:text-primaryColor duration-200"
                        >
                        {navLink.name}
                        </a>
                    </li>
                    ))}
                    <li>
                    <a href="tel:+381691162977" className="btn btn-outline">zakažite tretman</a>
                    </li>
                </ul>
                </nav>
                <button
            
                className="flex justify-center items-center flex-col absolute right-4 top-9 gap-[8px] z-50 sm:hidden"
                aria-label="Toggle menu"
                onClick={openMenu}
            >
                <div className={`w-8 h-[2px]  rounded-full transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2.5 bg-darkColor" : "bg-white"}`}></div>
                <div className={`w-8 h-[2px]  rounded-full transition-transform duration-300 ${isOpen ? "opacity-0 bg-darkColor" : "bg-white"}`}></div>
                <div className={`w-8 h-[2px]  rounded-full transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5 bg-darkColor" : "bg-white"}`}></div>
            </button>
        </div>
    </header>
  )
}