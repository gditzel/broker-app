import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import formulario2 from "../../utils/json/formulario2.json";
import Swal from "sweetalert2";

import Phone from "../../utils/svg/Phone";
import Email from "../../utils/svg/Email";
import ig from "../../assets/img/ig.svg";

const ContactContainer = () => {
  const [fields, setFields] = useState();

  const clearForm = () => {
    setFields("");
  };

  const form = useRef();
  const enviarEmail = (e) => {
    e.preventDefault();

    const email = e.target.email2.value;

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
        "template_79co529",
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
      <div className="text-center bg-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold pt-10 text-sky-700 font-montserrat">
          Contacto
        </h1>
        <p className="my-6 text-gray-600 font-baskerville text-lg">
          Completa el formulario y te estaremos respondiendo a la brevedad.
        </p>
        <div className="md:flex mx-auto md:w-11/12 lg:w-10/12">
          <div className="md:text-start md:w-96 space-y-5 ml-5">
            <p className="font-semibold text-xl text-gray-600 flex gap-3">
              <Phone />
              <span className="text-sky-900 text-sm">
                <a href="tel:1164418231">11 6441-8231</a>
              </span>
            </p>
            <p className="font-semibold text-xl text-gray-600 flex gap-3">
              <Email />
              <span className="text-sky-900 text-sm">
                <a href="mailto:tamaragiselleluque@gmail.com">
                  tamaragiselleluque@gmail.com
                </a>
              </span>
            </p>
            <p className="font-semibold text-xl text-gray-600 pb-10 flex gap-3">
              <img src={ig} alt="Instagram" />
              <span className="text-sky-900 text-sm">
                <a
                  href="https://www.instagram.com/asseg.asesores/"
                  rel="noreferrer"
                  target="_blank"
                >
                  @asseg.asesores
                </a>
              </span>
            </p>
          </div>

          <div className="w-screen font-montserrat text-lg">
            <form ref={form} onSubmit={enviarEmail}>
              {formulario2.map((e) => (
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

              <div className="grid px-10 pb-10">
                <label
                  htmlFor="msg2"
                  className="text-start py-2 font-medium text-sky-700"
                >
                  Dejanos tu consulta en la caja de comentarios
                </label>
                <textarea
                  name="msg2"
                  id="msg2"
                  cols="30"
                  rows="10"
                  className="bg-sky-50 border border-sky-400"
                  value={fields}
                ></textarea>
              </div>

              <div className="md:text-start md:ml-10">
                <button className="px-10 py-2 rounded bg-sky-600 mb-10 text-white">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
