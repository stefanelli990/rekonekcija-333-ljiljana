import { socialNetworks } from "../data"

export default function Connect() {
  return (
    <section className="bg-primaryColor-light py-[50px] lg:py-[75px]">
        <div className="wrapper">
            <div className="flex flex-wrap items-center justify-between gap-6">
                <h2><span className="text-primaryColor font-bold">Povežimo</span> se</h2>
                <div className="flex flex-wrap gap-4">
                {socialNetworks.map((item,index) => (
                    <div key={index}>
                        <div className="flex items-center gap-2">
                        <img width={32} height={32} src={item.icon} alt="" />
                        <a target="_blank" href={item.link}>{item.username}</a>
                        </div>
                </div>
                ))}
                </div>
                
            </div>
        </div>
    </section>
  )
}