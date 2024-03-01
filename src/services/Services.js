//Camada intermediaria entre o model e o controller responsável por aplicar regras de negócios no modelo
//dataSorce é o banco de dados
const dataSorce = require('../models/index.js')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodosRegistros() {
        // retornar na ordem do maior para o menor valor 
        const todosOsAlunos = await dataSorce[this.model].findAll({
            order: [
                ['ponto', 'DESC']
            ]
        })
        return todosOsAlunos;
    }

    async apenasUmAluno(id) {
        return dataSorce[this.model].findByPk(id)
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaRegistroAtualizado = dataSorce[this.model].update(dadosAtualizados, {
            where: { id: id }
        })
        if (listaRegistroAtualizado[0] === 0) {
            return false
        } else {
            return true
        }
    }

    async criaRegistro(dadosNovoAluno) {
        return dataSorce[this.model].create(dadosNovoAluno);
    }

    async excluiAluno(id) {
        return dataSorce[this.model].destroy({ where: { id: id } })
    }
}

module.exports = Services