import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on('error', console.error.bind(console, 'Erro ao conectar ao banco de dados:')); //verifica se houve erro na conexão com o banco de dados
db.once('open', function() { //se não houver erro, executa a função
    console.log('Conectado ao banco de dados');
});

const app = express();

app.use(express.json());

routes(app);

export default app;