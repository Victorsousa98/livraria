import express from "express";
import livrosController from "../controllers/livrosController.js";

const router = express.Router(); //router é um objeto do express que permite criar rotas e fazer as requisições para o servidor

router
    .get("/livros", livrosController.listarLivros)
    .post("/livros", livrosController.cadastrarLivro)

export default router;