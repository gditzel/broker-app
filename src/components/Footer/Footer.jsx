import proteccionDeDatos from "../../assets/img/dataweb2.jpeg";
import ArrowTop from "../../utils/svg/ArrowTop";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="bg-black sm:flex justify-center items-center">
        <div className="flex justify-center">
          <div className="w-24 p-5">
            <a
              href="http://qr.afip.gob.ar/?qr=BFbVmuYJUO6NYxNZZ1MPXA,,"
              target="_F960AFIPInfo"
            >
              <img
                src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg"
                border="0"
                alt="Data fiscal"
              />
            </a>
          </div>
          <div className="w-52 my-auto p-5">
            <a
              href="https://www.argentina.gob.ar/aaip/datospersonales/reclama/23424961574--RL-2022-109639285-APN-DNPDP#AAIP"
              rel="noreferrer"
              target="_blank"
            >
              <img src={proteccionDeDatos} alt="Proteccion de datos" />
            </a>
          </div>
        </div>
        <div className="text-center text-teal-100 font-montserrat">
          <h1>Tamara G. Luque</h1>
          <p>Matricula Nacional N° 92310</p>
        </div>
        <div className="flex justify-center">
          <h1 className="text-gray-400 p-5 font-montserrat">
            &#169; IntegralAsseg <span className="text-sm">2022</span>
          </h1>
          <button onClick={scrollTop}>
            <div className="bg-orange-400 rounded-full p-2 text-teal-100">
              <ArrowTop />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
