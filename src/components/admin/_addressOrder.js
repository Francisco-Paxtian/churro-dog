import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddressOrder = (props) => {

    const [address, setAddress] = useState('')

    useEffect(() => {
        _getUserById(props.address_id)
    }, [])

    const _getUserById = async (address_id) => {
        await axios
            .get(`api/v1/address-user/${address_id}`)
            .then((res) => {
                setAddress(res.data)
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }

    return (
        <div>
            <li className="font-bold mb-1">
                Dirección de envio:{" "}
                <a className="font-normal">
                    Calle {address.street},{address.suburb}, {address.city}, {address.num_home}
                </a>
            </li>
            <li className="font-bold mb-1">
                Referencia:{" "}
                <a className="font-normal">
                    {address.reference}
                </a>
            </li>
            <li className="font-bold mb-1">
                Quien recibe:{" "}
                <a className="font-normal">{address.recibe}</a>
            </li>
            <li className="font-bold mb-1">
                Numero de telefono:{" "}
                <a className="font-normal">+52 {address.cellphone_recibe}</a>
            </li>
        </div>
    )
}

export default AddressOrder