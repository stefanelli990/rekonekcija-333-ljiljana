import { FaInstagram } from "react-icons/fa"
import { RiFacebookFill } from "react-icons/ri"
import wavyVector2 from '../assets/wavy-vector-2.svg'

export default function Footer() {
    
  const currentYear = new Date().getFullYear()

  return (
    <footer>
        <img src={wavyVector2} alt="" className="relative inset-x-0 w-full" />
        <div className="bg-offWhite1">
        <div className="flex justify-center items-center text-center flex-col gap-6 px-0 pt-6 lg:pt-0 pb-10 font-normal">
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