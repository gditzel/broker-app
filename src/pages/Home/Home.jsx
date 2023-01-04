import Banner from "../../assets/img/banner.jpg";
import Wpp from "../../assets/img/wpp.png";
import CardIconContainer from "../../container/CardIconContainer/CardIconContainer";
import ContactContainer from "../../container/ContactContainer/ContactContainer";
import CotizaContainer from "../../container/CotizaContainer/CotizaContainer";

const Home = () => {
  return (
    <>
      <div>
        <div
          className="absolute w-full text-center h-screen bgbg isolate after:absolute after:-z-10 after:inset-0
        after:opacity-70 after:bg-sky-50 after:content"
        >
          <h1 className="text-sky-700 font-bold text-4xl mt-40 mb-12 xl:text-6xl">
            Protegemos lo que más querés
          </h1>
          <p className="px-5 text-xl md:text-2xl">
            Podemos ayudarte a encontrar la cobertura que más te convenga
          </p>
          <a href="#Cotiza">
            <button className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-3 px-5 w-52 mt-12 md:text-2xl rounded-lg">
              Cotizá ahora
            </button>
          </a>
        </div>
        <img
          src={Banner}
          alt="Banner"
          className="h-screen w-screen object-cover"
        />
      </div>

      <section id="Coberturas">
        <h1 className="text-4xl md:text-6xl font-bold py-10 text-center">
          Coberturas
        </h1>
        <CardIconContainer />
      </section>

      <section id="Contacto">
        <ContactContainer />
      </section>

      <section id="Cotiza">
        <CotizaContainer />
      </section>

      <div className="fixed top-96 right-0 left-0 z-20">
        <a
          href="https://wa.link/4mw910"
          className="absolute z-50 right-0 mt-80 mr-10 md:mt-96"
          rel="noreferrer"
          target="_blank"
        >
          <img src={Wpp} alt="Whatsapp" />
        </a>
      </div>
    </>
  );
};

export default Home;
