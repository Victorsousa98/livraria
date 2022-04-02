import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route('/')
        .get((req, res) => {
            res.send('LIVRARIA DO PAI');
        });
    
    app.use(
        livros
    )
};

export default routes;

