//
const http = require('http'); 
const port = 3000;




//rotas
    const rotas = {
        '/': 'Livraria',
        '/livros': 'Livros',
        '/autores': 'Autores',
        '/editoras': 'Editoras'
    }



const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(rotas[req.url]);
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});