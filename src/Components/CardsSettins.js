import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { url, setHeaders } from "../api/index.js";
import axios from "axios";

export default function CardsSetings() {
  const [error, setError] = useState("");
  const [numberWallet, setNumberWallet] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(`${url}/wallet`, setHeaders());

      setNumberWallet(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(datos);

  useEffect(() => {
    getData();
  }, []);

  const showAlert = () => {
    swal({
      title: "Para Cambiar tu Contraseña",
      text: "Favor de comunicarte a este E-mail: correo@correo.com",
      icon: "info",
      button: "Aceptar",
      timer: "2000",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    console.log(form);
    if (form.password !== form.password2) {
      setError("Las contraseñas no coinciden o son incorrectas");
    } else {
      setError("");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row  justify-center my-12 ">
        <div className="flex flex-col md:w-1/3">
          <div className="w-full  my-3 lg:w-full  px-5 py-2 rounded-3xl bg-slate-100 h-full  shadow-2xl">
            <h2 className="text-2xl my-5 text-sky-600 ">Cambiar Contraseña</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col px-3 space-y-3"
            >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña Actual"
                className=" rounded-md p-1 w-full bg-transparent text-xl"
                required
              />
              <hr className=" border-black " />
              <input
                onClick={() => showAlert()}
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Nueva Contraseña"
                className=" rounded-md p-1 w-full bg-transparent text-xl"
                required
              />
              <hr className=" border-black " />
              <input
                type="password"
                name="newPassword2"
                id="newPassword2"
                placeholder="Repetir Nueva Contraseña"
                className=" rounded-md p-1 w-full bg-transparent text-xl"
                required
              />
              <hr className=" border-black " />
              <button
                type="submit"
                className="py-1 px-2 bg-sky-600  ml-auto rounded-full mt-4 text-2xl text-white"
              >
                Cambiar
              </button>
            </form>
          </div>
          {/* card info */}
          <div className="w-full   my-2 lg:w-full px-5 py-2 rounded-3xl h-full bg-slate-100 flex flex-col shadow-2xl">
            <h2 className="text-2xl my-5 text-sky-600 ">Info</h2>
            <h3>
              Numero de wallet:{" "}
              <span className="text-sky-900">
                {numberWallet
                  ? numberWallet[0]._id
                  : "xxx-xxx-xxx-xxx-xxxx-xxx-xxx"}
              </span>
            </h3>
          </div>
        </div>
        {/* card soporte */}
        <div className="w-full md:w-1/3 my-auto ">
          <div className="w-full  my-2 px-5 py-2 rounded-3xl ml-7 bg-slate-100 flex flex-col shadow-2xl ">
            <h2 className="text-2xl my-5 text-sky-600 ">Soporte</h2>
            <h3>
              Si tienes alguna duda o problema, puedes contactar con nosotros a
              traves de nuestro chat o por email o hablar con el soporte
            </h3>
            <h5>
              <span>1150594589</span>
              <a href="#">(julian)</a>
            </h5>
            <a href="https://api.whatsapp.com/send?phone=5491150594589">
              <button className="py-1 px-2 bg-sky-600  ml-auto rounded-full mt-4 text-2xl text-white">
                Contactar
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
