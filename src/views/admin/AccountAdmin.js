import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getUserCurrent, updateUser, signOff, createAddress } from '../../api/auth'

const AccountAdmin = () => {

  const [user, setUser] = useState('')
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    _getUserCurrent()
  }, [])


  const _getUserCurrent = async () => {
    const userCurrent = await getUserCurrent()
    setUser(userCurrent)
    setLoader(false)
  }


  const _signOff = async () => {
    await signOff({ churroAlerOff, goToHome })
  }

  const goToHome = () => {
    window.location.href = "/"
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

  const _updateUser = async (fullname, cellphone) => {
    const user_id = user._id
    await updateUser({ fullname, cellphone, user_id, _getUserCurrent, churroAlerSuccess })
  }

  return (
    <div className="bg-white w-[100%] h-auto flex justify-center content-center text-azulito ">
      <div className="bg-grisesitoFuertito w-[90%] md:w-[40%] h-auto mt-20 rounded-lg">
        <div className="mt-4 auto h-auto flex p-7">
          {loader && (
            <div className="w-full flex justify-center items-center content-center">
              <img
                src={require("../../assets/perroEsperando.gif")}
                alt="Funny image"
              />
            </div>
          )}
          <h1 className="font-bold 2xl:text-5xl">{user.fullname}</h1>
          <button onClick={() => editarUsuario(user)}>
            <ion-icon
              className="text-2xl"
              style={{ marginLeft: 15 }}
              name="create-outline"
            ></ion-icon>
          </button>
        </div>
        <div className="mt-1 pl-7  w-auto h-auto pb-5 lg:pb-0">
          <ul className="text-sm 2xl:text-lg">
            <li>
              <p className="lg:p-1">Número celular: +52 {user.cellphone}</p>
            </li>
            <li>
              <p className="lg:p-1">Correo electronico: {user.email}</p>
            </li>
            <li>
              <p className="lg:p-1">Cuenta: Administrador</p>
            </li>
          </ul>
        </div>
        <div className=" w-full h-[10%] mt-5 ml-5 mb-12">
          <button onClick={() => _signOff()} className="text-sm lg:text-lg bg-rojito hover:bg-rojitoSubidito duration-500 text-white font-semibold py-1 px-4 rounded-full">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountAdmin;
