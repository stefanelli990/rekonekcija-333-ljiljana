export default function Treatmants() {

    const treatmants = [
        { treatmantTitle: 'Rekonekcijsko Isceljivanje', treatmantDesc: 'Rekonekcijsko isceljivanje uklanja energetske blokade koje su se formirale tokom života, počevši od najranijeg detinjstva. Ovaj proces se izvodi u prisustvu ili na daljinu kroz tri sesije koje se održavaju tri dana za redom. Svaka sesija je jedinstvena, sa svakim danom idemo sve dublje u proces isceljivanja.', treatmantPrice: 'Cena po jednoj sesiji je 40€'},
        { treatmantTitle: 'Lična Rekonekcija', treatmantDesc: 'Lična rekonekcija omogućava duboko i direktno energetsko oslobađanje blokada koje su se nakupljale tokom vašeg života. Ova metoda se izvodi u prisustvu, što omogućava direktan kontakt i rad sa vašim energetskim poljem. Lična Rekonekcija se radi samo jednom u životu i isključivo u prisustvu klijenta i praktičara.', treatmantPrice: 'Cena lične rekonekcije je 333€'}
    ]
  return (
    <section>
        <div className="wrapper py-[75px] md:py-[150px]">
            <h2 className="text-center mb-[75px]">Tretmani za vas</h2>
            <div className="flex flex-col md:flex-row gap-4">
                {treatmants.map((item, index) => (
                    <div key={index} className="bg-offWhite1 px-6 py-10 rounded-2xl flex-1 text-center">
                    <h3>{item.treatmantTitle}</h3>
                    <p className="my-4">{item.treatmantDesc}</p>
                    <p className="text-lg text-primaryColor font-semibold">{item.treatmantPrice}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}