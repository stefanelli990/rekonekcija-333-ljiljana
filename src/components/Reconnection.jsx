import { reconnection } from "../data";

export default function Reconnection() {
  
  return (
    <section id="rekonekcija" className="pb-[75px] lg:pb-[100px]">
      {reconnection.map((item, index) => (
        <div
          key={index}
          className={`wrapper flex md:items-center flex-col-reverse gap-12 md:flex-row lg:gap-24 pt-[75px] lg:pt-[100px] ${index % 2 === 0 ? 'md:flex-row md:text-right' : 'md:flex-row-reverse md:text-left'}`}
        >
          <div className="md:w-1/2 ">
            <h2>{item.reconnectionTitle}</h2>
            <p>{item.reconnectionDesc}</p>
          </div>
          <div className={`md:w-1/2 h-[400px] md:h-[500px] overflow-hidden rounded-t-[100px] md:rounded-t-none ${index % 2 === 0 ? ' md:rounded-tr-[100px]' : 'md:rounded-bl-[100px] '}`}>
            <img
              className="w-full h-full object-cover"
              src={item.reconnectionImg}
              alt={item.alt}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
