import { BsEnvelopeFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="kontakt">
      <div className="wrapper py-[75px] lg:py-[150px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-center lg:gap-24">
        <div className="md:w-1/2">
          <h2>Povežimo se</h2>
          <p>
          Ako imate pitanja u vezi rekonekcijskog isceljivanja, želite da saznate više o našim uslugama, ili biste želeli da zakažete svoju prvu sesiju, slobodno nas kontaktirajte. Vaša dobrobit je na prvom mestu i ovde sam da vam pružim podršku na vašem putu ka isceljenju.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-4">
                <div className="h-12 w-12 flex items-center justify-center bg-offWhite2 rounded-full">
                <FaPhoneAlt className="text-primaryColor"/>
                </div>
                <a href="tel:+381691162977" className="font-normal">+381 69 116 2977</a>
            </li>
            <li className="flex items-center space-x-4">
                <div className="h-12 w-12 flex items-center justify-center  bg-offWhite2 rounded-full">
                <BsEnvelopeFill className="text-primaryColor"/>
                </div>
                <a href="mailto:ljiljana.medovic@gmail.com" className="font-normal">ljiljana.medovic@gmail.com</a>
            </li>
          </ul>
        </div>
        <form className="md:w-1/2 flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name">Ime i prezime</label>
            <input className="border border-gray-200 bg-offWhite1 rounded-2xl py-3 px-4 outline-primaryColor" type="text" id="name"
                name="name" required/>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email">Email adresa</label>
            <input className="border border-gray-200 bg-offWhite1 rounded-2xl py-3 px-4 outline-primaryColor"  type="email"
                id="email"
                name="email" required/>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="message">Vaša poruka</label>
            <textarea className="border border-gray-200 bg-offWhite1 rounded-2xl py-3 px-4 resize-none outline-primaryColor" rows={6} id="message"
                name="message" required></textarea>
          </div>
          <button className="btn">Pošaljite poruku</button>
        </form>
        </div>
      </div>
    </section>
  );
}
