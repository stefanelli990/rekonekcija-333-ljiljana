import aboutImg from '../assets/about-img.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="wrapper py-[100px]">
        <div className='grid grid-flow-col items-center gap-24'>
        <div className='h-[600px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden'>
          <img className='h-full w-full object-cover' src={aboutImg} alt="" />
        </div>
        <div>
          <h2>Moj put rekonekcije</h2>
          <p className="opacity-60 mb-8">
            Ljiljana Medović - Prakticar rekonektivnog isceljivanja i lične
            rekonekcije
          </p>
          <p className='mb-4'>
          Moje interesovanje za alternativne metode isceljivanja i holistički pristup zdravlju počelo je pre mnogo godina. Tokom vremena, istraživala sam različite tehnike, ali rekonekcija je ta koja je donela najveću transformaciju u mom životu. Duboke promene koje sam osetila podstakle su me da posvetim svoj život pomaganju drugima da dožive isto.
          </p>
          <p className='mb-4'>
          Kroz rekonekciju, pomažem vam da otklonite stres i anksioznost, poboljšate svoje emocionalno stanje i oslobodite se negativnih obrazaca ponašanja koji vas sputavaju. Tokom sesija, radimo na uspostavljanju balansa u vašem energetskom polju, što može dovesti do poboljšanja fizičkog zdravlja, povećane mentalne jasnoće i dublje duhovne povezanosti.
          </p>
          <p>
          Moja misija je da vam pružim podršku na vašem putu ka zdravlju i blagostanju kroz sesije rekonektivnog isceljivanja. Verujem da svaka osoba ima urođenu sposobnost da se isceli, a moj zadatak je da vam pomognem da pristupite toj moći unutar vas.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
