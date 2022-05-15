import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL //Utilize o baseURL para testar diretamente com o axios e redirecionar para o nosso backend.
})

export default api