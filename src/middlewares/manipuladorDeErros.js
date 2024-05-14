module.exports = function manipuladorDeErros(erro, res, req) {
    if (erro.name === "SequelizeDatabaseError") {
        res.status(400).json({ mensagem: "Um ou mais dados fornecidos estão incorretos" })
    } else {
        res.status(500).json({ mensagem: "Erro interno no servidor" })
    }


}