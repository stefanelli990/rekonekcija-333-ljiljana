import { Link } from "react-router-dom"
import heroVideo from '../assets/hero-video.mp4'
import wavyVector from '../assets/wavy-vector.svg'

export default function Hero() {
  return (
    <section id="hero-section" className="relative">
        <video autoPlay muted loop id="myVideo" className="absolute inset-0 w-full h-full object-cover -z-[2]">
            <source src={heroVideo} type="video/mp4"/>
        </video>
        <div className="bg-black/50 absolute inset-0 -z-[1]"></div>
        <div className="wrapper flex items-center justify-between  text-white">
            <div className="max-w-[550px] pt-[200px] ">
                <h1>Otkrijte Moć Rekonekcijskog Isceljenja</h1>
                <p className="my-6">Uz pomoć rekonekcijskog isceljivanja, otključajte svoj puni potencijal, obnovite unutrašnju energiju i postignite harmoniju u svakodnevnom životu.</p>
                <div>
                    <Link to='/portfolio' className="btn">Zakažite Tretman</Link>
                </div>
            </div>   
        </div>
        <img className="relative inset-x-0 -bottom-1 w-full" src={wavyVector} alt="Wavy vector" />
    </section>
  )
}