import React, { useState } from 'react'
import {
  Link
} from "react-router-dom"

const NavbarAdmin = () => {
  let [open, setOpen] = useState(false)
  return (
    <div className="App">
      <div className=" body-font border-b border-gray-200 py-3 md:px-10 px-7">
        <div className="flex sm:justify-center ">
          <img
            src={require("../assets/logo.jpeg")}
            className="w-32"
            alt='churro dog logo'
          ></img>
        </div>
        <div onClick={() => { setOpen(!open) }} className="text-3x1 absolute z-[2] right-8 top-8 cursor-pointer lg:hidden">
          <ion-icon style={{ fontSize: 35 }} name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`lg:justify-center lg:space-x-16 sm:flex  justify-items-start absolute lg:static bg-white pt-8 lg:z-auto z-[1] left-0 w-full lg:w-auto lg:pl-0 pl-12 transition-all duration-500 ease-in ${open ? 'top-0' : 'top-[-100%]'}`} >
          {[
            ["Panel de control", "/panel-de-control"],
            ["Blog", "/panel-blog"],
            ["Pedidos", "/panel-pedidos"],
            ["Tu tienda", "/panel-productos"],
            [<ion-icon style={{ fontSize: 35 }} name="person-circle-outline"></ion-icon>, "/cuenta-admin"],

          ].map(([title, url]) => (
            <li
              className="px-3 py-2 text-lg text-azulito font-medium hover:text-rojito"
            ><Link onClick={() => setOpen(false)} to={url}>{title}</Link>
            </li>
          ))}

        </ul>

      </div>
    </div>
  );
}


export default NavbarAdmin