const express = require('express');
const routes = require('./routes/index.js')
const cors = require('cors')
const app = express();


app.use(cors())

routes(app)

app.use((erro, req, res, next) => {
    res.status(500).json({ mensagem: "Erro interno no servidor" })
})
module.exports = app;