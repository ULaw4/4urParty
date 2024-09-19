// components/Hero.tsx
export default function Hero() {
    return (
      <section className="relative bg-[url('/path-to-your-image.jpg')] bg-cover bg-center h-[75vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
  
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">El momento que realmente importa</h1>
          <div className="space-x-4">
            <button className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700">Cotizar evento</button>
            <button className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700">Ir a la tienda</button>
          </div>
        </div>
      </section>
    );
  }
  