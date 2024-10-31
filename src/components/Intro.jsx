import introImg1 from '../assets/intro-img-1.webp';
import introImg2 from '../assets/intro-img-2.webp';
import SectionTitle from './SectionTitle';

export default function Intro() {
  return (
    <section className="py-[75px] lg:py-[100px]">
      <div className="wrapper">
        <SectionTitle>
          <h2><span className='font-bold text-primaryColor'>Dobrodošli</span> u svet rekonekcije</h2>
          <p>Kroz rekonekcijsko isceljenje, pomažem vam da oslobodite negativne emocije i pronađete unutrašnji mir. Moj cilj je da vas povežemo sa izvorom vaše snage, kako biste mogli da živite ispunjeniji život. Započnimo putovanje ka unutrašnjem miru i samopouzdanju.</p>
        </SectionTitle>
        <div className='flex flex-col md:flex-row relative'>
            <div className="aspect-video md:flex-1 border-offWhite border-[16px] xl:border-[24px] -ml-4 mr-8 md:mb-20 xl:mb-28 md:-mr-16 xl:-ml-6 rounded-[32px] xl:rounded-[48px] overflow-hidden">
            <img src={introImg1} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="aspect-video md:flex-1 border-offWhite border-[16px] xl:border-[24px] -mr-4 ml-8 -mt-20 md:mt-20 xl:mt-28 md:-ml-16 xl:-mr-6 rounded-[32px] xl:rounded-[48px] overflow-hidden">
            <img src={introImg2} alt="" className="w-full h-full object-cover"/>
            </div>
            </div>  
      </div>
    </section>
  );
}
