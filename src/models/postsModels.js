import 'doteenv/config';
import { ObjectId } from "mongodb"
import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts() {
    const db = conexao.db("Imersão")
    const colecao = db.collection("posts")
    return colecao.find().toArray() //busca post
}

export async function criarPost(novoPost) {
    const db = conexao.db("Imersão")
    const colecao = db.collection("posts")
    return colecao.insertOne(novoPost) //cria post
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("Imersão")
    const colecao = db.collection("posts")
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost}) //atualiza post
}