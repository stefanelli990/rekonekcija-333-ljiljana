import { navLinks } from "../data";

export default function Menu({ isOpen, closeMenu  }) {
  return (
    <div
      className={`wrapper bg-white z-40 fixed inset-0 flex justify-center items-center text-center transition-all duration-300 sm:hidden ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <button
      
      className="flex justify-center items-center flex-col absolute right-4 top-9 gap-[8px] z-50 sm:hidden"
      aria-label="Close menu"
      onClick={closeMenu}
    >
      <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 bg-darkColor ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
      <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 bg-darkColor ${isOpen ? "opacity-0" : ""}`}></div>
      <div className={`w-8 h-[2px] rounded-full transition-transform duration-300 bg-darkColor ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
    </button>
      <nav>
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
