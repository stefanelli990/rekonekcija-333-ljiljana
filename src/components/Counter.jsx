import { counter } from "../data"

export default function Counter() {
  return (
    <section className="bg-primaryColor-light py-[50px] lg:py-[75px]">
        <div className="wrapper">
            <div className="flex flex-wrap justify-around gap-8 text-center">
                {counter.map((item,index) => (
          
                    <div key={index} className="flex flex-col gap-1 w-[250px]">
                    <h2 className="text-primaryColor font-bold">{item.counterNumber}<span className="text-4xl">+</span></h2>
                    <p className="text-2xl lg:text-3xl font-serif">{item.counterTitle}</p>
                </div>
      
                ))}
            </div>
        </div>
    </section>
  )
}