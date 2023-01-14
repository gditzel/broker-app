import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import seguros from "../../utils/json/seguros.json";
import formulario from "../../utils/json/formulario.json";
import Swal from "sweetalert2";

const CotizaContainer = () => {
  const [fields, setFields] = useState();

  const clearForm = () => {
    setFields("");
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Debes escribir una dirección válida",
        timer: 1500,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_4tfm0ld",
        "template_namoi7u",
        form.current,
        "WNL0HoBrEPsC7aUTj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    Swal.fire({
      title: "Mensaje enviado con exito",
      icon: "success",
      timer: 1500,
    })
      .then(clearForm)
      .finally(
        // eslint-disable-next-line no-global-assign
        (setTimeout = () => {
          window.location.reload(true);
        }),
        5000
      );
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-sky-700 pt-10 font-montserrat">
          Cotización online
        </h1>
        <p className="my-6 text-gray-600 font-baskerville text-lg">
          Completa el formulario y te estaremos respondiendo a la brevedad.
        </p>

        <div className="mx-auto md:w-7/12 font-montserrat text-lg">
          <form ref={form} onSubmit={sendEmail}>
            {formulario.map((e) => (
              <div className="grid px-10" key={e.name}>
                <label
                  htmlFor={e.name}
                  className="text-start py-2 font-medium text-sky-700"
                >
                  {e.title}
                </label>
                <input
                  type={e.type}
                  name={e.name}
                  id={e.name}
                  value={fields}
                  className="bg-sky-50 border border-sky-400"
                  required
                />
              </div>
            ))}

            <div className="px-10 py-6">
              <div className="text-center border w-52 border-sky-400 text-sky-700 font-medium">
                <select
                  className="bg-sky-50"
                  name="seguro"
                  id="seguroID"
                  required
                  value={fields}
                >
                  <option className="text-sky-700 py-2 font-medium" value="">
                    Seleccioná tu seguro
                  </option>
                  {seguros.map((e) => (
                    <option
                      className="text-sky-700 py-2 font-medium"
                      value={e.name}
                      id="seguroID"
                      key={e.name}
                    >
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid px-10 pb-10">
              <label
                htmlFor="msg"
                className="text-start py-2 font-medium text-sky-700"
              >
                ¿Querés cotizar más de un seguro? Dejanos un mensaje
              </label>
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="10"
                className="bg-sky-50 border border-sky-400"
                value={fields}
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
