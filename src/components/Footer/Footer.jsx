import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-52 sm:flex justify-around items-center">
        <h1 className="text-gray-400 p-5">
          &#169; IntegralAsseg <span className="text-sm">2022</span>
        </h1>
        <div className="flex">
          <div className="h-22 w-16 bg-white p-5 ml-5">Data fiscal</div>
          <div className="h-16 w-16 bg-white p-5 ml-5">PDP</div>
          <div className="h-10 w-20 bg-white p-5 ml-5">Data</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
