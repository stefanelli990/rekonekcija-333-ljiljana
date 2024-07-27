import { FaInstagram } from "react-icons/fa"
import { RiFacebookFill } from "react-icons/ri"

export default function Footer() {
    
  const currentYear = new Date().getFullYear()

  return (
    <footer>
        <div className="wrapper">
        <div className="flex justify-between items-center text-center px-0 py-8 border-t border-e-gray-300 font-normal">
        <p>&copy; {currentYear} Rekonekcija 333 Ljiljana. Developed by <a href="https://github.com/stefanelli990" target="_blank" className="underline">stefanelli990</a></p>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/rekonekcija_ljiljana/" target="_blank" aria-label="Visit Instagram page"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=100095531199276" target="_blank" aria-label="Visit Facebook page"><RiFacebookFill /></a>
        </div>
        </div>
        </div>
    </footer>
  )
}