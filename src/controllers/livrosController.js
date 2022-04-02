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
    static listarLivrosPorId(req, res){
        const id = req.params.id;

        livros.findById(id, (err, livro) => {
            if(!err){
                res.send(livro);
            }else{
                res.status(400).send(err);
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

    static atualizarLivro(req, res){
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err, livro) => {
            if(!err){
                res.send("livro foi atualizado com sucesso");
            }else{
                res.status(500).send(err);
            }
        });
    }

    static excluirLivro(req, res){
        const id = req.params.id;

        livros.findByIdAndRemove(id, (err) => {
            if(!err){
                res.send("livro foi excluído com sucesso");
            }else{
                res.status(500).send(err);
            }
        });
    }
}

export default livrosController;