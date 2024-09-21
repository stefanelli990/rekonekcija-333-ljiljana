import { useState } from "react";
import { faq } from "../data";
import wavyVector3 from '../assets/wavy-vector-3.svg';
import wavyVector3Reversed from '../assets/wavy-vector-3-reversed.svg';
import { AnimatePresence, motion } from "framer-motion";

export default function Faq() {

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
      <img src={wavyVector3} className="relative inset-x-0 w-full" alt="Wavy vector" />
        <div className="wrapper py-[75px] sm:py-[25px]">
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
                    {/* sliding effect down bellow */}
                    {openIndex === index && (
                    <div className="bg-white px-6 pt-4 pb-6 -mt-5 rounded-b-3xl shadow-2xl shadow-slate-100">
                        <p>{item.answer}</p>
                    </div>
                    )}
                </li>
            ))}
            </ul>
        </div>
        <img src={wavyVector3Reversed} className="relative inset-x-0 w-full" alt="Wavy vector" />
    </section>
  )
}