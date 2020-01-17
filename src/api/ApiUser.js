import axios from 'axios'
const BaseUrl = 'http://localhost:3001/user'
axios.defaults.withCredentials = true

class ApiUser {
  register (user) {
    return axios.post(BaseUrl + '/register', user)
  }

  login (user) {
    return axios.post(BaseUrl + '/login', user)
  }
}

export default new ApiUser()
