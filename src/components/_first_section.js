import React from 'react'
import {
    Link
} from "react-router-dom"

const FirstSection = () => {

    return (
        <div className=" bg-white my-0">
            <div className=" h-full">
                <div className="md:flex h-full items-stretch border border-grisesito">
                    <div className=" md:block md:w-2/3 h-1/3 bg-white p-10 lg:h-full lg:flex flex items-center justify-center">
                        <img
                            src={require("../assets/pitbull.png")}
                            className="h-[32rem]"
                            alt="churrodog perro feliz"
                        ></img>
                    </div>
                    <div className=" md:block md:w-1/2  bg-white p-10 lg:h-full lg:flex flex items-center justify-center">
                        <div>
                            <h2 className="font-semibold text-2xl px-3 md:px-10 md:mt-0 md:text-2xl lg:text-4xl lg:mt-16 2xl:text-5xl 2xl:mt-20 text-slate-800  ">
                                <a className="underline  decoration-rojito font-extrabold">
                                    ChurroDog
                                </a>{" "}
                                es un alimento con causa, cada compra que tú haces se refleja
                                en alimento para un perrito en situación de refugio.
                            </h2>
                            <div class="my-12">
                                <Link to="/productos" className="bg-rojito hover:bg-rojitoSubidito text-white font-semibold py-2 px-7 mx-2 my-5 md:mx lg:mx-9 lg:my-10   rounded-2xl">
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