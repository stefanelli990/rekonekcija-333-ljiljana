import Image from "next/image"

export default function About() {
  return (
    <section id="o-meni">
      <div className="wrapper py-[75px] lg:py-[150px]">
        <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
        <div className='h-[500px] lg:h-[600px] lg:flex-1 rounded-t-[100px] rounded-b-[100px] overflow-hidden relative'>
          <Image className='h-full w-full object-cover' src="/about-img.jpg" width="0"
  height="0"
  sizes="100%" alt="About image" />
        </div>
        <div className='lg:flex-1'>
          <h2>Moj put rekonekcije</h2>
        
          <p className='mb-4'>
          Moje interesovanje za alternativne metode isceljivanja i holistički pristup zdravlju počelo je pre mnogo godina. Tokom vremena, istraživala sam različite tehnike, ali rekonekcija je ta koja je donela najveću transformaciju u mom životu. Duboke promene koje sam osetila podstakle su me da posvetim svoj život pomaganju drugima da dožive isto.
          </p>
          <p className='mb-8'>
          Moja misija je da vam pružim podršku na vašem putu ka zdravlju i blagostanju kroz sesije rekonektivnog isceljivanja. Verujem da svaka osoba ima urođenu sposobnost da se isceli, a moj zadatak je da vam pomognem da pristupite toj moći unutar vas.
          </p>
          <p className='italic text-gray-400'>
            Ljiljana Medović - Prakticar rekonektivnog isceljivanja i lične
            rekonekcije
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
