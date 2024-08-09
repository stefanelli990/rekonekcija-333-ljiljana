export default function Treatmants() {

    const treatmants = [
        { treatmantTitle: 'Rekonekcijsko isceljivanje', treatmantDesc: 'Rekonekcijsko isceljivanje uklanja energetske blokade koje su se formirale tokom života, počevši od najranijeg detinjstva. Ovaj proces se izvodi u prisustvu ili na daljinu kroz tri sesije koje se održavaju tri dana za redom. Svaka sesija je jedinstvena, sa svakim danom idemo sve dublje u proces isceljivanja.', treatmantPrice: 'Cena po jednoj sesiji je 40€'},
        { treatmantTitle: 'Lična rekonekcija', treatmantDesc: 'Lična rekonekcija omogućava duboko i direktno energetsko oslobađanje blokada koje su se nakupljale tokom vašeg života. Ova metoda se izvodi u prisustvu, što omogućava direktan kontakt i rad sa vašim energetskim poljem. Lična Rekonekcija se radi samo jednom u životu i isključivo u prisustvu klijenta i praktičara.', treatmantPrice: 'Cena lične rekonekcije je 333€'}
    ]
  return (
    <section id="tretmani">
        <div className="wrapper py-[75px] lg:py-[100px]">
            <h2 className="sm:mb-[50px] md:text-center">Tretmani za vas</h2>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                {treatmants.map((item, index) => (
                    <div key={index} className="bg-offWhite1 px-8 py-10 odd:rounded-t-[50px] even:rounded-b-[50px] md:odd:rounded-t-none md:odd:rounded-tl-[50px] md:odd:rounded-bl-[50px] md:even:rounded-b-none md:even:rounded-r-[50px] md:odd:text-right flex-1 flex flex-col justify-between border border-offWhite1 hover:border-primaryColor duration-100 cursor-pointer">
                        <div>
                            <h3>{item.treatmantTitle}</h3>
                            <p className="my-4">{item.treatmantDesc}</p>
                        </div>
                        <p className="text-lg text-primaryColor font-semibold">{item.treatmantPrice}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}