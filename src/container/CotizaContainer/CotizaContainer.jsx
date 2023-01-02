import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import seguros from "../../seguros.json";

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

            {/* <div className="grid px-10 pb-10"> */}
            {/* <div className="text-start">
                {seguros.map((e) => (
                  <p>{e.name}</p>
                ))}
              </div> */}
            {/* <div className="ml-5">
                {seguros.map((e) => (
                  <>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={e.name}
                        value={e.name}
                        className="w-4 h-4 text-blue-600 bg-gray-100"
                      />
                      <label
                        htmlFor={e.name}
                        className="ml-2 text-lg text-gray-500 dark:text-gray-300"
                      >
                        {e.name}
                      </label>
                    </div>
                  </>
                ))}
              </div> */}
            {/* </div> */}

            <div className="grid px-10 pb-10">
              <label
                htmlFor="msg"
                className="text-start py-2 font-medium text-sky-700"
              >
                Dejanos un mensaje con el seguro que desees cotizar
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
