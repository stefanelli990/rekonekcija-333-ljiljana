import heroBg from '../assets/hero-bg.webp';
import wavyVector from '../assets/wavy-vector.svg';

export default function Hero() {
  return (
    <section id="hero" className="relative">
        <img className='absolute inset-0 w-full h-full object-cover -z-[2]' src={heroBg} alt="" />
        <div className="bg-black/35 absolute inset-0 -z-[1]"></div>
        <div className="wrapper flex items-center justify-between  text-white">
            <div className="max-w-[550px] pt-[150px] pb-[75px]">
                <h1>Otkrijte <span className='text-primaryColor font-bold'>Moć</span> Rekonekcijskog Isceljenja</h1>
                <p className="my-6">Uz pomoć rekonekcijskog Isceljenja, otključajte svoj puni potencijal, obnovite unutrašnju energiju i postignite harmoniju u svakodnevnom životu.</p>
                <div>
                    <a href="tel:+381691162977" className="btn">Zakažite Tretman</a>
                </div>
            </div>   
        </div>
        <img className="relative inset-x-0 -bottom-[1px] w-full" src={wavyVector} alt='Wavy vector'/>
    </section>
  )
}