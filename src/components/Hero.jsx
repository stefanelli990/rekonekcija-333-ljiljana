import heroBg from '../assets/hero-bg.webp';

export default function Hero() {
  return (
    <section id="hero" className="relative">
        <img className='absolute inset-0 w-full h-full object-cover -z-[2]' src={heroBg} alt="" />
        <div className="bg-black/35 absolute inset-0 -z-[1]"></div>
        <div className="wrapper flex items-center min-h-screen text-white ">
            <div className="max-w-[400px] sm:max-w-[550px] sm:pt-[150px] sm:pb-[60px]">
                <h1>Otkrijte <span className='text-primaryColor font-bold'>Moć</span> Rekonekcijskog Isceljenja</h1>
                <p className="my-6">Uz pomoć rekonekcijskog Isceljenja, otključajte svoj puni potencijal, obnovite unutrašnju energiju i postignite harmoniju u svakodnevnom životu.</p>
                <div>
                    <a href="tel:+381691162977" className="btn btn-primary">Zakažite Tretman</a>
                </div>
            </div>   
        </div>
    </section>
  )
}