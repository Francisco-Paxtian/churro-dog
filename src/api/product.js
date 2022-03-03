
import axios from 'axios'

const createProductApi = async (props) => {


    try {
        const { file, name, description, price, getProducts, churroAlerSuccess } = props
        // const data = { name: name, description: description, price: price }
        console.log(file.name);
        const formData = new FormData();
        formData.append("file0", file, file.name);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        axios
            .post(`api/v1/products`, formData)
            .then(res => {
                console.log(res.data);
                getProducts() && getProducts()
                churroAlerSuccess() && churroAlerSuccess()
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }
}

const updateProductApi = async (props) => {


    try {
        const { file, name, description, price, product_id, getProducts, churroAlerSuccessEdit } = props
        // const data = { name: name, description: description, price: price }
        console.log(file.name);

        const formData = new FormData();
        formData.append("file0", file, file.name);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        axios
            .put(`api/v1/products/${product_id}`, formData)
            .then(res => {
                getProducts() && getProducts()
                churroAlerSuccessEdit() && churroAlerSuccessEdit()
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }
}

const deleteProductById = async (props) => {
    try {
        const { product_id, getProducts, churroAlerSuccessDelete } = props;
        console.log(product_id);
        axios
            .delete(`api/v1/products/${product_id}`)
            .then(res => {
                getProducts() && getProducts()
                churroAlerSuccessDelete() && churroAlerSuccessDelete()
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }

}

export {
    deleteProductById,
    updateProductApi,
    createProductApi
}