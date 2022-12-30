import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactContainer = () => {
  const form = useRef();
  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hjhmq3t",
        "template_ycb4819",
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
      <div className="text-center bg-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold pt-10">Contacto</h1>
        <p className="my-10 text-gray-600">
          Completa el formulario y te estaremos respondiendo a la brevedad.
        </p>
        <div className="md:flex mx-auto md:w-11/12 lg:w-10/12">
          <div className="md:text-start md:w-96 space-y-5">
            <p className="font-semibold text-xl text-gray-600">
              Tel:
              <span className="text-sky-900 text-sm"> 011 15-5045-2567</span>
            </p>
            <p className="font-semibold text-xl text-gray-600">
              Email:
              <span className="text-sky-900 text-sm">
                {" "}
                gonza.ditzel@hotmail.com
              </span>
            </p>
            <p className="font-semibold text-xl text-gray-600 pb-10">
              IG
              <span className="text-sky-900 text-sm"> @gonzaditzel</span>
            </p>
          </div>

          <div className="w-screen">
            <form ref={form} onSubmit={enviarEmail}>
              <div className="grid px-10">
                <label
                  htmlFor="name"
                  className="text-start py-2 font-medium text-sky-700"
                >
                  Nombre
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
