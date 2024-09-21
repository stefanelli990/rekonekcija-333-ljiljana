import { contactInformations } from "../data";

export default function Contact() {
  
  return (
    <section id="kontakt">
      <div className="wrapper py-[75px] lg:py-[100px]">
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="sm:mb-[50px]">Povežimo se</h2>
          <p>
            Ako imate pitanja u vezi rekonekcijskog isceljivanja, želite da
            saznate više o našim uslugama, ili biste želeli da zakažete svoju
            prvu sesiju, slobodno nas kontaktirajte. Vaša dobrobit je na prvom
            mestu i ovde sam da vam pružim podršku na vašem putu ka isceljenju.
          </p>
        </div>
        <div className="mt-[50px] sm:mt-[75px] flex flex-col gap-4 md:flex-row items-start md:gap-12">
          <form className="w-full md:w-1/2 flex flex-col gap-4">
              <label>
              <input
                className="w-full border border-gray-200 rounded-r-none bg-offWhite1  rounded-t-[28px] md:rounded-t-none md:rounded-tl-[28px] p-4 pl-6 outline-primaryColor"
                type="text"
                id="name"
                name="name"
                placeholder="Ime i prezime"
                required
              />
              </label>
              <label>
              <input
                className="w-full border border-gray-200 bg-offWhite1 p-4 pl-6 outline-primaryColor"
                type="email"
                id="email"
                name="email"
                placeholder="Email adresa"
                required
              />
              </label>
              <label >
              <textarea
                className="w-full border border-gray-200 bg-offWhite1 p-4 pl-6 resize-none outline-primaryColor"
                rows={6}
                id="message"
                name="message"
                placeholder="Vaša poruka"
                required
              ></textarea>
              </label>
            <button className="btn btn-form -mt-[10px]">Pošaljite poruku</button>
          </form>
          <div className="md:w-1/2 bg-offWhite1 w-full p-8 rounded-b-[40px] md:rounded-b-none md:rounded-r-[40px] md:rounded-br-[40px]">
            <h3 className="mb-6">Kontakt Informacije</h3>
            <ul className="flex flex-col gap-4">
              {contactInformations.map((information, index) => (
                <li className="flex items-center space-x-4" key={index}>
                  <div className="h-12 w-12 flex items-center justify-center bg-offWhite2 text-primaryColor rounded-full">
                    <img src={information.icon} alt="" />
                  </div>
                  <a href={information.link}>
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
