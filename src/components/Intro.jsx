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
            <div className="aspect-video md:flex-1 border-[16px] -ml-[16px] mr-[32px] -mt-[16px] md:mb-[80px] md:-mr-[64px] border-offWhite rounded-[32px] md:rounded-[48px] overflow-hidden -z-[1]">
            <img src={introImg1} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="aspect-video md:flex-1 border-[16px] -mt-[64px] -mr-[16px] ml-[32px] md:mt-[80px] md:-ml-[64px] border-offWhite rounded-[32px] md:rounded-[48px] overflow-hidden">
            <img src={introImg2} alt="" className="w-full h-full object-cover"/>
            </div>
            </div>  
      </div>
    </section>
  );
}
