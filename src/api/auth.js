import { USER } from '../utils/constants'
import axios from 'axios'


const logInApi = async (props) => {
    try {
        const { email, password, churroAlerError, churroAlerSuccess, goToHome, goToDashboard } = props
        const data = { email: email, password: password }
        axios
            .post(`api/v1/auth`, data)
            .then(res => {
                if (res.data.mesage == "not found") {
                    churroAlerError() && churroAlerError()

                } else {
                    churroAlerSuccess() && churroAlerSuccess()
                    addUserCurrent(res.data)
                    if (res.data.type_user === "1") goToDashboard() && goToDashboard()
                    else goToHome() && goToHome()
                }
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }
}

const sinGinApi = async (props) => {
    const { fullName, cellphone, email, password, churroAlerError, churroAlerSuccess, goToLogin } = props
    const data = { fullName: fullName, email: email, password: password, cellphone: cellphone, type_user: "2" }
    axios
        .post(`api/v1/users`, data)
        .then(res => {
            console.log(res.data);
            if (res.data.message === "Correo en uso") churroAlerError() && churroAlerError()
            else {
                churroAlerSuccess() && churroAlerSuccess()
                goToLogin() && goToLogin()
            }

        })
        .catch(error => {
            console.log('Error: ', error)
        });
}
const updateUser = (props) => {
    const { fullname, cellphone, user_id, _getUserCurrent, churroAlerSuccess } = props
    const data = { fullname: fullname, cellphone: cellphone }
    axios
        .put(`api/v1/users/${user_id}`, data)
        .then(res => {
            addUserCurrent(res.data)
            _getUserCurrent() && _getUserCurrent()
            churroAlerSuccess() && churroAlerSuccess()
        })
        .catch(error => {
            console.log('Error: ', error)
        });
}

const signOff = async (props) => {
    const { churroAlerOff, goToHome } = props
    localStorage.removeItem(USER);
    churroAlerOff() && churroAlerOff()
    goToHome() && goToHome()
}
const getUserCurrent = () => {
    const user = localStorage.getItem(USER);
    if (!user) return [];
    return JSON.parse(user);
}

const addUserCurrent = (data) => {
    localStorage.setItem(USER, JSON.stringify(data))
}

const createAddress = async (props) => {
    const { calle, colonia, numero, ciudad, codigo, referencia, telefono, recibe, user_id, _getUserCurrent, churroAlerSuccessAddress } = props


    const data = {
        street: calle,
        suburb: colonia,
        num_home: numero,
        city: ciudad,
        cp: codigo,
        recibe: recibe,
        reference: referencia,
        user_id: user_id,
        cellphone_recibe: telefono
    }

    axios
        .post(`api/v1/address`, data)
        .then(res => {
            _getUserCurrent() && _getUserCurrent()
            churroAlerSuccessAddress() && churroAlerSuccessAddress()
        })
        .catch(error => {
            console.log('Error: ', error)
        });
}
export {
    logInApi,
    getUserCurrent,
    updateUser,
    signOff,
    createAddress,
    sinGinApi
}