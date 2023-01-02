import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "../../assets/img/logo.png";

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="bg-white sticky top-0 left-0 right-0 border-b z-10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto md:px-32">
            <div className="flex justify-between items-center">
              <a href="/">
                <img className="h-20" src={Logo} alt="Logo" />
              </a>
              <div className="items-center hidden sm:ml-6 sm:block w-96">
                <ul className="flex justify-between">
                  <li>
                    <a href="#Coberturas">Coberturas</a>
                  </li>
                  <li>
                    <a href="#Contacto">Contacto</a>
                  </li>
                  <li>
                    <a href="#Cotiza">Cotizá ahora</a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="text-center">
              <ul className="text-gray-500 absolute bg-white px-3 py-2 w-screen h-72 text-base font-medium pt-12">
                <li className="mb-10">
                  <a href="#Coberturas">Coberturas</a>
                </li>
                <li className="mb-10">
                  <a href="#Contacto">Contacto</a>
                </li>
                <li>
                  <a href="#Cotiza">Cotizá ahora</a>
                </li>
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
