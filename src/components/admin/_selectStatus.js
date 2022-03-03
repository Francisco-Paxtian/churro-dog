import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SelectStatus = (props) => {
    const [selectedOption, setSelectedOption] = useState('');

    const onChangeSelect = () => {
        if (selectedOption === "") churroAlerOff()
        else props.updateStatus(props.order_id, selectedOption)
        // 
    }

    const churroAlerOff = () => {
        Swal.fire({
            icon: 'info',
            title: 'Elije un estatus',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div>
            <select
                value={selectedOption}
                onChange={data => setSelectedOption(data.target.value)}
                className="w-[70%]">
                <option selected value="" >Seleciona un estatus</option>
                <option value="0">En proceso</option>
                <option value="1">Enviado</option>
                <option value="2">Aceptado</option>
            </select>
            <a onClick={() => onChangeSelect()} className="text-xl lg:text-2xl cursor-pointer px-1 text-azulito">
                {" "}
                <ion-icon name="create"></ion-icon>
            </a>
        </div>
    )
}

export default SelectStatus