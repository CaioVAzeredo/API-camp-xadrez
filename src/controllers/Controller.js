const manipuladorDeErros = require("../middlewares/manipuladorDeErros")

class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService
    }

    async pegaTudo(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosRegistros()

            if (listaDeRegistro !== null) {
                res.status(200).json(listaDeRegistro)
            } else {
                res.status(404).json({ message: "Não há alunos" })
            }

        } catch (erro) {
            return res.status(500).json({ mensagem: "Erro interno no servidor", erro })
        }
    }

    async pegaUmPorId(req, res, next) {
        const { id } = req.params;
        try {
            const alunoId = await this.entidadeService.apenasUmAluno(Number(id))
            if (alunoId !== null) {
                res.status(200).json(alunoId)
            } else {
                res.status(404).json({ message: "Aluno não encontrado" })
            }

        } catch (erro) {
            manipuladorDeErros(erro, res, req)
        }
    }

    async criaNovo(req, res) {
        const dadosNovoAluno = req.body;
        try {
            const novoAlunocriado = await this.entidadeService.criaRegistro(dadosNovoAluno);
            return res.status(200).json(novoAlunocriado);
        } catch (erro) {
            return res.status(500).json({ mensagem: erro })
        }
    }
    async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;

        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id))
            if (!foiAtualizado) {
                return res.status(400).json({ mensagem: 'registro nao foi atualizado' })
            }
            return res.status(200).json({ mensagem: 'Aluno atualizado com sucesso' })
        } catch (erro) {
            return res.status(500).json({ mensagem: erro })
        }
    }
    async exclui(req, res) {
        const { id } = req.params
        try {
            await this.entidadeService.excluiAluno(Number(id));
            return res.status(200).json({ mensagem: `Aluno excluido com sucesso!` })
        } catch (erro) {
            return res.status(500).json({ mensagem: erro })
        }
    }
}

module.exports = Controller