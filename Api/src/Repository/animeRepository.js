import { conexao } from "./connection.js";

export async function Add (anime){
    const comando =
     `
     INSERT INTO tb_anime (nm_anime)
     VALUES (?)
    `

    const [resposta] = await conexao.query(comando, [anime.nome]);
    
    anime.id = resposta.insertId;

    return anime;
}

export async function Listar (){
    const comando = 
    ` 
    SELECT * from tb_anime
`
const [resposta] = await conexao.query(comando)
return resposta
}

