const ErroBase = require("./ErroBase")

class RequisicaoIncorreta extends ErroBase {
    constructor() {
        super("um ou mais dados fornecidos estão incorretos", 400)
    }
}

module.exports = RequisicaoIncorreta