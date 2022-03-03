import React from 'react'

const Address = (props) => {

    return (
        <div className="direcciones bg-white w-full  mt-5 p-2 text-sm rounded-lg">
            <div className="bg-transparent-full h-auto">
                <ul className="p-5 leading-1">
                    <li className="font-bold">
                        Calle:{" "}
                        <a className="font-normal	"> {props.address.street}</a>{" "}
                    </li>
                    <li className="font-bold">
                        Colonia:<a className="font-normal	">{props.address.suburb}</a>{" "}
                    </li>
                    <li className="font-bold">
                        Ciudad <a className="font-normal	">{props.address.city}</a>
                    </li>
                    <li className="font-bold">
                        Codigo postal <a className="font-normal	">{props.address.cp}</a>
                    </li>
                    <li className="font-bold">
                        Numero de telefono:{" "}
                        <a className="font-normal	">+52 {props.address.cellphone_recibe}</a>
                    </li>
                    <li className="font-bold">
                        Referencias:{" "}
                        <a className="font-normal	">{props.address.reference}</a>
                    </li>
                    <li className="font-bold">
                        Quien recibe:{" "}
                        <a className="font-normal	">{props.address.recibe}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Address