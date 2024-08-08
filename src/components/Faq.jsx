import { useState } from "react"
import wavyVector3 from '../assets/wavy-vector-3.svg'
import wavyVector3Reversed from '../assets/wavy-vector-3-reversed.svg'

export default function Faq() {

    const faq = [
        {question: 'Da li je rekonekcijsko isceljivanje bezbedno?', answer: 'Da, rekonekcijsko isceljivanje je potpuno bezbedno. Koristi prirodne energetske frekvencije koje su nežne i umirujuće. Nema nuspojava i nije invazivno.'},
        {question: 'Šta mogu očekivati tokom sesije rekonekcijskog isceljivanja?', answer: 'Tokom sesije, možete osetiti različite senzacije poput toplote, hladnoće, trnaca ili blagog pritiska. Takođe možete doživeti emocionalne ili mentalne uvide. Svaka sesija je jedinstvena i prilagođena individualnim potrebama.'},
        {question: 'Da li trebam verovati u rekonekcijsko isceljivanje da bi delovalo?', answer: 'Ne morate imati čvrsto uverenje u rekonekcijsko isceljivanje da bi delovalo. Otvoren um i spremnost da primite energiju su dovoljni. Isceljenje se dešava nezavisno od vaših uverenja.'},
        {question: 'Kako se pripremiti za sesiju rekonekcijskog isceljivanja?', answer: 'Preporučuje se da dođete u opuštenom stanju, nosite udobnu odeću i budete otvoreni za iskustvo. Možete doneti i bilo kakve specifične namere ili pitanja na koja želite da se fokusirate tokom sesije.'},
        {question: 'Ko može imati koristi od rekonekcijskog isceljivanja?', answer: 'Svako može imati koristi od rekonekcijskog isceljivanja, bez obzira na starost, pol ili zdravstveno stanje. Pomaže u postizanju opšteg blagostanja, smanjenju stresa i poboljšanju kvaliteta života.'},
    ]

    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <section id="faq" className="bg-offWhite1">
      <img src={wavyVector3} className="relative inset-x-0 w-full" alt="" />
        <div className="wrapper py-[50px] sm:py-0">
            <h2 className="sm:text-center sm:mb-[50px]">Najčešća pitanja</h2>
            <ul>
            {faq.map((item,index) => (
                <li key={index} className="mb-4">
                    <button onClick={() => toggleAccordion(index)} className="px-6 py-5 bg-white text-left rounded-3xl cursor-pointer w-full flex justify-between items-center shadow-md shadow-slate-100 gap-4">
                        <h3>{item.question}</h3>
                        <div className="relative">
                            <div className="w-[18px] h-[3px] bg-primaryColor rounded-full"></div>
                            <div className={`w-[18px] h-[3px] bg-primaryColor rounded-full absolute top-1/2 -translate-y-1/2 transition-transform duration-200 ${openIndex === index ? 'rotate-0' : 'rotate-90'}`}></div>
                        </div>
                    </button>
                    {openIndex === index && (
                    <div className="bg-white px-6 pt-4 pb-6 -mt-[20px] rounded-b-3xl shadow-2xl shadow-slate-100">
                        <p>{item.answer}</p>
                    </div>
                    )}
                </li>
            ))}
            </ul>
        </div>
        <img src={wavyVector3Reversed} className="relative inset-x-0 w-full" alt="" />
    </section>
  )
}