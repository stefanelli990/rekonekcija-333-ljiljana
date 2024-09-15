import { benefits } from "../data";
import wavyVector3 from '../assets/wavy-vector-3.svg';
import wavyVector3Reversed from '../assets/wavy-vector-3-reversed.svg';

export default function Benefits() {
  
  return (
    <section id="benefits" className="bg-offWhite1" >
      <img src={wavyVector3} className="relative inset-x-0 w-full" alt="Wavy vector" />
      <div className="wrapper sm:text-center py-[75px] sm:py-[25px]">
        <h2 className="sm:mb-[50px]">Dobrobiti rekonekcije</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map((item, index) => (
            <div
              className="flex flex-col justify-center sm:items-center p-4"
              key={index}
            >
              <div className="bg-offWhite2 rounded-full h-[80px] w-[80px] flex items-center justify-center">
                <img className="w-[50px]" src={item.benefitIcon} alt="" />
              </div>
              <h3 className="pt-4 pb-2">{item.benefitTitle}</h3>
              <p>{item.benefitDesc}</p>
            </div>
          ))}
        </div>
      </div>
      <img src={wavyVector3Reversed} className="relative inset-x-0 w-full" alt="Wavy vector" />
    </section>
  );
}
