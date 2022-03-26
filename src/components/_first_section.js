import React from 'react'
import {
    Link
} from "react-router-dom"

const FirstSection = () => {

    return (
        <div className=" bg-white my-0 w-[90%] sm:w-[90%] margin-0-auto pb-8">
            <div className=" h-full">
                <div className="md:flex h-full items-stretch border border-grisesito">

                    <div className=" md:block md:w-2/5 h-1/3 bg-white p-10 lg:h-full lg:flex flex items-center justify-center">
                        <div>
                            <video
                                controls

                                className="md:h-[37rem] w-[100%]"
                                alt="churrodog perro feliz"
                            >
                                <source src={require("../assets/churro-clip-2.mp4")} type="video/mp4"></source>
                            </video >
                            <div className=" text-sm italic  mt-5 text-azulito">
                                Clientes satisfechos con ChurroDog
                            </div>
                        </div>
                    </div>
                    <div className=" md:block md:w-3/5  bg-white lg:h-full lg:flex flex items-center justify-center p-10 ">
                        <div>
                            <h2 className="font-bold text-2xl md:mt-0 md:text-2xl lg:text-2xl 2xl:text-3xl text-slate-800  ">
                                <a className="underline  decoration-rojito font-black text-5xl">
                                    ChurroDog
                                </a>{" "}
                                es un alimento con causa, cada compra que tú haces se refleja
                                en alimento para un perrito en situación de refugio.
                            </h2>
                            <div class="my-5">
                                <Link to="/tienda-en-linea" className="bg-rojito hover:bg-rojitoSubidito text-white font-semibold py-1 px-5 my-5 md:mx   rounded-2xl">
                                    Comprar ahora
                                </Link>
                            </div>

                            <div className="mt-12 md:flex md:space-x-6">
                                <div className="md:block md:w-1/2 ">
                                    <img src={require("../assets/infor-1.jpg")} alt="churro anuncio 1" />
                                </div>
                                <div className="md:block md:w-1/2 mt-5 md:mt-0">
                                    <img src={require("../assets/info-2.jpg")} alt="churro anuncio 2" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FirstSection