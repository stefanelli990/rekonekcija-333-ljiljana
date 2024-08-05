
export default function Quote() {
  return (
    <section>
      <div className="wrapper">
        <div
          style={{ backgroundImage: `url(${'/cta-img.jpg'})` }}
          className="bg-center bg-cover py-[50px] lg:py-[100px] bg-fixed rounded-[32px] overflow-hidden relative sm:text-center -z-[-2]"
        >
          <blockquote className="max-w-5xl text-white mx-auto p-4">
            <p className="italic">
            &quot;Uđite. Lezite i zatvorite oči. Pustite sebe da plutate, ali
              nemojte zaspati. Verujte, onaj ko sluša misli i molitve sasvim je
              izvesno već čuo Vaše. Ne samo da je čuo sve ono za šta ste se
              molili, nego je čuo i ono za šta se niste ni setili da se molite.
              On sve zna...&quot;
            </p>
            <footer className="mt-4">
              <p>- Erik Perl, osnivač Rekonekcije</p>
            </footer>
          </blockquote>
          <div className="bg-black/50 absolute inset-0 -z-[1]"></div>
        </div>
      </div>
    </section>
  );
}
