import { Router } from 'express'
import  { Add, Listar } from '../Repository/animeRepository.js'
const server = Router()

server.post('/anime' , async (req, resp) => {

    try {
        const anime = req.body;
        const sla= await Add(anime)
        resp.send(sla)
    } catch (err) {
        
    }
})

server.get('/anime', async (req, resp) => {
    try{
    const resposta = await Listar();
    resp.send(resposta)   
    
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

export default server;