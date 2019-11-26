import axios from 'axios'
const BaseUrl = 'http://localhost:3001/topics'

class ApiTopic {
  fetchTopics () {
    // eslint-disable-next-line no-undef
    /* fetch(BaseUrl + 'topics')
      .then(res => res.json())
      .then(
        (result) => {
          return result
        },
        // 注意：需要在此处处理错误
        // 而不是使用 catch() 去捕获错误
        // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
        (error) => {
          console.log(error)
        }
      ) */
    return axios.get(BaseUrl)
  }

  addTopic (topic) {
    return axios.post(BaseUrl, topic)
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

export default new ApiTopic()
