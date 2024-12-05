import { contactInformations } from "../data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  
  return (
    <section id="kontakt">
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2>Budimo u <span className="font-bold text-primaryColor">kontaktu</span></h2>
          <p>Ako imate pitanja u vezi rekonekcijskog isceljenje, želite da saznate više o našim uslugama, ili biste želeli da zakažete svoju prvu sesiju, slobodno kontaktirajte. Vaša dobrobit je na prvom mestu i ovde sam da vam pružim podršku na vašem putu ka isceljenju.</p>
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-4">
          {contactInformations.map((item, index) => (
          <Card key={index} link={item.contactLink} icon={item.contactIcon} title={item.contactTitle} desc={item.contactInformation}/>
          ))}
        </div>
      </div>
    </section>
  );
}
