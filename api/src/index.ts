import express from 'express'
import {routes} from './routes';
import cors from 'cors';

const app = express();
// GET, POST, PUT, PATCH, DELETE

//GET = Buscar informações
//POST = Cadastrar informações
//PUT = Atualizar informações de uma entidade
//PATCH = Atualizar uma informação única de uma entidade
//DELETE = deleta rs

app.use(express.json())
app.use(cors({
   crossorigin: "anonymous",
    origin: [
        'http://localhost:3000',
        'https://widback.vercel.app',
        'https://widback.juniokoi.dev']
}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
})
app.use(routes)

const PORT: string = process.env.PORT || "3333"
app.listen(PORT, () => {
    console.log(`HTTP server running at PORT: ${PORT}`);
})