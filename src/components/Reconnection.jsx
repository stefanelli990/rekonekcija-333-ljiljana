import reconnectionImg1 from "../assets/reconnection-img-1.jpg";
import reconnectionImg2 from "../assets/reconnection-img-2.jpg";

export default function Reconnection() {
  const reconnection = [
    {
      reconnectionTitle: "Pojam rekonekcije",
      reconnectionDesc:
        "Rekonekcija je metoda energetskog isceljivanja koju je razvio Erik Perl. Ova tehnika se fokusira na ponovnu povezanost sa univerzalnom energijom i vraćanje tela u stanje ravnoteže i zdravlja. Prema ovoj metodi, rekonekcija omogućava telo da se prilagodi višoj frekvenciji energije, što može dovesti do fizičkog, mentalnog i duhovnog isceljenja.",
      reconnectionImg: reconnectionImg1,
      alt: "Photo Shooting image",
    },
    {
      reconnectionTitle: "Delovanje rekonekcije",
      reconnectionDesc:
        "Tokom sesije rekonekcije, koriste se specifične energetske frekvencije  kako bi podstakao vaš proces isceljenja. Tokom sesije, ove frekvencije deluju na otklanjanju energetskih blokada i omogućavaju vam dublju povezanost sa univerzumom i vašom unutrašnjom prirodom. Sesije su neinvazivne i mogu se obavljati i uživo i na daljinu.",
      reconnectionImg: reconnectionImg2,
      alt: "Video Shooting image",
    },
  ];

  return (
    <section id="reconnection-section">
      {reconnection.map((item, index) => (
        <div
          key={index}
          className={`wrapper flex items-center gap-24 my-[100px] ${index % 2 === 0 ? 'flex-row text-right' : 'flex-row-reverse text-left'}`}
        >
          <div className="w-1/2 ">
            <h2>{item.reconnectionTitle}</h2>
            <p>{item.reconnectionDesc}</p>
          </div>
          <div className={`w-1/2 h-[500px] overflow-hidden ${index % 2 === 0 ? 'rounded-bl-[100px] rounded-tr-[100px]' : 'rounded-br-[100px] rounded-tl-[100px]'}`}>
            <img
              className="w-full h-full object-cover"
              src={item.reconnectionImg}
              alt={item.alt}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
