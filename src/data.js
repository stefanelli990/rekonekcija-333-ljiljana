import physicalTherapy from './assets/physical-therapy.svg';
import psychiatry from './assets/psychiatry.svg';
import meditation from './assets/meditation.svg';
import stamina from './assets/stamina.svg';
import heartbeat from './assets/heartbeat.svg';
import person from './assets/person.svg';
import envelopeIcon from './assets/envelope.svg';
import phoneIcon from './assets/phone.svg';
import mapMarkerIcon from './assets/map-marker.svg';
import instagramIcon from './assets/instagram-icon.svg';
import facebookIcon from './assets/facebook-icon.svg';

export const navLinks = [
    { name: "Tretmani", to: "tretmani" },
    { name: "O Meni", to: "o-meni" },
    { name: "Kontakt", to: "kontakt" },
  ];

export const reconnection = [
    {
      reconnectionTitle: "Pojam rekonekcije",
      reconnectionDesc:
        "Rekonekcija je metoda energetskog isceljenja koju je razvio Erik Perl. Ova tehnika se fokusira na ponovnu povezanost sa univerzalnom energijom i vraćanje tela u stanje ravnoteže i zdravlja. Prema ovoj metodi, rekonekcija omogućava telo da se prilagodi višoj frekvenciji energije, što može dovesti do fizičkog, mentalnog i duhovnog isceljenja.",
      
      alt: "Photo Shooting image",
    },
    {
      reconnectionTitle: "Delovanje rekonekcije",
      reconnectionDesc:
        "Tokom sesije rekonekcije, koriste se specifične energetske frekvencije  kako bi podstakao vaš proces isceljenja. Ove frekvencije deluju na otklanjanju energetskih blokada i omogućavaju vam dublju povezanost sa univerzumom i vašom unutrašnjom prirodom. Sesije su neinvazivne i mogu se obavljati i uživo i na daljinu.",
     
      alt: "Video Shooting image",
    },
  ];

export const counter = [
  { counterNumber: 1000, counterTitle: 'Zadovoljnih klijenata'},
  { counterNumber: 100, counterTitle: 'Održanih seansi'},
  { counterNumber: 10, counterTitle: 'Godina iskustva'}
]  

export const treatmants = [
    { treatmantTitle: 'Rekonekcijsko isceljenje', treatmantDesc: 'Rekonekcijsko isceljenje uklanja energetske blokade koje su se formirale tokom života, počevši od najranijeg detinjstva. Ovaj proces se izvodi u prisustvu ili na daljinu kroz tri sesije koje se održavaju tri dana za redom. Svaka sesija je jedinstvena, sa svakim danom idemo sve dublje u proces isceljenja.', treatmantPrice: 'Cena po jednoj sesiji je 40€'},
    { treatmantTitle: 'Lična rekonekcija', treatmantDesc: 'Lična rekonekcija omogućava duboko i direktno energetsko oslobađanje blokada koje su se nakupljale tokom vašeg života. Ova metoda se izvodi u prisustvu, što omogućava direktan kontakt i rad sa vašim energetskim poljem. Lična Rekonekcija se radi samo jednom u životu i isključivo u prisustvu klijenta i praktičara.', treatmantPrice: 'Cena lične rekonekcije je 333€'}
];

export const benefits = [
    {
      benefitIcon: physicalTherapy,
      benefitTitle: "Fizičko zdravlje",
      benefitDesc:
        "Poboljšava opšte zdravstveno stanje, ublažava bol i pomaže u regeneraciji tela.",
    },
    {
      benefitIcon: psychiatry,
      benefitTitle: "Mentalno zdravlje",
      benefitDesc:
        "Smanjuje stres, poboljšava mentalnu jasnoću i pomaže u rešavanju emocionalnih blokada.",
    },
    {
      benefitIcon: meditation,
      benefitTitle: "Duhovni razvoj",
      benefitDesc:
        "Podstiče unutrašnji mir, povećava svest o životnim svrhama i promoviše duhovni rast.",
    },
    {
      benefitIcon: stamina,
      benefitTitle: "Energetska ravnoteža",
      benefitDesc:
        "Balansira energetske centre u telu, pomažući u slobodnom protoku životne energije.",
    },
    {
      benefitIcon: heartbeat,
      benefitTitle: "Poboljšana vitalnost",
      benefitDesc:
        "Povećava nivo energije i osećaj vitalnosti u svakodnevnom životu.",
    },
    {
      benefitIcon: person,
      benefitTitle: "Lični razvoj",
      benefitDesc:
        "Podstiče osobni rast i samopouzdanje  kroz procese samopoznanja i unutrašnje harmonije.",
    },
  ];

  export const faq = [
    {question: 'Da li je rekonekcijsko isceljenje bezbedno?', answer: 'Da, rekonekcijsko isceljenje je potpuno bezbedno. Koristi prirodne energetske frekvencije koje su nežne i umirujuće. Nema nuspojava i nije invazivno.'},
    {question: 'Šta mogu očekivati tokom sesije rekonekcijskog isceljenje?', answer: 'Tokom sesije, možete osetiti različite senzacije poput toplote, hladnoće, trnaca ili blagog pritiska. Takođe možete doživeti emocionalne ili mentalne uvide. Svaka sesija je jedinstvena i prilagođena individualnim potrebama.'},
    {question: 'Da li trebam verovati u rekonekcijsko isceljenje da bi delovalo?', answer: 'Ne morate imati čvrsto uverenje u rekonekcijsko isceljenje da bi delovalo. Otvoren um i spremnost da primite energiju su dovoljni. Isceljenje se dešava nezavisno od vaših uverenja.'},
    {question: 'Kako se pripremiti za sesiju rekonekcijskog isceljenja?', answer: 'Preporučuje se da dođete u opuštenom stanju, nosite udobnu odeću i budete otvoreni za iskustvo. Možete doneti i bilo kakve specifične namere ili pitanja na koja želite da se fokusirate tokom sesije.'},
    {question: 'Ko može imati koristi od rekonekcijskog isceljenja?', answer: 'Svako može imati koristi od rekonekcijskog isceljenja, bez obzira na starost, pol ili zdravstveno stanje. Pomaže u postizanju opšteg blagostanja, smanjenju stresa i poboljšanju kvaliteta života.'},
];

export const contactInformations = [
  {
    contactIcon: phoneIcon,
    contactTitle: 'Pozovite',
    contactInformation: "+381 69 116 2977",
    contactLink: "tel:+381691162977",
  },
  {
    contactIcon: envelopeIcon,
    contactTitle: 'Pišite',
    contactInformation: "ljiljana.medovic@gmail.com",
    contactLink: "mailto:ljiljana.medovic@gmail.com",
  },
  {
    contactIcon: mapMarkerIcon,
    contactTitle: 'Posetite',
    contactInformation: "Marije Bursaća 8, Niš",
    contactLink: "https://www.google.com/maps?q=Marije+Bursaća+8,+Niš",
  },
];

export const socialNetworks = [
  {icon: instagramIcon, username: 'rekonekcija_ljiljana', link: 'https://www.instagram.com/rekonekcija_ljiljana/'},
  {icon: facebookIcon, username: 'Rekonekcija Ljiljana 333', link: 'https://www.facebook.com/profile.php?id=100095531199276'}
]