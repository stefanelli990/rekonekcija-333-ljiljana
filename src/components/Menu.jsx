import { navLinks } from "../data";

export default function Menu({ isOpen, closeMenu  }) {
  return (
    <div
      className={`wrapper bg-white z-40 fixed inset-0 text-center transition-all duration-300 sm:hidden ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="flex justify-between mt-4">
      <a href={"#hero"}>
        <img className="w-[75px]" src='/logo-primary.svg' alt="Rekonekcija 333 Ljiljana Logo" />
      </a>
      <button
      
      className="flex justify-center items-center flex-col relative gap-[8px] z-50 sm:hidden"
      aria-label="Close menu"
      onClick={closeMenu}
    >
      <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 bg-darkColor ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
      <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 bg-darkColor ${isOpen ? "opacity-0" : ""}`}></div>
      <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 bg-darkColor ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
    </button>
      </div>
      <nav className="min-h-[calc(100vh-75px)] flex justify-center items-center">
        <ul className="space-y-8 text-xl">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a href={`#${navLink.to}`} onClick={closeMenu} aria-label={navLink.ariaLabel}>
                {navLink.name}
              </a>
            </li>
          ))}
          <li>
            <a href="tel:+381691162977" className="btn">Zakažite Tretman</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
