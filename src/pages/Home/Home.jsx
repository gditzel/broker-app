import Banner from "../../assets/img/banner.jpg";
import Wpp from "../../assets/img/wpp.png";
// import Banner2 from "../../assets/img/banner2.jpg";
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
            Podés relajarte
          </h1>
          <p className="px-5 text-xl">
            Te asesoramos en tu seguro para que puedas enfocarte en lo que de
            verdad importa
          </p>
          <a href="#Cotiza">
            <button className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-3 px-5 w-52 mt-12">
              Cotiza ahora
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
        <h1 className="text-center text-2xl my-10 xl:text-4xl">Coberturas</h1>
        <CardIconContainer />
      </section>

      <section id="Contacto">
        <ContactContainer />
      </section>

      <section id="Cotiza">
        <CotizaContainer />
      </section>

      <div className="fixed top-0 left-0 right-0 z-20 mt-96 md:mt-72">
        <a
          href="https://walink.co/c8315f"
          className="absolute z-10 right-0 m-5 mt-52 md:mt-80"
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
