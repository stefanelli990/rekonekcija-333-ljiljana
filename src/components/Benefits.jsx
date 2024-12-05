import { benefits } from "../data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Benefits() {
  
  return (
    <section id="benefits" className="bg-offWhite1" >
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2><span className="text-primaryColor font-bold">Dobrobiti
          </span> rekonekcije</h2>
          <p>Rekonekcija nije samo proces isceljenja, već i put ka dubokoj transformaciji i otkrivanju vašeg punog potencijala. Otkrijte sveobuhvatne prednosti koje ovaj jedinstveni proces može doneti vašem životu i postignite harmoniju koja vodi ka ispunjenju na svim nivoima.</p>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((item, index) => (
            <Card key={index} icon={item.benefitIcon} title={item.benefitTitle} desc={item.benefitDesc}/>
          ))}
        </div>
      </div>
    </section>
  );
}
