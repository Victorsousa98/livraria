import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';

db.on('error', console.error.bind(console, 'Erro ao conectar ao banco de dados:')); //verifica se houve erro na conexão com o banco de dados
db.once('open', function() { //se não houver erro, executa a função
    console.log('Conectado ao banco de dados');
});

const app = express();

app.use(express.json());

routes(app);

app.get('/livros/:id', (req, res) => {//busca um livro pelo id
    let index = livros.findIndex(livro => livro.id == req.params.id); //findIndex retorna o índice do livro que possui o id passado na rota
    res.json(livros[index]);
});

//utilizamos put para atualizar um registro
app.put('/livros/:id', (req, res) => {//para fazer uma atualização de um registro, precisamos passar o id do registro que queremos atualizar
    let index = livros.findIndex(livro => livro.id == req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete('/livros/:id', (req, res) => {//para deletar um registro, precisamos passar o id do registro que queremos deletar
    let {id} = req.params;//desestruturação para pegar o id passado na rota
    let index = livros.findIndex(livro => livro.id == id);
    livros.splice(index, 1);//splice remove um elemento do array. O primeiro parâmetro é o índice do elemento que queremos remover e o segundo é a quantidade de elementos que queremos remover
    res.send('Livro removido com sucesso');
});

    export default app;