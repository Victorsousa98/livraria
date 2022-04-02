import express from "express";
import livrosController from "../controllers/livrosController.js";

const router = express.Router(); //router é um objeto do express que permite criar rotas e fazer as requisições para o servidor

router
    .get("/livros", livrosController.listarLivros)
    .get("/livros/:id", livrosController.listarLivrosPorId)
    .post("/livros", livrosController.cadastrarLivro)
    .post("/livros/:id", livrosController.atualizarLivro)
    .delete("/livros/:id", livrosController.excluirLivro);
    
export default router;