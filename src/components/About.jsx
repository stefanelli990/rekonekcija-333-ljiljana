import aboutImg from '../assets/about-img.jpg';

export default function About() {
  return (
    <section id="o-meni" className='bg-primaryColor-light'>
      <div className="wrapper py-[75px] lg:py-[100px]">
        <div className='flex flex-col items-center md:flex-row gap-8 xl:gap-24'>
        <div className='md:w-1/2 h-[500px] rounded-[40px] overflow-hidden'>
          <img className='object-cover w-full h-full' src={aboutImg} alt="" />
        </div>
        <div className='md:w-1/2'>
          <h2 className='mb-4'>Moj <span className='text-primaryColor font-bold'>put</span> rekonekcije</h2>
          <p className='text-xl mb-6'>
            Ljiljana Medović - Prakticar rekonekcije
          </p>
          <p className='mb-4'>
          Moje interesovanje za alternativne metode isceljenja i holistički pristup zdravlju počelo je pre mnogo godina. Tokom vremena, istraživala sam različite tehnike, ali rekonekcija je ta koja je donela najveću transformaciju u mom životu. Duboke promene koje sam osetila podstakle su me da posvetim svoj život pomaganju drugima da dožive isto.
          </p>
          <p>
          Moja misija je da vam pružim podršku na vašem putu ka zdravlju i blagostanju kroz sesije rekonektivnog nja. Verujem da svaka osoba ima urođenu sposobnost da se isceli, a moj zadatak je da vam pomognem da pristupite toj moći unutar vas.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
