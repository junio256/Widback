import express from 'express'
import {routes} from './routes';
import cors from 'cors';

const app = express();
const origins: string[] = JSON.parse(process.env.ORIGINS!)
const ORIGINS: string[] = [
    'http://localhost:3000',
    ...origins
]
// GET, POST, PUT, PATCH, DELETE

//GET = Buscar informações
//POST = Cadastrar informações
//PUT = Atualizar informações de uma entidade
//PATCH = Atualizar uma informação única de uma entidade
//DELETE = deleta rs

app.use(express.json())
console.log(ORIGINS.map(e => e.replace(";","")),)
app.use(cors({
    origin: ORIGINS.map(e => e.replace(";","")),
}))
app.use(routes)

const PORT: string = process.env.PORT || "3333"
app.listen(PORT, () => {
    console.log(`HTTP server running at PORT: ${PORT}`);
})