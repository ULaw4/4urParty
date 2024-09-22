export default function ContactForm() {
  return (
    <section className="bg-white py-20 text-center">
      <h2 className="mb-6 text-4xl font-bold">TU MOMENTO INOLVIDABLE</h2>
      <form className="mx-auto max-w-lg">
        <input
          type="text"
          placeholder="Nombre"
          className="mb-4 w-full rounded-lg border border-gray-300 p-3"
        />
        <input
          type="text"
          placeholder="Teléfono"
          className="mb-4 w-full rounded-lg border border-gray-300 p-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-lg border border-gray-300 p-3"
        />
        <textarea
          placeholder="Mensaje"
          className="mb-4 w-full rounded-lg border border-gray-300 p-3"
        ></textarea>
        <button
          type="submit"
          className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
