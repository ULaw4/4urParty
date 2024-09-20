import Header from './header';
import Carousel from './carousel';

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />

      <section className="flex gap-x-10 justify-center py-20 bg-white text-center">
        <section className='flex flex-col'>
        <h2 className="text-4xl font-bold mb-6">DECOR EVENTOS</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          En Decor Eventos somos especialistas en decoración y diseño para eventos, ademas de los mejor antojitos para tu evento formal o casual.
        </p>
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          Saber más
        </button>
        </section>
        <section className='flex flex-col'>
        <img src="/images/Deco2.jpg" alt="About Us Image" className="max-w-sm h-auto relative -top-10 left-5" />
        <img src="/images/Deco2.jpg" alt="About Us Image" className="max-w-sm h-auto" />
        </section>

      </section>

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">PAQUETES</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Contamos con diferentes paquetes para su evento.
        </p>
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          Contactarnos
        </button>
      </section>
      
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">MENU</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Nuestro menu de los alimentos mas pedidos, puedes preguntar por cualquier comida que no este listada.
        </p>
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          Preguntanos
        </button>
      </section>

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">GALERÍA</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Conoce nuestros trabajos anteriores.
        </p>
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          Ver más
        </button>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">TU MOMENTO INOLVIDABLE</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Nombre" className="w-full mb-4 p-3 border border-gray-300 rounded-lg" />
          <input type="text" placeholder="Teléfono" className="w-full mb-4 p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email" className="w-full mb-4 p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Mensaje" className="w-full mb-4 p-3 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">Enviar</button>
        </form>
      </section>

      <footer className="py-10 bg-gray-800 text-white text-center">
        <p className="mb-4">© 2024 DECOR EVENTOS. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Política de Privacidad</a>
          <a href="#" className="hover:underline">Términos y Condiciones</a>
        </div>
      </footer>

    </div>
  );
}
