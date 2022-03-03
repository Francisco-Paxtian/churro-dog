import React from 'react'
import {
    Link
} from "react-router-dom"

const FirstSection = () => {

    return (
        <div className=" bg-white my-0">
            <div className=" h-full">
                <div className="md:flex h-full items-stretch border border-grisesito">
                    <div className=" md:block md:w-1/2 h-1/2 bg-white p-10 lg:h-full lg:flex flex items-center justify-center">
                        <img
                            src={require("../assets/pitbull.png")}
                            className="img1 "
                            alt="churrodog perro feliz"
                        ></img>
                    </div>
                    <div className=" md:block md:w-1/2  bg-white p-10 lg:h-full lg:flex flex items-center justify-center">
                        <div>
                            <h2 className=" text-2xl px-3 md:px-10 md:mt-0 md:text-2xl lg:text-4xl lg:mt-16 2xl:text-6xl 2xl:mt-20 text-slate-800  ">
                                <a className="underline  decoration-rojito font-bold">
                                    ChurroDog
                                </a>{" "}
                                es un alimento con causa, cada compra que tú haces se refleja
                                en alimento para un perrito en situación de refugio.
                            </h2>
                            <div class="my-12">
                                <Link to="/productos" className="bg-rojito hover:bg-rojitoSubidito text-white font-semibold py-2 px-10 mx-2 my-5 md:px-10 md:mx-9 lg:py-4 lg:px-20 lg:mx-9 lg:my-10   rounded-full">
                                    Comprar ahora
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FirstSection