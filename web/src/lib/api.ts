import axios from 'axios'

const uri: string = process.env.VITE_API_URL || import.meta.env.VITE_API_URL || "http://localhost:3333"

const api = axios.create({
  baseURL: uri, //Utilize o baseURL para testar diretamente com o axios e redirecionar para o nosso backend.
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default api