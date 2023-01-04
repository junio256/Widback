import express from 'express'
import {routes} from './routes';
import cors from 'cors';

const app = express();
const origins: string[] = JSON.parse(process.env.ORIGINS!)
const ORIGINS: string[] = [
    'http://localhost:3000',
    ...origins
]

app.use(express.json())
app.use(cors({
    origin: ORIGINS.map(e => e.replace(";","")),
}))
app.use(routes)

const PORT: string = process.env.PORT || "3333"
app.listen(PORT, () => {
    console.log(`HTTP server running at PORT: ${PORT}`);
})