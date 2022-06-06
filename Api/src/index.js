import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import animeController from './Controller/animeController.js'

const server = express();
server.use(cors());
server.use(express.json());
server.use(animeController)


server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));