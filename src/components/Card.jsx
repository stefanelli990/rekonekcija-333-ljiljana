export default function Card({ icon, title, desc, link}) {

  const CardWrapper = link ? 'a' : 'div';

  return (
    <CardWrapper href={link || undefined} className="text-center w-full border border-gray-300 rounded-3xl p-6">
        <img className="w-[60px] inline" src={icon} alt="" />
        <h3 className="py-2">{title}</h3>
        <p>{desc}</p>
    </CardWrapper>
  )
}