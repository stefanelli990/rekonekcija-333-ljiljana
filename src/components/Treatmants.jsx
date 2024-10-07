import { treatmants } from "../data";
import SectionTitle from "./SectionTitle";

export default function Treatmants() {

  return (
    <section id="tretmani">
        <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2><span className='font-bold text-primaryColor'>Tretmani</span> za vas</h2>
          <p>Svaki tretman se prilagođava vašim jedinstvenim potrebama, bilo da se radi o fizičkim, emocionalnim ili duhovnim izazovima. Kombinujemo različite metode isceljenja kako bismo adresirali sve aspekte vašeg bića, uključujući telo, um i duh.</p>
        </SectionTitle>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {treatmants.map((item, index) => (
                    <div key={index} className="bg-primaryColor-light rounded-[32px] flex flex-col items-start justify-between gap-4 px-5 py-6 md:p-8 ">
                        <h3 className="">{item.treatmantTitle}</h3>
                        <p>{item.treatmantDesc}</p>
                        <div>
                        <p className="font-semibold mb-4">{item.treatmantPrice}</p>
                        <button className="btn">Zakažite Tretman</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}