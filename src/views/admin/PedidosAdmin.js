import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import UserOrder from "../../components/admin/_userOrder";
import AddressOrder from "../../components/admin/_addressOrder";
import SelectStatus from "../../components/admin/_selectStatus";
import { updateStatusOrder } from '../../api/cart'

const PedidosAdmin = () => {
  const status = "recibido";
  const cuenta = false;
  const [loader, setLoader] = useState(true);
  const [orders, setOrders] = useState([])


  const deleteConfirm = () => {
    Swal.fire({
      title: "¿Quieres eliminar este elemento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Borrado", "Se ha borrado el pedido", "success");
      }
    });
  };
  useEffect(() => {
    _getOrders()
  }, []);

  const _getOrders = async () => {
    await axios
      .get(`api/v1/order/`)
      .then((res) => {
        setOrders(res.data)
        setLoader(false)
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }



  const _updateStatusOrder = async (order_id, selectedOption) => {
    await updateStatusOrder({ order_id, selectedOption, churroAlerSuccess, _getOrders })
  }
  const churroAlerSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro datos actulizados con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="bg-white flex justify-center  mt-5">
      <div className=" w-[90%] lg:w-[60%] h-auto">
        <div class=" lg:w-[100%] h-full shadow-lg bg-white p-10 rounded-lg grid grid-cols-1">
          <div className="flex mt-5 ">
            <div className="w-[50%] bg-white ">
              <h1 className="lg:text-3xl 2xl:text-3xl mt-5 mb-10  font-bold">
                Pedidos
              </h1>
            </div>

          </div>

          <hr />
          {loader && (
            <div className="w-full flex justify-center items-center content-center">
              <img
                src={require("../../assets/perroEsperando.gif")}
                alt="Funny image"
              />
            </div>
          )}
          <div className="contenedor-productos">
            {orders.map((data) => {
              return <div class=" producto mt-10  lg:w-[100%] h-auto shadow-lg bg-grisesitoFuertito text-azulito text-lg  text-left p-2 pb-10 pt-5 lg:p-5 rounded-lg lg:flex">
                <div className="text-sm   bg-grisesitoFuertito w-[100%] lg:w-[60%] h-auto p-0">
                  <ul className="p-5 leading-1">
                    {data.products_cart.map((data) => {
                      return <div>
                        <li className="font-bold mb-1">
                          Producto: <a className="font-normal	"> {data.name} </a>{" "}
                        </li>
                        <li className="font-bold mb-3">
                          Cantidad:<a className="font-normal	"> {data.quantity}</a>{" "}
                        </li>
                      </div>

                    })}

                    <li className="font-bold mb-3">
                      Nombre: <a className="font-normal	"> <UserOrder user_id={data.user_id}></UserOrder></a>{" "}
                    </li>

                    <AddressOrder address_id={data.address_id} />

                  </ul>
                </div>
                <div className="bg-grisesitoFuertito w-[100%] lg:w-[40%] flex">
                  <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                    <h1 className="text-center font-semibold">Estatus</h1>
                    <div className="text-center ">
                      {data.status === "0" ? <div> En proceso</div>
                        : data.status === "1" ? <div> Enviado</div>
                          : <div> Aceptado</div>}
                      <form className="mt-4">
                        <SelectStatus order_id={data._id} updateStatus={_updateStatusOrder} />
                      </form>
                    </div>
                  </div>
                  {/* <div className="contenedor-padre bg-grisesitoFuertesito w-[50%] lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                    <h1 className="text-center font-semibold">Acciones</h1>
                    <div className=" w-[100%]  text-center">
                      <a onClick={() => { }} className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                        {" "}
                        <ion-icon name="create"></ion-icon>
                      </a>
                      <a
                        onClick={() => onChangeSelect()}
                        className="text-xl lg:text-2xl cursor-pointer px-1 "
                      >
                        {" "}
                        <ion-icon
                          style={{ color: "red" }}
                          name="trash"
                        ></ion-icon>
                      </a>
                      <a className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                        {" "}
                        <ion-icon name="bookmark"></ion-icon>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosAdmin;
