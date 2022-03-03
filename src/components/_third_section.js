import React from 'react'

const ThirdSection = () => {

    return (
        <div className="informacion lg:flex w-full lg:h-[80vh] xl:h-[80vh] bg-slate-900  ">
            <div className=" w-screen lg:w-3/4 h-full xl:p-20 bg-white flex content-center items-center justify-center">
                <img
                    src={require("../assets/PLATO CHURRITO SOLO.png")}
                    className="imgProducto xl:h-auto lg:w-8/12 my-10  h-96 shadow-2xl shadow-[rgb(176,176,176)] rounded-lg "
                    alt="churrodog perro feliz"
                ></img>
            </div>
            <div className="w-full h-full bg-white flex content-center items-center p-10 justify-center">
                <div className="  shadow-lg  lg:w-[80%] p-10 h-auto rounded-xl border border-rojito">
                    <h1 className="lg:text-2xl text-left italic">
                        No te has preguntado
                    </h1>
                    <br></br>
                    <h1 className="text-xl lg:text-4xl text-left font-bold">
                        ¿Por qué en forma de churro?
                    </h1>
                    <br></br>
                    <p className="text-left lg:text-2xl">
                        La forma específica de churrito, tiene como objetivo principal
                        compactar la proteína (harina de carne) con el arroz cocido en una
                        mezcla homogénea que permita mezclar los componentes para que las
                        mascotas en cada bocado consuman la cantidad ideal de nutrientes
                        necesarios para su desenvolvimiento en su vida diaria.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection