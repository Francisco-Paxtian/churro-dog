import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleAdmin from "../../components/admin/_articleAdm";
import { createArticle, updateArticle, deleteArticleById } from '../../api/article'
import Swal from "sweetalert2";

const BlogAdmin = () => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getArticles();
  }, []);

  const agregarNota = () => {
    Swal.fire({
      title: "Agrega una nota",
      html: `<input type="text" id="titulo" class="swal2-input" placeholder="Titulo">
      <textarea id="texto" style="height:auto!important" cols="23" class="swal2-input" rows="8" placeholder="Contenido"></textarea>`,

      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      focusConfirm: false,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#ff141e",
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector("#titulo").value;
        const texto = Swal.getPopup().querySelector("#texto").value;

        if (!titulo || !texto) {
          Swal.showValidationMessage(`Llena los campos`);
        }
        return {
          titulo: titulo,
          texto: texto
        };
      },
    }).then((result) => {
      const titulo = result.value.titulo
      const texto = result.value.texto
      _createArticle(titulo, texto)

    });
  };

  const editarNota = (article) => {
    Swal.fire({
      title: "Agrega una nota",
      html: `<input type="hidden" id="article_id" value="${article.article_id}">
      <input type="text" id="titulo" class="swal2-input" placeholder="Titulo" value="${article.title}">
      <textarea id="texto" style="height:auto!important" cols="23" class="swal2-input" rows="8" placeholder="Contenido">${article.paragraph}</textarea>`,

      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cerrar",
      focusConfirm: false,
      confirmButtonColor: "#002360",
      cancelButtonColor: "#ff141e",
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector("#titulo").value;
        const texto = Swal.getPopup().querySelector("#texto").value;
        const article_id = Swal.getPopup().querySelector("#article_id").value;
        if (!titulo || !texto) {
          Swal.showValidationMessage(`Llena los campos`);
        }
        return {
          article_id: article_id,
          titulo: titulo,
          texto: texto
        };
      },
    }).then((result) => {
      const titulo = result.value.titulo
      const texto = result.value.texto
      const article_id = result.value.article_id
      _updateArticle(titulo, texto, article_id)

    });
  };

  const deleteConfirm = (article) => {
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
        _deleteArticleById(article.article_id)
      }
    });
  };

  const _createArticle = async (titulo, texto) => {
    await createArticle({ titulo, texto, getArticles, churroAlerSuccess })
  }

  const getArticles = async () => {
    try {
      await axios
        .get(`api/v1/articles/`)
        .then((res) => {
          setArticles(res.data);
          setLoader(false);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } catch (error) { }
  };

  const churroAlerSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro articulo creado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const _updateArticle = async (titulo, texto, article_id) => {
    await updateArticle({ titulo, texto, article_id, getArticles, churroAlerSuccessEdit })
  }

  const churroAlerSuccessEdit = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro articulo actualizado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const _deleteArticleById = async (article_id) => {
    await deleteArticleById({ article_id, getArticles, churroAlerSuccessDelete })
  }

  const churroAlerSuccessDelete = () => {
    Swal.fire({
      icon: 'success',
      title: 'Churro articulo eliminado con exito!!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="contenedor-padre bg-white w-auto h-auto mb-10">
      <div className="perro-cover w-auto h-[35rem] 2xl:w-[100%] bg-white "></div>
      {loader && (
        <div className="w-full flex justify-center items-center content-center">
          <img
            src={require("../../assets/perroEsperando.gif")}
            alt="Funny image"
          />
        </div>
      )}
      <hr className="salto" />
      <a onClick={() => agregarNota()} className="cursor-pointer">
        <div className="flex justify-center items-center text-center">
          <div className="bg-grisesitoFuertito w-[20%] h-auto text-4xl md:text-5xl rounded-lg">
            <ion-icon style={{ color: "gray" }} name="add-circle"></ion-icon>
          </div>
        </div>
      </a>

      {articles.map((data) => {
        return (
          <ArticleAdmin
            key={data._id}
            article_id={data._id}
            title={data.tittle}
            paragraph={data.paragraph}
            edit={editarNota}
            delete={deleteConfirm}
          />
        );
      })}
    </div>
  );
};

export default BlogAdmin;
