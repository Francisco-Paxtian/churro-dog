import axios from 'axios'

const createArticle = async (props) => {
    try {
        const { titulo, texto, getArticles, churroAlerSuccess } = props
        const data = { tittle: titulo, paragraph: texto }
        axios
            .post(`api/v1/articles`, data)
            .then(res => {
                getArticles() && getArticles()
                churroAlerSuccess() && churroAlerSuccess()
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }
}

const updateArticle = async (props) => {
    try {
        const { titulo, texto, article_id, getArticles, churroAlerSuccessEdit } = props
        const data = { tittle: titulo, paragraph: texto }
        axios
            .put(`api/v1/articles/${article_id}`, data)
            .then(res => {
                getArticles() && getArticles()
                churroAlerSuccessEdit() && churroAlerSuccessEdit()
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }
}

const deleteArticleById = async (props) => {
    try {
        const { article_id, getArticles, churroAlerSuccessDelete } = props
        axios
            .delete(`api/v1/articles/${article_id}`)
            .then(res => {
                getArticles() && getArticles()
                churroAlerSuccessDelete() && churroAlerSuccessDelete()
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }
}




export {
    createArticle,
    updateArticle,
    deleteArticleById
}