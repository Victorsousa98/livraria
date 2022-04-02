import autores from "../models/Autor.js";

class autoresController{
    static listarAutores(req, res){
            autores.find({}, (err, autores) => {//find serve para buscar todos os registros de uma coleçã. o primeiro parâmetro é um objeto que contém os filtros e o segundo é uma função que será executada após a busca
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(autores);
                }
            });
        }
    static listarAutoresPorId(req, res){
        const id = req.params.id;

        autores.findById(id, (err, Autor) => {
            if(!err){
                res.send(Autor);
            }else{
                res.status(400).send(err);
            }
        });
    }

    static cadastrarAutor(req, res){
        let autor = new autores(req.body);
        autor.save((err) => {
            if(err){
                res.status(500).send(err);
            }
            else{
                res.send(autor.toJSON());
            }
        });
    }

    static atualizarAutor(req, res){
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err, Autor) => {
            if(!err){
                res.send("Autor foi atualizado com sucesso");
            }else{
                res.status(500).send(err);
            }
        });
    }

    static excluirAutor(req, res){
        const id = req.params.id;

        autores.findByIdAndRemove(id, (err) => {
            if(!err){
                res.send("Autor foi excluído com sucesso");
            }else{
                res.status(500).send(err);
            }
        });
    }
}

export default autoresController;