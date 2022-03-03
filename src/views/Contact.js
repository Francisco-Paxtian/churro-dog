import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-200 w-full h-auto py-10">
      <div className=" w-full h-full flex justify-center items-center content-center">
        <div className=" rounded-xl bg-transparent w-[80%] h-[auto] lg:w-[35%] lg:h-[80%] flex justify-center items-center content-center">
          <div class="max-w-2xl bg-white  py-10 px-5 m-auto w-full mt-10 rounded-xl">
            <div class="text-3xl mb-6 text-center ">
              <h2 className=" text-2xl px-2 md:px-10 md:mt-0 md:text-2xl lg:text-3xl lg:mt-5 2xl:text-5xl 2xl:mt-5 text-left text-slate-800 font-bold ">
                Q
                <a className="underline  decoration-rojito font-bold">
                  ueremos escucharte
                </a>
              </h2>
            </div>

            <div class="grid grid-cols-2 gap-4 max-w-xl  m-auto">
              <div class="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  class="appearance-none block w-full lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 py-1 lg:py-3 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Nombre"
                />
              </div>

              <div class="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  class="appearance-none block w-full lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 py-1 lg:py-3 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Apellido"
                />
              </div>

              <div class="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  class="appearance-none block w-full lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 py-1 lg:py-3 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Email "
                />
              </div>
              <div class="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  class="appearance-none block w-full lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 py-1 lg:py-3 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Télefono"
                />
              </div>

              <div class="col-span-2">
                <div class="col-span-2 lg:col-span-1">
                  <textarea
                    type="text"
                    class="appearance-none block resize-none w-full lg:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 py-1 lg:py-3 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white"
                    placeholder="Escribe tu mensaje aquí"
                    rows="3"
                  />
                </div>
              </div>

              <div class="col-span-2 text-left ">
                <button class="py-3 px-6 bg-rojito text-white font-bold w-full sm:w-32 rounded-2xl">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
