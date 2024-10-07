import ctaImg from '../assets/cta-img.jpg';

export default function Cta() {
  return (
    <section>
        <div className="wrapper" >
          <div className="bg-primaryColor-light flex items-center flex-col md:flex-row-reverse rounded-[50px] overflow-hidden">
            <div className="md:w-1/2 p-8 lg:p-14 md:py-0 flex flex-col gap-6 items-start">
            <div className='lg:max-w-sm'>
            <h2 className=''><span className='font-bold text-primaryColor'>Zakažite</span> tretman već danas</h2>
            </div>
            <p>Vaše zdravlje i unutrašnji mir ne moraju da čekaju. Iskoristite priliku da se ponovo povežete sa svojom unutrašnjom energijom i vratite ravnotežu u svakodnevni život. Zakažite termin već danas i dozvolite da vam pomognem na putu ka rekonekcijskom isceljenju.</p>
            <a href="tel:+381641162977" className="btn btn-primary">Zakažite Termin</a>
            </div>
            <div className='aspect-square w-full md:w-1/2 md:h-[500px]'>
            <img className='object-cover w-full h-full' src={ctaImg}/>
            </div>
        </div>
        </div>
    </section>
  )
}