const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('site'));

let lista = [
    {
        titulo: "O Pequeno Príncipe",
        descricao: "Antoine de Saint-Exupéry",
        imagem: "images/pequeno-principe.jpg",
        descImagem: "Capa do livro O Pequeno Príncipe"
    },
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        descricao: "J. K. Rowling",
        imagem: "images/harry-potter.jpg",
        descImagem: "Capa do livro Harry Potter"
    },
    {
        titulo: "Orgulho e Preconceito",
        descricao: "Jane Austen",
        imagem: "images/orgulho-preconceito.jpg",
        descImagem: "Capa do livro Orgulho e Preconceito"
    }
];

app.get('/api/lista', (req, res) => {
    res.json(lista);

});

app.post('/api/lista', (req,res) => {
    const novaObra = req.body;
    lista.push(novaObra);
    res.json({ status: "sucesso" });
});


app.listen(3000, () =>{
    console.log("servidor escutando em http://localhost:3000");
});