import livros from "../models/Livro.js";

class livrosController{
    static listarLivros(req, res){
            livros.find({}, (err, livros) => {//find serve para buscar todos os registros de uma coleçã. o primeiro parâmetro é um objeto que contém os filtros e o segundo é uma função que será executada após a busca
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(livros);
                }
            });
        }

    static cadastrarLivro(req, res){
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                res.send(livro.toJSON());
            }
        });
    }
}

export default livrosController;