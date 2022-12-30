import emailjs from "emailjs-com";
import { useRef } from "react";

const CotizaContainer = () => {
  const form = useRef();
  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hjhmq3t",
        "template_2ezpekb",
        form.current,
        "AIb21sO4WASqiL1oy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(window.location.reload(false));
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-sky-700 pt-10">
          Cotización online
        </h1>
        <p className="my-10 text-gray-600">
          Completa el formulario y te estaremos respondiendo a la brevedad.
        </p>

        <div className="mx-auto md:w-7/12">
          <form ref={form} onSubmit={enviarEmail}>
            <div className="grid px-10">
              <label
                htmlFor="name"
                className="text-start py-2 font-medium text-sky-700"
              >
                Nombre y Apellido
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-sky-50 border border-sky-400"
              />
            </div>

            <div className="grid px-10 my-5">
              <label
                htmlFor="address"
                className="text-start py-2 font-medium text-sky-700"
              >
                Domicilio
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="bg-sky-50 border border-sky-400"
              />
            </div>

            <div className="grid px-10 my-5">
              <label
                htmlFor="locality"
                className="text-start py-2 font-medium text-sky-700"
              >
                Localidad
              </label>
              <input
                type="text"
                name="locality"
                id="locality"
                className="bg-sky-50 border border-sky-400"
              />
            </div>

            <div className="grid px-10 my-5">
              <label
                htmlFor="province"
                className="text-start py-2 font-medium text-sky-700"
              >
                Provincia
              </label>
              <input
                type="text"
                name="province"
                id="province"
                className="bg-sky-50 border border-sky-400"
              />
            </div>

            <div className="grid px-10 my-5">
              <label
                htmlFor="code"
                className="text-start py-2 font-medium text-sky-700"
              >
                Código Postal
              </label>
              <input
                type="number"
                name="code"
                id="code"
                className="bg-sky-50 border border-sky-400"
              />
            </div>

            <div className="grid px-10 my-5">
              <label
                htmlFor="tel"
                className="text-start py-2 font-medium text-sky-700"
              >
                Teléfono{" "}
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                className="bg-sky-50 border border-sky-400"
              />
            </div>

            <div className="grid px-10 my-5">
              <label
                htmlFor="email"
                className="text-start py-2 font-medium text-sky-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-sky-50 border border-sky-400"
              />
            </div>

            <div className="grid px-10 pb-10">
              <h1 className="text-start mb-5 font-semibold text-gray-600">
                Dejanos un mensaje con el seguro que desees cotizar
              </h1>
              <div className="text-start">
                <p>Automotor</p>
                <p>Combinado Familiar</p>
                <p>Bicicletas</p>
                <p>Integral de comercio</p>
              </div>
              {/* <div className="ml-5">
                <div className="flex items-center">
                  <input
                    id="automotor"
                    name="automotor"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="automotor"
                    className="ml-2 text-lg text-gray-500 dark:text-gray-300"
                  >
                    Automotor
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="familia"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="familia"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Combinado familiar
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="bicicleta"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="bicicleta"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Bicicletas
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="comercio"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="comercio"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Integral de comercio
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="personales"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="personales"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Accidentes personales
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="art"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="art"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    ART
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="tecnico"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="tecnico"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Seguro técnico
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="civil"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="civil"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Responsabilidad civil
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="caucion"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="caucion"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Seguro de caución
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="embarcacion"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="embarcacion"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Embarcaciones
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="transporte"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="transporte"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Transportes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="vida"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100"
                  />
                  <label
                    htmlFor="vida"
                    className="ml-2 text-md text-gray-500 dark:text-gray-300"
                  >
                    Vida
                  </label>
                </div>
              </div> */}
            </div>

            <div className="grid px-10 pb-10">
              <label
                htmlFor="msg"
                className="text-start py-2 font-medium text-sky-700"
              >
                Mensaje
              </label>
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="10"
                className="bg-sky-50 border border-sky-400"
              ></textarea>
            </div>

            <div className="md:text-start md:ml-10">
              <button
                type="submit"
                className="px-10 py-2 rounded bg-sky-600 mb-10 text-white"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CotizaContainer;
