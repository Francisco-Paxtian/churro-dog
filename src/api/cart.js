import { PRODUCTS, ID_ADDRESS } from '../utils/constants'
import axios from 'axios'
import { uniqBy, countBy } from "lodash"

const addProductCart = (idProduct) => {
    const products = getCartApi();
    products.push(idProduct);

    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

const getCartApi = () => {
    const products = localStorage.getItem(PRODUCTS);

    if (!products) return [];
    return JSON.parse(products);
}
const getProductsCartApi = async () => {
    const idProducts = getCartApi();

    if (idProducts.lenght === 0) return null;

    try {
        const products = [];

        for await (const idProduct of idProducts) {
            try {
                await axios
                    .get(`api/v1/products/${idProduct}`)
                    .then((res) => {
                        products.push(res.data);
                    })
                    .catch((error) => {
                        console.log("Error: ", error);
                    });
            } catch (error) { }
        }

        const productsCount = countBy(products, (product) => {
            return product.name;
        });

        const combined = uniqBy(products, (product) => {
            const productTemp = product;
            productTemp.quantity = productsCount[product.name];
            return productTemp.name;
        });

        return combined;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const getTotalCartAPi = async () => {
    try {

        const idProducts = getCartApi();

        if (idProducts.lenght === 0) return null;
        const productSub = await getProductsCartApi()
        let total = 0
        productSub.map((data) => {
            const subtotal = data.price * data.quantity
            total = total + subtotal

        })
        return total

    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteAllProductCartApi = async (idProduct) => {
    const products = getCartApi();

    const index = products.indexOf(idProduct);

    if (index > -1) {
        products.splice(index, 1);
        localStorage.setItem(PRODUCTS, JSON.stringify(products));
        deleteAllProductCartApi(idProduct);
    }
}

const deleteProductCartApiById = async (idProduct) => {
    const products = getCartApi();

    const index = products.indexOf(idProduct);
    if (index > -1) products.splice(index, 1);

    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

const addIdAddressApi = async (id_address) => {
    localStorage.setItem(ID_ADDRESS, id_address);
}

const getAddressApi = async () => {
    const addres_id = localStorage.getItem(ID_ADDRESS);
    return addres_id;
}

const createOrderApi = async (props) => {
    const { id, total, user_id, idAddress, products, goToAccount, churroAlerSuccess } = props
    const data = { user_id: user_id, stripe_id: id, address_id: idAddress, amount: total, products_cart: products, status: "0" }
    axios
        .post(`api/v1/order/`, data)
        .then(res => {
            console.log(res.data);
            goToAccount() && goToAccount()
            churroAlerSuccess() && churroAlerSuccess()
        })
        .catch(error => {
            console.log('Error: ', error)
        });

    localStorage.removeItem(ID_ADDRESS)
    localStorage.removeItem(PRODUCTS)

}

const updateStatusOrder = async (props) => {
    const { order_id, selectedOption, churroAlerSuccess, _getOrders } = props
    const data = { status: selectedOption }
    axios
        .put(`api/v1/order/${order_id}`, data)
        .then(res => {
            _getOrders() && _getOrders()
            churroAlerSuccess() && churroAlerSuccess()
        })
        .catch(error => {
            console.log('Error: ', error)
        });
}
export {
    addProductCart,
    getCartApi,
    getProductsCartApi,
    getTotalCartAPi,
    deleteAllProductCartApi,
    deleteProductCartApiById,
    addIdAddressApi,
    createOrderApi,
    getAddressApi,
    updateStatusOrder
}