import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Menu from "../components/Menu"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ['Rekonekcija', 'Tretmani', 'O meni', 'Kontakt'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-10 duration-300 ${scrolled ? 'sm:bg-white ' : ''}`}>
      <div className="wrapper flex justify-between items-center mx-auto py-4">
        <Link to="/">
          <img className='w-[75px]' src={logo} alt="Rekonekcija 333 Ljiljana Logo"/>
        </Link>
        <nav>
          <ul className={`hidden sm:flex space-x-4 font-normal ${scrolled ? 'text-darkColor' : 'text-white'}`}>
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link className="hover:text-primaryColor duration-200">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      <Menu/>
      </div>
    </header>
  );
}
