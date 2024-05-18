const express = require('express');
const routes = require('./routes/index.js')

const app = express();
routes(app)

/* app.use(cors({
    origin: "http://localhost:3333/alunos"
    https://www.alura.com.br/artigos/como-resolver-erro-de-cross-origin-resource-sharing
}))
 */
app.use((erro, req, res, next) => {
    res.status(500).json({ mensagem: "Erro interno no servidor" })
})
module.exports = app;