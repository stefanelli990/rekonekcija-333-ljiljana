export default function Reconnection() {
  const reconnection = [
    {
      reconnectionTitle: "Pojam rekonekcije",
      reconnectionDesc:
        "Rekonekcija je metoda energetskog isceljivanja koju je razvio Erik Perl. Ova tehnika se fokusira na ponovnu povezanost sa univerzalnom energijom i vraćanje tela u stanje ravnoteže i zdravlja. Prema ovoj metodi, rekonekcija omogućava telo da se prilagodi višoj frekvenciji energije, što može dovesti do fizičkog, mentalnog i duhovnog isceljenja.",
      reconnectionImg: "/reconnection-img-1.jpg",
      alt: "Photo Shooting image",
    },
    {
      reconnectionTitle: "Delovanje rekonekcije",
      reconnectionDesc:
        "Tokom sesije rekonekcije, koriste se specifične energetske frekvencije  kako bi podstakao vaš proces isceljenja. Tokom sesije, ove frekvencije deluju na otklanjanju energetskih blokada i omogućavaju vam dublju povezanost sa univerzumom i vašom unutrašnjom prirodom. Sesije su neinvazivne i mogu se obavljati i uživo i na daljinu.",
      reconnectionImg: "/reconnection-img-2.jpg",
      alt: "Video Shooting image",
    },
  ];

  return (
    <section id="rekonekcija" className="pb-[75px] lg:pb-[100px]">
      {reconnection.map((item, index) => (
        <div
          key={index}
          className={`wrapper flex md:items-center flex-col-reverse gap-12 md:flex-row lg:gap-24 pt-[75px] lg:pt-[100px] ${index % 2 === 0 ? 'md:flex-row md:text-right' : 'md:flex-row-reverse md:text-left'}`}
        >
          <div className="md:w-1/2 ">
            <h2>{item.reconnectionTitle}</h2>
            <p>{item.reconnectionDesc}</p>
          </div>
          <div className={`md:w-1/2 h-[400px] md:h-[500px] overflow-hidden rounded-t-[75px] md:rounded-t-none ${index % 2 === 0 ? 'md:rounded-r-[75px] md:rounded-tr-[75px]' : 'md:rounded-l-[75px] md:rounded-tl-[75px]'}`}>
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
