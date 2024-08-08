import { BsEnvelopeFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contactInformations = [
    {
      icon: <FaPhoneAlt />,
      content: "+381 69 116 2977",
      link: "tel:+381691162977",
    },
    {
      icon: <BsEnvelopeFill />,
      content: "ljiljana.medovic@gmail.com",
      link: "mailto:ljiljana.medovic@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      content: "Marije Bursaća 8, Niš",
      link: "https://www.google.com/maps?q=Marije+Bursaća+8,+Niš",
    },
  ];

  return (
    <section id="kontakt">
      <div className="wrapper py-[50px] lg:py-[100px]">
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="sm:mb-[50px]">Povežimo se</h2>
          <p>
            Ako imate pitanja u vezi rekonekcijskog isceljivanja, želite da
            saznate više o našim uslugama, ili biste želeli da zakažete svoju
            prvu sesiju, slobodno nas kontaktirajte. Vaša dobrobit je na prvom
            mestu i ovde sam da vam pružim podršku na vašem putu ka isceljenju.
          </p>
        </div>
        <div className="mt-[50px] flex flex-col gap-12 md:flex-row items-start lg:gap-24">
          <form className="w-full md:w-1/2 flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Ime i prezime</label>
              <input
                className="border border-gray-200 bg-offWhite1 rounded-2xl py-3 px-4 outline-primaryColor"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email">Email adresa</label>
              <input
                className="border border-gray-200 bg-offWhite1 rounded-2xl py-3 px-4 outline-primaryColor"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="message">Vaša poruka</label>
              <textarea
                className="border border-gray-200 bg-offWhite1 rounded-2xl py-3 px-4 resize-none outline-primaryColor"
                rows={6}
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <button className="btn">Pošaljite poruku</button>
          </form>
          <div className="md:w-1/2 bg-offWhite1 w-full p-8 rounded-r-[50px]">
            <h3 className="mb-6">Kontakt Informacije</h3>
            <ul className="flex flex-col gap-4">
              {contactInformations.map((information, index) => (
                <li className="flex items-center space-x-4" key={index}>
                  <div className="h-12 w-12 flex items-center justify-center bg-offWhite2 text-primaryColor rounded-full">
                    {information.icon}
                  </div>
                  <a href={information.link} className="font-normal">
                    {information.content}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
