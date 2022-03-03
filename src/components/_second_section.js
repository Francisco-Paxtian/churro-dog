import React from 'react'

const SecondSection = () => {

    return (
        <div className="bandera  my-0 md:h-auto h-auto p-14 py-44 lg:h-auto flex content-center justify-center">
            <div class="md:flex md:space-x-9 space-y-9  lg:space-x-9 lg:space-y-0 content-center justify-center">
                <div className="shadow-2xl font-medium shadow-black rounded-xl bg-white p-10  w-72 h-auto flex items-center justify-center lg:w-2/6">
                    <p className="lg:text-xl">
                        La mayoría de alimentos comerciales agregan un gran cantidad de
                        vegetales a su fórmula convirtiéndolos en una dieta para animales
                        omnívoros que a la larga pueden perjudicar la salud de tu lomito,
                        es por esto que ChurroDog vuelve a lo natural agregando más carne
                        que ningún otro alimento existente en el mercado
                        <a class="underline decoration-rojito font-bold">
                            {" "}
                            80% proteína y 20% carbohidratos (arroz y maíz).
                        </a>
                    </p>
                </div>
                <div className=" shadow-2xl font-medium shadow-black rounded-xl bg-white p-10  w-72 h-auto grid content-center items-center justify-center lg:w-2/6">
                    <p className="lg:text-xl">
                        Con ChurroDog{" "}
                        <a class="underline decoration-rojito font-bold">
                            {" "}
                            ayudarás a que tu peludo fortalezca sus huesos, músculos y
                            cartílagos
                        </a>{" "}
                        promoviendo así un nivel óptimo de energía y vitalidad,
                        fortalecerá su pelaje haciéndolo mas brilloso y por su alta
                        digestibilidad ayuda a que el perro produzca menos cantidad de
                        excremento con heces más firmes, sólidas, bien formadas, en poca
                        cantidad y con baja frecuencia.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SecondSection