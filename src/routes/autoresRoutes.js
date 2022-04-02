import express from "express";
import autoresController from "../controllers/autoresController.js";

const router = express.Router(); //router é um objeto do express que permite criar rotas e fazer as requisições para o servidor

router
    .get("/autores", autoresController.listarAutores)
    .get("/autores/:id", autoresController.listarAutoresPorId)
    .post("/autores", autoresController.cadastrarAutor)
    .post("/autores/:id", autoresController.atualizarAutor)
    .delete("/autores/:id", autoresController.excluirAutor);
    
export default router;