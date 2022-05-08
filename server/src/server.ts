
import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();
// GET, POST, PUT, PATCH, DELETE

//GET = Buscar informações
//POST = Cadastrar informações
//PUT = Atualizar informações de uma entidade
//PATCH = Atualizar uma informação única de uma entidade
//DELETE = deleta rs
app.use(cors())
app.use(express.json())
app.use(routes)


const PORT = 3000
app.listen(process.env.PORT || PORT, () => {
  console.log(`HTTP server running at PORT: ${PORT}`);
})