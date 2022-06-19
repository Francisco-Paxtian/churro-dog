import React, { useState, useEffect } from "react";
import Product from "../components/_product";
import { getUserCurrent } from '../api/auth'
import axios from "axios";
import Swal from "sweetalert2";
import {
  Link
} from "react-router-dom"


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState('')

  useEffect(() => {
    getProducts();
    _getUserCurrent()
  }, []);


  const _getUserCurrent = async () => {
    const userCurrent = await getUserCurrent()
    setUser(userCurrent)
    if (user.length === 0) alertAcount();
  }



  const getProducts = async () => {
    try {
      await axios
        .get(`api/v1/products/`)
        .then((res) => {
          setProducts(res.data);
          setLoader(false);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } catch (error) { }
  };

  const alertAcount = () => {
    // Swal.fire({
    //   icon: 'warning',
    //   title: 'Churro amigo necesitas registrarte!!',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
  }

  return (

    <div>
      
      <div className="contenedor padre  w-auto h-auto mb-20 sm:w-[95%] margin-0-auto ">
        <div className="w-full h-[auto] bg-white mx-auto">
          <div className="p-10">
            <h1 className="text-xl lg:text-4xl 2xl:text-4xl  font-black text-black">
              Nuestros p<a className="underline decoration-rojito">roductos</a>
            </h1>
          </div>
          {loader && (
            <div className="w-full flex justify-center items-center content-center">
              <img
                src={require("../assets/perroEsperando.gif")}
                alt="Funny image"
              />
            </div>
          )}
          <div class="container mx-auto">
            <div className="contenedor-padre w-full h-auto grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
              {products.map((data) => {
                return <Product key={data._id} product={data} />;
              })}
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Products;
