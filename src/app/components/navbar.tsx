import Link from "next/link";

const path = [
  {
    url: "/",
    name: "Inicio",
  },
  {
    url: "/about",
    name: "Nosotros",
  },
  {
    url: "/events",
    name: "Eventos",
  },
  {
    url: "/gallery",
    name: "Galeria",
  },
  {
    url: "/contact",
    name: "Contacto",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50 space-x-8 text-lg text-gray-700">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-700 uppercase">
          MARLENE
        </div>
        {/* Nav Links */}
        <ul className="flex space-x-8 text-gray-400">
          {path.map((item) => (
            <li className="hover:text-gray-700">
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
