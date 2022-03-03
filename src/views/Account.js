import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import LoginSelect from "../components/_loginSelect";
import { getUserCurrent, updateUser, signOff, createAddress } from '../api/auth'
import Address from "../components/_address";
import axios from "axios";
const Account = () => {
  const status = "recibido";
  const [user, setUser] = useState('')
  const [address, setAddress] = useState([])
  const [orders, setOrders] = useState([])
  const [loader, setLoader] = useState(true)


  useEffect(() => {
    _getUserCurrent()
  }, [])
  const _getUserCurrent = async () => {
    const userCurrent = await getUserCurrent()
    setUser(userCurrent)
    getAddressById(userCurrent._id)
    getOrderById(userCurrent._id)
  }

  const _updateUser = async (fullname, cellphone) => {
    const user_id = user._id
    await updateUser({ fullname, cellphone, user_id, _getUserCurrent, churroAlerSuccess })
  }

  const _signOff = async () => {
    await signOff({ churroAlerOff, goToHome })
  }

  const goToHome = () => {
    window.location.href = "/"
  }

  const getAddressById = async (user_id) => {
    try {
      await axios
        .get(`api/v1/address/${user_id}`)
        .then((res) => {
          setAddress(res.data);
          setLoader(false)
          console.log(res.data);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } catch (error) { }
  }

  const getOrderById = async (user_id) => {
    await axios
      .get(`api/v1/order/${user_id}`)
      .then((res) => {
        setOrders(res.data)
        // console.log(res.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
  const churroAlerOff = () => {
    Swal.fire({
      icon: 'info',
      title: 'Churro vuelve pronto!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const churroAlerSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro datos actulizados con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const churroAlerSuccessAddress = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro direcion añadido con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const editarUsuario = (user) => {
    Swal.fire({
      title: "Edita tus datos",
      html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre completo" value="${user.fullname}">
        <input type="text" id="telefono" class="swal2-input" placeholder="Telefono" value="${user.cellphone}">
        `,

      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      focusConfirm: false,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#ff141e",

    }).then((result) => {
      const fullname = Swal.getPopup().querySelector("#nombre").value;
      const cellphone = Swal.getPopup().querySelector("#telefono").value;
      //const correo = Swal.getPopup().querySelector("#correo").correo;
      if (fullname == '' || cellphone == '') {
        Swal.fire({
          icon: 'error',
          title: 'Faltan tus churro datos',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        if (result.isConfirmed) {
          _updateUser(fullname, cellphone)
        }

      }
    });
  };

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
  return (
    <div className="bg-white ">
      {user.length === 0 ? (
        <LoginSelect></LoginSelect>
      ) : (

        <div class="grid grid-cols-1 lg:flex p-5 gap-4 mb-20">
          <div class=" lg:w-[70%] h-full shadow-lg bg-white p-10 rounded-lg grid grid-cols-1">
            <div class=" lg:w-[70%] pt-5 h-[20vh]  bg-white text-azulito   text-left lg:p-10 ">
              <div className="mt-4 bg-white w-auto h-auto flex">
                <h1 className="font-bold 2xl:text-3xl">{user.fullname}</h1>
                <button onClick={() => editarUsuario(user)}>
                  <ion-icon
                    className="text-2xl"
                    style={{ marginLeft: 15 }}
                    name="create-outline"
                  ></ion-icon>
                </button >
              </div>
              <div className="mt-4 bg-white w-auto h-auto pb-5 lg:pb-10">
                <ul className="text-sm 2xl:text-lg">
                  <li>
                    <p className="lg:p-1">Número celular: +52 {user.cellphone}</p>
                  </li>
                  <li>
                    <p className="lg:p-1">
                      Correo electronico: {user.email}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <hr />
            <div className="flex mt-5 ">
              <div className="w-[50%] bg-white ">
                <h1 className="lg:text-3xl 2xl:text-3xl mt-5 font-bold">
                  Pedidos
                </h1>
              </div>
              <div className="w-[50%] lg:h-[4vh] bg-white flex  justify-end ">
                <button onClick={() => _signOff()} className="text-sm lg:text-2xl bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-0 px-3 mx-1 my-2 md:px-10 md:mx-9 lg:pb-9 lg:px-5 lg:mx-2 lg:my-0   rounded-full">
                  Cerrar sesión
                </button>
              </div>
            </div>

            {orders.map((data) => {
              return <div class=" producto mt-10  lg:w-[100%] h-auto shadow-lg bg-grisesitoFuertito text-azulito text-lg  text-left p-2 lg:p-5 rounded-lg flex">
                <div className="text-sm   bg-grisesitoFuertito w-[70%] h-auto p-0">
                  <ul className="p-5 leading-1">
                    {data.products_cart.map((data) => {
                      return <div className="mb-2">
                        <li className="font-bold">
                          Producto: <a className="font-normal	"> {data.name} </a>{" "}
                        </li>
                        <li className="font-bold">
                          Cantidad:<a className="font-normal	"> {data.quantity}</a>{" "}
                        </li>
                      </div>
                    })}
                    <li className="font-bold mb-3">
                      Total:{" "}
                      <a className="font-normal	">
                        {data.amount}
                      </a>
                    </li>
                    {address.map((addres) => {
                      if (data.address_id === addres._id) {
                        return <div>
                          <li className="font-bold mb-2">
                            Dirección de envio:{" "}
                            <a className="font-normal">
                              Calle {addres.street},{addres.suburb}, {addres.city}, {addres.num_home}
                            </a>
                          </li>
                          <li className="font-bold mb-3">
                            Codigo postal:{" "}
                            <a className="font-normal	">{addres.cp}</a>
                          </li>
                          <li className="font-bold">
                            Numero de telefono:{" "}
                            <a className="font-normal	">+52 {addres.cellphone_recibe}</a>
                          </li>
                        </div>
                      }

                    })}


                  </ul>
                </div>
                <div className="bg-transparent w-[30%] lg:flex">
                  <div className="contenedor-padre bg-grisesitoFuertesito 2-full lg:w-full h-1/2 lg:h-auto grid grid-cols-1">
                    <h1 className="text-center font-bold">Estatus</h1>
                    <div className="text-center">
                      {data.status == "0" ? (
                        <button >
                          <ion-icon
                            className="text-lg"
                            style={{ color: "red" }}
                            name="alert-circle"
                          ></ion-icon>
                          <h1 className="text-center text-sm pb-10">
                            En proceso
                          </h1>
                        </button >

                      ) : data.status == "1" ? (
                        <button >
                          <ion-icon
                            className="text-lg"
                            style={{ color: "#002360" }}
                            name="airplane"
                          ></ion-icon>
                          <h1 className="text-center text-sm pb-10">Enviado</h1>
                        </button >

                      ) : (
                        <button >
                          <ion-icon
                            className="text-lg"
                            style={{ color: "green" }}
                            name="checkmark-circle"
                          ></ion-icon>
                          <h1 className="text-center pb-10">Recibido</h1>
                        </button >
                      )}
                    </div>
                  </div>
                </div>
              </div>
            })}


          </div>
          {/* direcciones */}
          <div class=" lg:w-[30%] h-full shadow-lg bg-grisesitoFuertito text-azulito text-lg  text-left p-2 lg:p-5 rounded-l-lg ">
            <div className="flex mt-5 ">
              <div className="w-[50%] bg-white rounded-l-lg">
                <h1 className=" text-2xl lg:text-3xl 2xl:text-3xl mt-5 font-bold p-3">
                  Tus direcciones
                </h1>
              </div>
              <div className="w-[50%] h-auto bg-white flex justify-end p-8 text-3xl rounded-r-lg">
                <button onClick={() => direccion()}>
                  <ion-icon name="add-circle"></ion-icon>
                </button >
              </div>
            </div>
            {loader && (
              <div className="w-full flex justify-center items-center content-center">
                <img
                  src={require("../assets/perroEsperando.gif")}
                  alt="Funny image"
                />
              </div>
            )}
            {/* {address.map((data) => {
              return <Address key={data._id} address={data} />;
            })} */}
            {address.map((data) => {
              return <div className="direcciones bg-white w-full  mt-5 p-2 text-sm rounded-lg">
                <div className="bg-transparent-full h-auto">
                  <ul className="p-5 leading-1">
                    <li className="font-bold">
                      Calle:{" "}
                      <a className="font-normal	"> {data.street}</a>{" "}
                    </li>
                    <li className="font-bold">
                      Colonia:<a className="font-normal	">{data.suburb}</a>{" "}
                    </li>
                    <li className="font-bold">
                      Ciudad <a className="font-normal	">{data.city}</a>
                    </li>
                    <li className="font-bold">
                      Codigo postal <a className="font-normal	">{data.cp}</a>
                    </li>
                    <li className="font-bold">
                      Estado <a className="font-normal	">{data.num_home}</a>
                    </li>
                    <li className="font-bold">
                      Numero de telefono:{" "}
                      <a className="font-normal	">+52 {data.cellphone_recibe}</a>
                    </li>
                    <li className="font-bold">
                      Referencias:{" "}
                      <a className="font-normal	">{data.reference}</a>
                    </li>
                    <li className="font-bold">
                      Quien recibe:{" "}
                      <a className="font-normal	">{data.recibe}</a>
                    </li>
                  </ul>
                </div>
              </div>
            })}



          </div>
        </div>

      )}
    </div>
  );
};

export default Account;
