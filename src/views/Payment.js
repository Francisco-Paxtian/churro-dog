import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTotalCartAPi, createOrderApi, getAddressApi, getProductsCartApi } from "../api/cart";
import { getUserCurrent } from '../api/auth'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import Swal from "sweetalert2";

const stripePromise = loadStripe('pk_live_51KZ0gYAJZvnkY0NbHmFV9kVN86SH3wYZY1voSnNVrRkLKIZR9D6uN5XWgAtMYkvY3f0QaExP4c8IXHjC8Ol95exQ00iwAuyioa');

const Payment = () => {

  const [tarjeta, setTarjeta] = useState(true);
  const [total, setTotal] = useState([])
  const [products, setProducts] = useState([])
  const [user, setUser] = useState('')
  const [idAddress, setIdAddress] = useState('')

  useEffect(() => {
    _getUserCurrent()
    getTotal()
    getIdAddress()
    getProducts()
  }, [])

  const _getUserCurrent = async () => {
    const userCurrent = await getUserCurrent()
    setUser(userCurrent)
  }

  const getTotal = async () => {
    const totalApi = await getTotalCartAPi()
    setTotal(totalApi)
  }

  const getProducts = async () => {
    const productsCart = await getProductsCartApi()
    setProducts(productsCart)
  }

  const getIdAddress = async () => {
    const addresId = await getAddressApi()
    setIdAddress(addresId)
  }
  const churroAlerSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro pedido realizado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }


  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };

  const _createOrder = async (id, total, user_id, idAddress, products) => {
    await createOrderApi({ id, total, user_id, idAddress, products, goToAccount, churroAlerSuccess })
  }

  const goToAccount = () => {
    window.location.href = "/cuenta"
  }

  const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async e => {
      e.preventDefault(); //esto previene que el form se mande.
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      })

      if (!error) {
        const { id } = paymentMethod
        const user_id = user._id
        _createOrder(id, total, user_id, idAddress, products)
      } else {
        console.log(error);
      }
    };

    return <form onSubmit={handleSubmit}>
      <CardElement className="mb-10 bg-white p-6 w-full rounded-xl" />
      <button type="submit" className="bg-rojito h-auto w-full py-2 hover:bg-rojitoSubidito duration-500 text-white font-medium  rounded-full">
        Pagar
      </button>
    </form>
  }

  return (
    <div className="contenedor w-full h-auto bg-grisesitoFuertito lg:flex lg:justify-center lg:content-center lg:p-10">
      <div className=" w-full h-full lg:w-[70%] lg:flex  ">
        <div className="w-[100%] h-full lg:w-[70%] lg:h-full  ">
          <div className="contenedor-hijo-titulo w-full lg:w-[100%] h-auto bg-white ">
            <h1 className=" text-2xl lg:text-3xl 2xl:text-3xl pt-5 font-bold text-center p-3">
              Metodo de pago
            </h1>
            <div className="p-5 md:p-10 md:px-28 lg:px-10">

              <a className=" " >
                <div className="direccion bg-grisesitoFuertito h-full items-center my-2 rounded-xl p-5">
                  <ul className="text-azulito py-10">
                    <li>
                      <h1 className="text-2xl font-bold mb-10">
                        Pago con tarjeta <ion-icon style={{ fontSize: "25px" }} name="card-outline"></ion-icon>
                      </h1>
                      <h1
                        className={` ${tarjeta ? "text-2xl " : " hidden text-sm italic"
                          }`}
                      >
                        <Elements stripe={stripePromise} >
                          <CheckoutForm />
                        </Elements>
                      </h1>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-grisesitoFuertito w-[100%] h-auto lg:w-[30%] lg:h-[70vh]  ">
          <div className="productos-total p-10">
            <h1 className="font-bold text-xl mb-3">Total a pagar:</h1>
            <hr></hr>
            <div className="flex">
              <h1 className=" font-medium text-right">{'$'}{total}</h1>
            </div>
          </div>
          <div className="pedido bg-transparent w-full h-[15vh]  border-t-1 border-grisesitoFuertito flex justify-center ">
            {/* <Link to={"/payment-method"}>
              
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
