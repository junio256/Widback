import axios from 'axios'

console.log("API: ", import.meta.env.VITE_API_URL)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3333" //Utilize o baseURL para testar diretamente com o axios e redirecionar para o nosso backend.
})

export default api