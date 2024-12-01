import { counter } from "../data"

export default function Counter() {
  return (
    <section className="bg-primaryColor-light py-[50px] lg:py-[75px]">
        <div className="wrapper">
            <div className="grid lg:grid-cols-3 gap-8 text-center">
                {counter.map((item,index) => (
                    <div key={index} className="mx-auto max-w-[400px]">
                    <h2 className="mb-1 text-primaryColor font-bold">{item.counterNumber}<span className="text-4xl">+</span></h2>
                    <h3 className="mb-4">{item.counterTitle}</h3>
                    <p>{item.counterDesc}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}