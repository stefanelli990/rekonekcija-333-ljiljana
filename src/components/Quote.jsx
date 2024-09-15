import wavyVectorReversed from '../assets/wavy-vector-reversed.svg';
import wavyVector from '../assets/wavy-vector.svg';
import ctaImg from '../assets/cta-img.jpg';

export default function Quote() {
  return (
    <section className="relative " style={ {clipPath: 'inset(0)' }}>
      <img className="relative inset-x-0 -top-[1px] w-full z-10" src={wavyVectorReversed} alt="" />
        <div className="px-4 py-[50px]" >
          
          <blockquote className="max-w-3xl text-white mx-auto sm:text-center">
            <p className="italic">
              “Uđite. Lezite i zatvorite oči. Pustite sebe da plutate, ali
              nemojte zaspati. Verujte, onaj ko sluša misli i molitve sasvim je
              izvesno već čuo Vaše. Ne samo da je čuo sve ono za šta ste se
              molili, nego je čuo i ono za šta se niste ni setili da se molite.
              On sve zna..."
            </p>
            <footer className="mt-4">
              <p>- Erik Perl, osnivač Rekonekcije</p>
            </footer>
          </blockquote>
          <img src={ctaImg} className=" w-full h-full object-cover fixed inset-0 -z-[2]" alt="" />
          <div className="bg-black/40 absolute inset-0 -z-[1]"></div>
        </div>
        <img className="relative inset-x-0 -bottom-[1px] w-full z-10" src={wavyVector} alt='Wavy vector' />
    </section>
  );
}
