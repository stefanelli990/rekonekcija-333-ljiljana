import { FaInstagram } from "react-icons/fa"
import { RiFacebookFill } from "react-icons/ri"

export default function Footer() {
    
  const currentYear = new Date().getFullYear()

  return (
    <footer>
        <img src="/wavy-vector-2.svg" alt="" className="relative inset-x-0 w-full" />
        <div className="bg-offWhite1 py-8 lg:pt-0">
        <div className="flex justify-center items-center text-center flex-col gap-6 font-normal">
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/rekonekcija_ljiljana/" className="btn btn-social" target="_blank" aria-label="Visit Instagram page"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=100095531199276" className="btn btn-social" target="_blank" aria-label="Visit Facebook page"><RiFacebookFill /></a>
        </div>
        <p>&copy; {currentYear} Rekonekcija 333 Ljiljana. <br /> Developed by <a href="https://github.com/stefanelli990" target="_blank" className="text-primaryColor">stefanelli990</a></p>
        </div>
        </div>
    </footer>
  )
}