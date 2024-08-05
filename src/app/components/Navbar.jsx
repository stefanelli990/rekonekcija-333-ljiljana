"use client"

import { useState, useEffect } from "react"
import Menu from "../components/Menu"
import Image from "next/image"
import Link from "next/link"


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
        <Link href={'#hero'}
        className="cursor-pointer"
        aria-label="Go to Hero section"
        >
          <Image
          width="0"
          height="0"
          style={{ width: '75px', height: 'auto' }}
            src="/logo.svg"
            alt="Rekonekcija 333 Ljiljana Logo"
          />
        </Link>
        <nav>
          <ul
            className={`hidden sm:flex space-x-4 font-normal ${
              scrolled ? "text-darkColor" : "text-white"
            }`}
          >
            {navLinks.map((navLink, index) => (
              <li key={index}>
              <Link href={`#${navLink.to}`}
                 aria-label={navLink.ariaLabel}
                 className="cursor-pointer hover:text-primaryColor duration-200">
                {navLink.name}
              </Link>
            </li>
            ))}
          </ul>
        </nav>
        <Menu scroll={scrolled} />
      </div>
    </header>
  );
}
