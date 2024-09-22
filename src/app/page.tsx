// pages/index.tsx
import Carousel from "./components/carousel";
import Section from "./components/card-section";
import CardSection from "./components/card-section";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <div>
      <Carousel />
      <CardSection title="DECOR EVENTOS" button="Saber más" link="/">
        En Decor Eventos somos especialistas en decoración y diseño para
        eventos, ademas de los mejor antojitos para tu evento formal o casual.
      </CardSection>
      <CardSection title="PAQUETES" button="Contactarnos" link="/" bg>
        Contamos con diferentes paquetes para su evento.
      </CardSection>
      <CardSection title="MENU" button="Preguntanos" link="/">
        Nuestro menu de los alimentos mas pedidos, puedes preguntar por
        cualquier comida que no este listada.
      </CardSection>
      <CardSection title="GALERÍA" button="Ver más" link="/" bg>
        Conoce nuestros trabajos anteriores.
      </CardSection>
      <ContactForm />
      <Footer />
    </div>
  );
}
