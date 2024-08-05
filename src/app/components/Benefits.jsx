import Image from "next/image";

export default function Benefits() {
  const benefits = [
    {
      benefitIcon: "/physical-therapy.svg",
      benefitTitle: "Fizičko zdravlje",
      benefitDesc:
        "Poboljšava opšte zdravstveno stanje, ublažava bol i pomaže u regeneraciji tela.",
    },
    {
      benefitIcon: "/psychiatry.svg",
      benefitTitle: "Mentalno zdravlje",
      benefitDesc:
        "Smanjuje stres, poboljšava mentalnu jasnoću i pomaže u rešavanju emocionalnih blokada.",
    },
    {
      benefitIcon: "/meditation.svg",
      benefitTitle: "Duhovni razvoj",
      benefitDesc:
        "Podstiče unutrašnji mir, povećava svest o životnim svrhama i promoviše duhovni rast.",
    },
    {
      benefitIcon: "/stamina.svg",
      benefitTitle: "Energetska ravnoteža",
      benefitDesc:
        "Balansira energetske centre u telu, pomažući u slobodnom protoku životne energije.",
    },
    {
      benefitIcon: "/heartbeat.svg",
      benefitTitle: "Poboljšana vitalnost",
      benefitDesc:
        "Povećava nivo energije i osećaj vitalnosti u svakodnevnom životu.",
    },
    {
      benefitIcon: "/person.svg",
      benefitTitle: "Lični razvoj",
      benefitDesc:
        "Podstiče osobni rast i samopouzdanje  kroz procese samopoznanja i unutrašnje harmonije.",
    },
  ];

  return (
    <section id="benefits" className="bg-offWhite1">
      <div className="wrapper sm:text-center py-[75px] lg:py-[150px]">
        <h2 className="sm:mb-[75px]">Dobrobiti rekonekcije</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map((item, index) => (
            <div
              className="flex flex-col justify-center sm:items-center p-4"
              key={index}
            >
              <div className="bg-offWhite2 rounded-full h-[80px] w-[80px] flex items-center justify-center">
                <Image
                  width={50}
                  height={50}
                  style={{ width: '50px', height: '50px' }}
                  src={item.benefitIcon}
                  alt=""
                />
              </div>
              <h3 className="pt-4 pb-2">{item.benefitTitle}</h3>
              <p>{item.benefitDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
