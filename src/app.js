import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis',
        preco: 20.00,
        descricao: 'Livro de Aventura',
        autor: {
            id: 1,
            nome: 'J.R.R. Tolkien'
        }
    },
    {
        id: 2,
        titulo: 'As Crônicas de Gelo e Fogo',
        preco: 25.00,
        descricao: 'Livro de Fantasia',
        autor: {
            id: 2,
            nome: 'George R. R. Martin'
        }
    },
    {
        id: 3,
        titulo: 'Fundação',
        preco: 30.00,
        descricao: 'Livro de Ficção Científica',
        autor: {
            id: 3,
            nome: 'Isaac Asimov'
        }
    },
];

//app.get é uma função do express que recebe dois parâmetros: o primeiro é a rota e o segundo é uma função que será executada quando a rota for acessada
app.get('/', (req, res) => {
    res.status(200).send('Livraria');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {//busca um livro pelo id
    let index = livros.findIndex(livro => livro.id == req.params.id); //findIndex retorna o índice do livro que possui o id passado na rota
    res.json(livros[index]);
});


app.post('/livros', (req, res) => {//cadastra um livro. 
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
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