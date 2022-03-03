import React, { useState } from 'react'
import {
    Link
} from "react-router-dom"
const ProductCart = (props) => {

    return (
        <div className="pedido bg-white w-full h-auto md:h-auto  border-y-4 border-grisesitoFuertito  grid md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4">
            <div className="pedido-card  bg-black w-full h-auto   col-span-2  text-azulito grid grid-cols-4">
                <div className="pedido-foto bg-white w-full h-auto flex justify-center  items-center p-2">
                    <img
                        src={require("../assets/SACO 20 KILOS.jpg")}
                        className="img1 object-cover h-[80%] "
                        alt="churrodog perro feliz"
                    ></img>
                </div>

                <div className="pedido-info bg-white w-full h-auto col-span-3 ">
                    <ul className="p-5 leading-1">
                        <li className="font-bold lg:text-lg 2xl:text-2xl">
                            Producto: <a className="font-normal	">{props.product.name}</a>
                        </li>
                        <br></br>
                        <ul className="flex flex-row space-x-4 pb-0">
                            <li className="font-normal text-sm text-[#ff141e] cursor-pointer">
                                <a className="font-normal" onClick={() => props.deleteProduct(props.product._id)}>
                                    Eliminar
                                </a>
                            </li>
                            <li className="font-normal text-sm ">
                                <Link to="/tienda-en-linea" className="font-normal	">
                                    Seguir comprando
                                </Link>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>

            <div className="pedido bg-white w-full h-auto grid text-azulito items-center text-center">
                <h1>Cantidad</h1>
                <div className="bg-white w-auto h-auto flex gap-0 m-5  text-azulito">
                    <div className="text-azulito bg-white border-l-4 border-t-4 border-b-4 border-grisesitoFuertito w-[50%] h-full flex justify-center content-center items-center text-2xl ">
                        <button
                            onClick={() => props.deleteProductById(props.product._id)}
                            className="w-full h-full bg-white"
                        >
                            -
                        </button>
                    </div>
                    <div className="text-azulito bg-white border-y-4 border-grisesitoFuertito w-[50%] h-full  flex justify-center content-center items-center text-2xl ">
                        {props.product.quantity}
                    </div>
                    <div className=" text-azulito bg-black border-r-4 border-t-4 border-b-4 border-grisesitoFuertito w-[50%] h-full flex justify-center content-center items-center text-2xl  ">
                        <button
                            onClick={() => props.addProduct(props.product._id)}
                            className="w-full h-full bg-white"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="pedido text-azulito bg-white w-full h-auto text-lg font-semibold text-center">
                <h1 className="mt-4">Precio: <b>{"$"}{props.product.price}</b></h1>
                <h1 className="mt-6">Subtotal: <b>{"$"}{props.product.price * props.product.quantity}</b></h1>


            </div>
        </div>
    )
}

export default ProductCart