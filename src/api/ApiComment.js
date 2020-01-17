import axios from 'axios'
const BaseUrl = 'http://localhost:3001/comments'
axios.defaults.withCredentials = true

class ApiComment {
  fetchComments (topicId) {
    return axios.get(BaseUrl + '/' + topicId)
  }

  addComment (comment) {
    return axios.post(BaseUrl, comment)
  }

  deleteTopic (topicId) {
    return axios.delete(BaseUrl + '/' + topicId)
  }

  /* fetchProductById (productId) {
    return axios.get(BaseUrl + 'product/' + productId)
  }

  deleteProduct (productId) {
    return axios.delete(BaseUrl + 'product/' + productId)
  }

  editProduct (product) {
    return axios.put(BaseUrl + 'product/' + product.id, product)
  } */
}

export default new ApiComment()
