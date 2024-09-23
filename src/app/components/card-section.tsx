import Link from "next/link";
import { Children, PropsWithChildren } from "react";


interface SectionProps{
  title: string;
  button: string;
  link: string;
  bg?: boolean;
}

export default function CardSection(Props: PropsWithChildren<SectionProps>){

  const {title, button, link, children, bg} = Props;

  return(
    <section className={`py-20 ${bg ? 'bg-gray-100' : 'bg-white'} text-center`}>
    <h2 className="text-4xl font-bold mb-6 uppercase">{title}</h2>
    <p className="max-w-2xl mx-auto text-lg mb-10">
      {children}
    </p>
    <Link href={link} className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
      {button}
    </Link>
  </section>
  )
}