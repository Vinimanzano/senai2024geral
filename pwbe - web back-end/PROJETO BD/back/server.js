//Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'Spotify_da_Shopee'
});

//Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo ");
}

//CRUD - create
const create = (req, res) => {
    let artista = req.body.artista;
    let musica = req.body.musica;
    let album = req.body.album;
    let query = `INSERT INTO Musicas(artista, musica, album) VALUE`;
    query += `('${artista}', '${musica}', '${album}');`;
    con.query(query, (err, result) => {
        if (err)
            res.redirect('http://127.0.0.1:5500/front/erro.html?erro=musica JÁ CADASTRADA&err=' + err.code);
        else
            res.redirect('http://127.0.0.1:5500/front/index.html');
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Musicas ORDER BY id", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//Rotas de Saída - FrontEnd
app.get("/", teste);
app.post("/Musicas", create);
app.get("/Musicas", read);

//Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});