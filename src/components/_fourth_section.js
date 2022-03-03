import React from 'react'
import Product from './_product'

const FourthSection = () => {

    return (
        <div className="contenedor ">
            <div className="w-full h-[auto] bg-white mx-auto">
                <div className="p-10">
                    <h1 className="text-xl lg:text-4xl 2xl:text-5xl text-left font-bold text-black">
                        Nuestos productos
                        me<a className="underline decoration-rojito">
                            jores calificados
                        </a>
                    </h1>
                </div>
                <div class="container mx-auto">
                    <div className="contenedor-padre w-full h-auto grid grid-cols-2 lg:grid-cols-4 ">

                        <Product key="" product="{data}" />
                        <Product key="" product="{data}" />
                        <Product key="" product="{data}" />
                        <Product key="" product="{data}" />
                        {/* <Product />
                        <Product />
                        <Product />
                        <Product /> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthSection