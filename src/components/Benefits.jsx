import benefitImg1 from "../assets/physical-therapy.svg";
import benefitImg2 from "../assets/psychiatry.svg";
import benefitImg3 from "../assets/meditation.svg";
import benefitImg4 from "../assets/stamina.svg";
import benefitImg5 from "../assets/heartbeat.svg";
import benefitImg6 from "../assets/person.svg";

export default function Benefits() {
  const benefits = [
    {
      benefitIcon: benefitImg1,
      benefitTitle: "Fizičko zdravlje",
      benefitDesc:
        "Poboljšava opšte zdravstveno stanje, ublažava bol i pomaže u regeneraciji tela.",
    },
    {
      benefitIcon: benefitImg2,
      benefitTitle: "Mentalno zdravlje",
      benefitDesc:
        "Smanjuje stres, poboljšava mentalnu jasnoću i pomaže u rešavanju emocionalnih blokada.",
    },
    {
      benefitIcon: benefitImg3,
      benefitTitle: "Duhovni razvoj",
      benefitDesc:
        "Podstiče unutrašnji mir, povećava svest o životnim svrhama i promoviše duhovni rast.",
    },
    {
      benefitIcon: benefitImg4,
      benefitTitle: "Energetska ravnoteža",
      benefitDesc:
        "Balansira energetske centre u telu, pomažući u slobodnom protoku životne energije.",
    },
    {
      benefitIcon: benefitImg5,
      benefitTitle: "Poboljšana vitalnost",
      benefitDesc:
        "Povećava nivo energije i osećaj vitalnosti u svakodnevnom životu.",
    },
    {
      benefitIcon: benefitImg6,
      benefitTitle: "Lični razvoj",
      benefitDesc:
        "Podstiče osobni rast i samopouzdanje  kroz procese samopoznanja i unutrašnje harmonije.",
    },
  ]
  
  return (
    <section id="benefits" className="bg-offWhite1">
      <div className="wrapper py-[75px] lg:py-[150px]">
        <h2 className="text-center sm:mb-[75px]">Dobrobiti rekonekcije</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map((item, index) => (
            <div
              className="text-center flex flex-col justify-center items-center p-4"
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
    </section>
  );
}
