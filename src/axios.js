import axios from 'axios'

const baseURL = process.env.VUE_APP_BASE_URL || ''

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  }
})

api.interceptors.request.use((request) => {
  const access_token = localStorage.getItem('loginToken')
  if (access_token) {
    request.headers.common['Authorization'] = `Bearer ${access_token}`
  }
  return request
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.clear()
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default api
