//Importando dep. Express
const express = require('express');
//Importando dep. Mongoose
const mongoose = require("mongoose");
//Importando dep. Require-dir
const requireDir = require("require-dir");
//Importando o Cors
const cors = require("cors");

//Definindo const app e execultar a funcao express
//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando Banco de dados
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    {useNewUrlParser: true , useUnifiedTopology: true,}
);
requireDir('./src/models/');

//Primeira Rota
app.use('/api', require('./src/routes'));

//Definindo para esculta
//Para rodar no terminal node server.js
app.listen(3001);