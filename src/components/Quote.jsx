import quoteImg from "../assets/reconnection-img-1.jpg";

export default function Quote() {
  return (
    <section>
      <div className="wrapper">
        <div
          style={{ backgroundImage: `url(${quoteImg})` }}
          className="bg-center bg-cover py-24 bg-fixed rounded-[32px] overflow-hidden relative text-center -z-[-2]"
        >
          <blockquote className="max-w-5xl text-white mx-auto">
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
          <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
        </div>
      </div>
    </section>
  );
}
