// Dependencias - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


// Rota de Teste
const teste = (req, res) => {
    res.send("Back-end respondendo");
}

// Conexão com o SGBD MySQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "lojinha"
});

// CRUD - Read
const read = (req, res) => {
    connection.query("SELECT * FROM Clientes",(err, result) =>{
        if(err)
            req.json(err);
        else
            res.json(result);
    });

    //res.json("");
}

const app = express();
app.use(express.json());
app.use(cors());

// Rotas Saídas - Front-end
app.get("/", teste);
app.get("/Clientes", read);

// Teste e porta no console
app.listen(3000, () =>{
    console.log("Back-and respondendo na porta 3000");
});