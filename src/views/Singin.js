import React, { useState } from 'react'
import "./css/one.css";
import { sinGinApi } from '../api/auth'
import Swal from "sweetalert2";

const Singin = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cellphone, setCellphone] = useState('')

  const _sinGin = async () => {
    if (email === "" || password === "" || fullName === "" || cellphone === "") {
      churroAlertNotData()
    } else {
      await sinGinApi({ fullName, cellphone, email, password, churroAlerError, churroAlerSuccess, goToLogin })
    }

  }

  const churroAlerSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido churro compañero!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const churroAlerError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Ya churro existe el correo',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const goToLogin = () => {
    window.location.href = "/iniciar-sesion"
  }


  const churroAlertNotData = () => {
    Swal.fire({
      icon: 'error',
      title: 'Faltan tus churro datos',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="one  w-full h-auto flex ">
      <div className="bg-white md:w-1/2 h-full hidden lg:block text-left p-20">
        <h1 className=" ml-[20%] font-bold text-azulito lg:text-4xl 2xl:text-6xl ">
          Hola humano!
        </h1>
        <img
          src={require("../assets/beagle.png")}
          className="lg:w-[70%] 2xl:w-[50%] ml-[20%] "
          alt="churrodog perro feliz"
        ></img>
      </div>
      <div className="bg-white w-screen lg:w-1/2 h-full  ">
        <div className=" w-full h-full flex  justify-center items-center lg:inline ">
          <div className="lg:m-20 lg:mt-1   w-[90%] lg:w-[60%] 2xl:w-[50%] h-[80%] p-10   ">
            <h1 className="text-4xl font-semibold md:py-10 ">Sé un churro amigo</h1>
            <form className="mt-5 lg:mt-0">
              <label>
                <input
                  placeholder="Nombre completo"
                  type="text"
                  name="nombre"
                  onChange={data => setFullName(data.target.value)}
                  className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </label>
              <label>
                <input
                  placeholder="Telefono"
                  type="text"
                  name="telefono"
                  onChange={data => setCellphone(data.target.value)}
                  className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </label>
              <label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={data => setEmail(data.target.value)}
                  className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </label>
              <label>
                <input
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  onChange={data => setPassword(data.target.value)}
                  className="apearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded px-4 py-3 mb-3 lg:py-4 2xl:py-6 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </label>
              <input
                onClick={() => { _sinGin() }}
                type="button"
                value="Registrate"
                className=" block w-full lg:w-full bg-azulito text-white rounded px-4 py-3 lg:py-4 2xl:lg:py-6 lg:px-4 lg:mb-3 lg:mt-10 cursor-pointer"
              />

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Singin;
