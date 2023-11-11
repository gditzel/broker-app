import { useState } from "react";

import CloseIcon from "../../utils/svg/CloseIcon";
import HamIcon from "../../utils/svg/HamIcon";
import Logo from "../../assets/img/Logo.jpeg";

import links from "../../utils/json/links.json";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const onClickMobile = () => {
    if (openMenu ? setOpenMenu(false) : setOpenMenu(true));
  };

  return (
    <>
      <header className="md:flex items-center justify-around sticky top-0 left-0 right-0 border-b z-10 bg-white">
        <div className="flex items-center justify-between">
          <a href="/">
            <img className="h-32" src={Logo} alt="Logo" />
          </a>
          <div className="mr-2 mb-2 flex justify-between md:absolute md:top-0 md:right-0 md:m-7">
            <div className="flex gap-3 md:gap-10">
              <button onClick={onClickMobile} className="mt-1 md:hidden">
                {openMenu ? <HamIcon /> : <CloseIcon />}
              </button>
            </div>
          </div>
        </div>

        {!openMenu ? (
          <>
            <ul className="absolute left-0 top-0 h-screen w-2/3 animate-leftAnimation bg-white text-center font-semibold text-lg md:hidden z-20 font-montserrat">
              {links.map((e) => (
                <li onClick={onClickMobile} className="mt-20" key={e.name}>
                  <a href={e.ref}>{e.name}</a>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div className="items-center hidden sm:ml-6 md:block w-96">
                <ul className="flex justify-between md:text-xl font-montserrat">
                  {links.map((e) => (
                    <li className="hover:underline" key={e.name}>
                      <a href={e.ref}>{e.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Navbar;
