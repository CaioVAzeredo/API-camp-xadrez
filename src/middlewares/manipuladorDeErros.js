const ErroBase = require('../erros/ErroBase.js')
const RequisicaoIncorreta = require('../erros/RequisicaoIncorreta.js')

module.exports = function manipuladorDeErros(erro, res, req) {
  
    if (erro.name === "SequelizeDatabaseError") {
        new RequisicaoIncorreta().enviarResposta(res)
    } else {
        new ErroBase().enviarResposta(res)
    }
}