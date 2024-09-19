// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-700">MARLENE</div>

        {/* Nav Links */}
        <nav className="space-x-8 text-lg text-gray-700">
          <Link href="/">Inicio</Link>
          <Link href="/about">Nosotros</Link>
          <Link href="/events">Eventos</Link>
          <Link href="/gallery">Galeria</Link>
          <Link href="/contact">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}