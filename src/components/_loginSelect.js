import React from "react";
import { Link } from "react-router-dom";

const LoginSelect = () => {
  return (
    <div className="bg-white w-full h-auto py-10 mb-20">
      <div className=" w-full h-full flex justify-center items-center content-center">
        <div className=" rounded-xl bg-transparent w-[80%] h-[auto] lg:w-[35%] lg:h-[80%] flex justify-center items-center content-center">
          <div class="max-w-2xl bg-gray-200   py-10 px-5 m-auto w-full mt-10 rounded-xl">
            <div class="text-3xl mb-6 text-center ">
              <h2 className=" text-2xl px-2 md:px-10 md:mt-0 md:text-2xl lg:text-3xl lg:mt-5 2xl:text-5xl 2xl:mt-5 text-left text-slate-800 font-bold ">
                Hola, que gusto verte!
              </h2>
            </div>
            <hr></hr>
            <div class="  ">
              <div className="bg-transparent h-[40vh] w-[100%] text-center text-azulito mb-12 ">
                <Link to={"/iniciar-sesion"}>
                  <button
                    type="button"
                    class="m-2 text-azulito bg-white hover:bg-azulito hover:text-white transition ease-in-out delay-75 animate-fade-in-down font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[90%] h-1/2"
                  >
                    ¿Ya eres churro cliente?
                    <h1 className="underline decoration-rojito">
                      {" "}
                      Inicia sesión
                    </h1>
                  </button>
                </Link>
                <Link to={"/registro"}>
                  <button
                    type="button"
                    class="m-2 text-azulito bg-white hover:bg-azulito hover:text-white transition ease-in-out delay-75 animate-fade-in-down text-2xl font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 md:w-[90%] h-1/2"
                  >
                    ¿Aún no estás registrado?
                    <h1 className="underline decoration-rojito"> Registrate</h1>
                  </button>
                </Link>
              </div>
              <hr></hr>

              {/* <div class="col-span-2 text-left ">
                <button class="py-3 px-6 bg-rojito text-white font-bold w-full sm:w-32 rounded-2xl">
                  Inicia sesión
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginSelect;
