import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/')
        .get((req, res) => {
            res.send('LIVRARIA DO PAI');
        });
    
    app.use(
        livros,
        autores
    )
};

export default routes;

