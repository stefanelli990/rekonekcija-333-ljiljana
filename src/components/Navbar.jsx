import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {

  const navLinks = ['Rekonekcija','Tretmani','O meni','Kontakt']
  
  return (
    <header className="fixed inset-x-0 top-0 z-10">
      <div className="wrapper flex justify-between items-center mx-auto py-4">
        <Link to="/">
          <img src={logo} alt="Rekonekcija 333 Ljiljana Logo" width={80} />
        </Link>
        <nav>
          <ul className="hidden md:flex space-x-4 font-normal text-white">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
