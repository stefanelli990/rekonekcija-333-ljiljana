import { contactInformations } from "../data";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  
  return (
    <section id="kontakt">
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2>Budimo u <span className="font-bold text-primaryColor">kontaktu</span></h2>
          <p>Ako imate pitanja u vezi rekonekcijskog isceljenje, želite da saznate više o našim uslugama, ili biste želeli da zakažete svoju prvu sesiju, slobodno kontaktirajte. Vaša dobrobit je na prvom mestu i ovde sam da vam pružim podršku na vašem putu ka isceljenju.</p>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactInformations.map((item, index) => (
            <a href={item.contactLink} key={index} className="space-y-2 text-center border border-gray-300 py-[50px] rounded-3xl">
            <img className="inline" src={item.contactIcon} alt="" />
            <h3>{item.contactTitle}</h3>
            <p>{item.contactInformation}</p>
          </a>
          ))}
        </div>
      </div>
    </section>
  );
}
