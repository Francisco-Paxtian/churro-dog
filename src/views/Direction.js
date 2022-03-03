import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getProductsCartApi, getTotalCartAPi, addIdAddressApi, getAddressApi } from "../api/cart";
import { getUserCurrent, createAddress } from '../api/auth'
import axios from "axios";
const Direction = () => {

  const [total, setTotal] = useState([])
  const [products, setProducts] = useState([])
  const [address, setAddress] = useState([])
  const [user, setUser] = useState('')
  const [loader, setLoader] = useState(true)
  const [idAddress, setIdAddress] = useState('')

  useEffect(() => {
    getTotal()
    getProducts()
    _getUserCurrent()
    getIdAddress()
  }, [])

  const _getUserCurrent = async () => {
    const userCurrent = await getUserCurrent()
    setUser(userCurrent)
    getAddressById(userCurrent._id)
  }

  const getAddressById = async (user_id) => {
    try {
      await axios
        .get(`api/v1/address/${user_id}`)
        .then((res) => {
          setAddress(res.data);
          setLoader(false)
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } catch (error) { }
  }

  const getTotal = async () => {
    const totalApi = await getTotalCartAPi()
    setTotal(totalApi)

  }

  const getProducts = async () => {
    const productsCart = await getProductsCartApi()
    setProducts(productsCart.length)
    // setLoader(false)
  }

  const getIdAddress = async () => {
    const addresId = await getAddressApi()
    setIdAddress(addresId)
  }

  const _addIdAddress = async (id_address) => {
    addIdAddressApi(id_address)
    getIdAddress()
  }

  const goToMetodPago = () => {
    if (idAddress === null) {
      Swal.fire({
        icon: 'error',
        title: 'Faltan tus churro direccion',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      window.location.href = "/metodo-de-pago"
    }
  }

  const churroAlerSuccessAddress = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro direcion añadido con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const direccion = () => {
    Swal.fire({
      title: "Agrega una dirección",
      html: `<input type="text" id="calle" class="swal2-input" placeholder="Calle con numero de casa">
        <input type="text" id="colonia" class="swal2-input" placeholder="Colonia">
        <input type="text" id="codigo" class="swal2-input" placeholder="Codigo postal">
        <input type="text" id="ciudad" class="swal2-input" placeholder="Ciudad">
        <input type="text" id="numero" class="swal2-input" placeholder="Estado">
        <input type="text" id="referencia" class="swal2-input" placeholder="Referencia">
        <input type="text" id="telefono" class="swal2-input" placeholder="Telefono de quien recibe">
        <input type="text" id="recibe" class="swal2-input" placeholder="Quien recibe">`,
      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      focusConfirm: false,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#ff141e",
      preConfirm: () => {
        const calle = Swal.getPopup().querySelector("#calle").value;
        const colonia = Swal.getPopup().querySelector("#colonia").value;
        const numero = Swal.getPopup().querySelector("#numero").value;
        const ciudad = Swal.getPopup().querySelector("#ciudad").value;
        const codigo = Swal.getPopup().querySelector("#codigo").value;
        const referencia = Swal.getPopup().querySelector("#referencia").value;
        const telefono = Swal.getPopup().querySelector("#telefono").value;
        const recibe = Swal.getPopup().querySelector("#recibe").value;

        if (
          !calle ||
          !colonia ||
          !numero ||
          !ciudad ||
          !codigo ||
          !referencia ||
          !telefono ||
          !recibe
        ) {
          Swal.showValidationMessage(`Escribe tu direccion`);
        }
        return {
          calle: calle,
          colonia: colonia,
          numero: numero,
          ciudad: ciudad,
          referencia: referencia,
          telefono: telefono,
          codigo: codigo,
          recibe: recibe
        };
      },
    }).then((result) => {

      const calle = result.value.calle
      const colonia = result.value.colonia
      const numero = result.value.numero
      const ciudad = result.value.ciudad
      const codigo = result.value.codigo
      const referencia = result.value.referencia
      const telefono = result.value.telefono
      const recibe = result.value.recibe
      const user_id = user._id
      _createAddress(calle, colonia, numero, ciudad, codigo, referencia, telefono, recibe, user_id)

    });
  };

  const _createAddress = async (calle, colonia, numero, ciudad, codigo, referencia, telefono, recibe, user_id) => {
    await createAddress({ calle, colonia, numero, ciudad, codigo, referencia, telefono, recibe, user_id, _getUserCurrent, churroAlerSuccessAddress })
  }

  const direcciones = true;
  return (
    <div className="contenedor w-full h-auto bg-grisesitoFuertito lg:flex lg:justify-center lg:content-center lg:p-10">
      <div className=" w-full h-full lg:w-[70%] lg:flex  ">
        <div className="w-[100%] h-full lg:w-[70%] lg:h-full  ">
          <div className="contenedor-hijo-titulo w-full lg:w-[100%] h-auto bg-white ">
            <h1 className=" text-2xl lg:text-3xl 2xl:text-3xl pt-5 font-bold ml-10 p-3">
              Mis direcciones
            </h1>
            {direcciones ? (
              <div className="p-5 md:p-10 md:px-28 lg:px-10">
                <div className="direccion bg-grisesitoFuertito h-full flex items-center justify-center content-center my-2 rounded-xl">
                  <a onClick={() => direccion()} className=" cursor-pointer" >
                    {" "}
                    <ion-icon
                      style={{ fontSize: "3rem", color: "gray", padding: "10px" }}
                      name="add-circle-outline"
                    ></ion-icon>
                  </a>
                </div>
                {loader && (
                  <div className="w-full flex justify-center items-center content-center">
                    <img
                      src={require("../assets/perroEsperando.gif")}
                      alt="Funny image"
                    />
                  </div>
                )}
                {address.map((data) => {
                  return <div className="direccion bg-grisesitoFuertito h-full flex items-center my-2 rounded-xl">
                    <input
                      type="radio"
                      id="age1"
                      name="age"
                      value="30"
                      className="h-[3vh] w-[10%]"
                      onClick={() => { _addIdAddress(data._id) }}
                    />

                    <ul className="text-azulito py-10">
                      <li>
                        <h1 className="text-2xl font-bold">Calle: {data.street} </h1>
                      </li>
                      <li>
                        <h1>#1019</h1>
                      </li>
                      <li>
                        <h1>Col: {data.suburb}</h1>
                      </li>
                      <li>
                        <h1>Ciudad: {data.city}</h1>
                      </li>
                      <li>
                        <h1>CP: {data.cp}</h1>
                      </li>
                      <li>
                        <h1>Estado: {data.num_home}</h1>
                      </li>
                      <li>
                        <h1>Referencias: {data.reference} </h1>
                      </li>
                      <li>
                        <h1>Numero de quien reciba: +52 {data.cellphone_recibe} </h1>
                      </li>
                      <li>
                        <h1>Quien recibe: {data.recibe} </h1>
                      </li>
                    </ul>
                  </div>
                })}


              </div>
            ) : (
              <div>
                <div className="pedido flex justify-center items-center bg-white w-full h-[17vh] border-t-4 border-grisesitoFuertito text-center text-2xl">
                  <a onClick={() => direccion()} className=" cursor-pointer">
                    <h1 className="p-5">
                      Parece que aún no tienes direcciones, agrega una.
                    </h1>
                    <ion-icon
                      style={{ fontSize: "3rem", color: "gray" }}
                      name="add-circle-outline"
                    ></ion-icon>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-grisesitoFuertito w-[100%] h-auto lg:w-[30%] lg:h-[70vh]  ">
          <div className="productos-total p-10">
            <h1 className="font-bold text-xl">Resumen de la compra</h1>
            <hr></hr>
            <h1 className="py-5 font-medium">Productos :({products})</h1>
            <div className="flex">
              <h1 className=" font-medium">Total :</h1>
              <h1 className="text-right ">{'$'}{total}</h1>
            </div>
          </div>
          <div className="pedido bg-transparent w-full h-[15vh]  border-t-1 border-grisesitoFuertito flex justify-center ">

            <button onClick={() => goToMetodPago()} className="bg-rojito lg:h-[5vh] lg:w-[10vw] hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-3 mx-10 my-2 md:px-10 md:mx-9 lg:py-1 lg:px-5 lg:mx-20 lg:my-0   rounded-full">
              Continuar
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
