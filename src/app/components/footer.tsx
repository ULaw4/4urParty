import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-10 text-center text-white">
      <p className="mb-4">
        © 2024 DECOR EVENTOS. Todos los derechos reservados.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="#" className="hover:underline">
          Política de Privacidad
        </Link>
        <Link href="#" className="hover:underline">
          Términos y Condiciones
        </Link>
      </div>
    </footer>
  );
}
