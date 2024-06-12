const express = require('express');
const cors = require('cors'); // Importe o módulo 'cors' aqui
const routes = require('./routes/index.js');

const app = express();

app.use(cors());

routes(app);

module.exports = app;