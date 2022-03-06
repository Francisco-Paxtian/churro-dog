import React from 'react'

const SecondSection = () => {

    return (
        <div className="w-[90%] sm:w-[99%] margin-0-auto bandera  md:h-auto h-auto  py-24 px-2 md:px-16 lg:h-auto text-center">
            <div className='md:flex md:space-x-16'>
                {/* <div class="mb-10 md:mb-0 md:block w-[100%] bg-[#6FA6C7] text-white py-12 font-semibold text-sm md:text-sm lg:text-base xl:text-lg ">
                    <div>
                        <ion-icon style={{ fontSize: 40 }} name="trending-up-outline"></ion-icon>
                    </div>
                    Proteina de
                    32% -40%
                </div>
                <div class="mb-10 md:mb-0 md:block w-[100%] bg-[#4F8CAD] text-white py-12 font-semibold text-sm md:text-sm lg:text-base xl:text-lg ">
                    <div>
                        <ion-icon style={{ fontSize: 40 }} name="trending-up-outline"></ion-icon>
                    </div>
                    Proteina de
                    32% -40%
                </div>
                <div class="mb-10 md:mb-0 md:block w-[100%] bg-[#4F8CAD] text-white py-12 font-semibold text-sm md:text-sm lg:text-base xl:text-lg ">
                    <div>
                        <ion-icon style={{ fontSize: 40 }} name="trending-up-outline"></ion-icon>
                    </div>
                    Proteina de
                    32% -40%
                </div> */}


            </div>
            <div class="md:flex md:space-x-9 space-y-9  lg:space-x-9 lg:space-y-0 content-center justify-center">
                <div className=" font-medium shadow-black rounded-sm bg-white text-azulito p-10   h-auto flex items-center justify-center lg:w-auto">
                    <p className="lg:text-xl  ">
                        La mayoría de alimentos comerciales agregan un gran cantidad de
                        vegetales a su fórmula convirtiéndolos en una dieta para animales
                        omnívoros que a la larga pueden perjudicar la salud de tu lomito,
                        es por esto que ChurroDog vuelve a lo natural agregando más carne
                        que ningún otro alimento existente en el mercado
                        <a class="underline decoration-rojito font-black">
                            {" "}
                            80% proteína y 20% carbohidratos (arroz y maíz).
                        </a>
                    </p>
                </div>
                <div className="  font-medium shadow-white rounded-sm bg-white text-azulito p-10   h-auto grid content-center items-center justify-center lg:w-auto">
                    <p className="lg:text-xl">
                        Con ChurroDog{" "}
                        <a class="underline decoration-rojito font-black">
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