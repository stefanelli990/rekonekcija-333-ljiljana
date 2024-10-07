import { counter } from "../data"

export default function Counter() {
  return (
    <section className="bg-primaryColor-light py-[50px] lg:py-[75px]">
        <div className="wrapper">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:text-center">
                {counter.map((item,index) => (
          
                    <div key={index} className="flex flex-col gap-2">
                    <h2 className="text-primaryColor font-bold">{item.counterNumber}<span className="text-4xl">+</span></h2>
                    <p className="text-3xl font-serif">{item.counterTitle}</p>
                </div>
      
                ))}
            </div>
        </div>
    </section>
  )
}