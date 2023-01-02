import dataFiscal from "../../assets/img/DATAWEB.jpg";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-52 sm:flex justify-around items-center">
        <h1 className="text-gray-400 p-5">
          &#169; IntegralAsseg <span className="text-sm">2022</span>
        </h1>
        <div className="flex">
          <div className="w-24 p-5 ml-5">
            <a
              href="https://www.argentina.gob.ar/aaip/datospersonales/reclama/23424961574--RL-2022-109639285-APN-DNPDP#AAIP"
              rel="noreferrer"
              target="_blank"
            >
              <img src={dataFiscal} alt="dataFiscal" />
            </a>
          </div>
          {/* <div className="h-16 w-16 bg-white p-5 ml-5">PDP</div>
          <div className="h-10 w-20 bg-white p-5 ml-5">Data</div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
