import React, { useState, useEffect } from "react";
import Product from "../../components/admin/_productsAdm";
import axios from "axios";
import { deleteProductById, createProductApi, updateProductApi } from '../../api/product'
import Swal from "sweetalert2";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      await axios
        .get(`api/v1/products/`)
        .then((res) => {
          setProducts(res.data);
          setLoader(false);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } catch (error) { }
  };

  const createProduct = () => {
    Swal.fire({
      title: "Agrega un producto",
      html: `
        <input id="file" type="file" name="file0" ref="file" class="" accept="image/png,image/jpeg" placeholder="">
        <input type="text" id="name" class="swal2-input" placeholder="Nombre del producto">
        <input type="text" id="description" class="swal2-input" placeholder="Descripción del producto">
        <input type="text" id="price" class="swal2-input" placeholder="Precio unitario">
      `,

      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      focusConfirm: false,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#ff141e",
      preConfirm: () => {
        const file = Swal.getPopup().querySelector("#file");
        const name = Swal.getPopup().querySelector("#name").value;
        const description = Swal.getPopup().querySelector("#description").value;
        const price = Swal.getPopup().querySelector("#price").value;

        if (file.files[0] === undefined || !name || !description || !price) {
          Swal.showValidationMessage(`Llena los campos`);
        }
        return {
          file: file,
          name: name,
          description: description,
          price: price
        };
      },
    }).then((result) => {
      const file = result.value.file.files[0]
      const name = result.value.name
      const description = result.value.description
      const price = result.value.price
      _createProduct(file, name, description, price)

    });
  };

  const updateProduct = (product) => {
    Swal.fire({
      title: "Agrega un producto",
      html: `
        <input type="hidden" id="product_id" class="swal2-input" placeholder="Nombre del producto" value="${product._id}">
        <input id="file" type="file" name="file0" ref="file" class="" accept="image/png,image/jpeg" placeholder="">
        <input type="text" id="name" class="swal2-input" placeholder="Nombre del producto" value="${product.name}">
        <input type="text" id="description" class="swal2-input" placeholder="Descripción del producto" value="${product.description}">
        <input type="text" id="price" class="swal2-input" placeholder="Precio unitario" value="${product.price}">
      `,

      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      focusConfirm: false,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#ff141e",
      preConfirm: () => {
        const file = Swal.getPopup().querySelector("#file");
        const product_id = Swal.getPopup().querySelector("#product_id").value;
        const name = Swal.getPopup().querySelector("#name").value;
        const description = Swal.getPopup().querySelector("#description").value;
        const price = Swal.getPopup().querySelector("#price").value;
        if (file.files[0] === undefined || !name || !description || !price) {
          Swal.showValidationMessage(`Llena los campos`);
        }
        return {
          file: file,
          product_id: product_id,
          name: name,
          description: description,
          price: price
        };
      },
    }).then((result) => {
      const file = result.value.file.files[0]
      const product_id = result.value.product_id
      const name = result.value.name
      const description = result.value.description
      const price = result.value.price
      _updateProductApi(file, name, description, price, product_id)

    });
  };

  const _createProduct = async (file, name, description, price) => {
    await createProductApi({ file, name, description, price, getProducts, churroAlerSuccess })
  }

  const _updateProductApi = async (file, name, description, price, product_id) => {
    await updateProductApi({ file, name, description, price, product_id, getProducts, churroAlerSuccessEdit })
  }

  const churroAlerSuccessEdit = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro producto actualizado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const churroAlerSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro producto creado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const deleteConfirm = (product) => {
    Swal.fire({
      title: "¿Quieres eliminar este elemento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        _deleteProductById(product._id)
      }
    });
  };

  const _deleteProductById = async (product_id) => {
    await deleteProductById({ product_id, getProducts, churroAlerSuccessDelete })
  }

  const churroAlerSuccessDelete = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro producto eliminado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="contenedor padre bg-black w-auto h-auto">
      <div className="w-full h-[auto] bg-white mx-auto">
        <div className="p-10">
          <h1 className="text-xl lg:text-4xl 2xl:text-5xl 2xl:pl-44 text-left font-bold text-black">
            Tus p<a className="underline decoration-rojito">roductos</a>
          </h1>
        </div>

        <a >
          <div className="flex justify-center items-center text-center">
            <div onClick={() => createProduct()} className="bg-grisesitoFuertito cursor-pointer w-[20%] h-auto text-4xl md:text-5xl rounded-lg">
              <ion-icon style={{ color: "gray" }} name="add-circle"></ion-icon>
            </div>
          </div>
        </a>
        {/* Loader */}
        {loader && (
          <div className="w-full flex justify-center items-center content-center">
            <img
              src={require("../../assets/perroEsperando.gif")}
              alt="Funny image"
            />
          </div>
        )}
        <div class="container mx-auto">
          <div className="contenedor-padre w-full h-auto grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
            {products.map((data) => {
              return <Product key={data._id} product={data} delete={deleteConfirm} update={updateProduct} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAdmin;
