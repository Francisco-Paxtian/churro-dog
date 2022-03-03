import React, { useEffect, useState } from 'react';
import axios from 'axios';
const UserOrder = (props) => {

    const [user, setUser] = useState('')

    useEffect(() => {
        _getUserById(props.user_id)
    }, [])

    const _getUserById = async (user_id) => {
        await axios
            .get(`api/v1/users/${user_id}`)
            .then((res) => {
                setUser(res.data)
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }
    return <span>
        {user.fullname}
    </span>
}

export default UserOrder