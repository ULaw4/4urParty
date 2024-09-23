import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[90vh] items-center justify-center text-3xl uppercase">
      <div className="flex  gap-2 items-center">
        <p>LA PAGINA QUE BUSCAS NO EXISTE, REGRESA AL</p>
        <Link href={"/"} className="bg-black text-white px-4 py-2 rounded-md">INICIO</Link>
      </div>
    </div>
  );
}
