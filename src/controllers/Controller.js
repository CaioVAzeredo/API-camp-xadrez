class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService
    }

    async pegaTudo(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosRegistros()
            return res.status(200).json(listaDeRegistro)
        } catch (erro) {
            return res.status(500).json({mensagem: erro})
        }
    }

    async pegaUmPorId(req, res) {
        const { id } = req.params;
        try {
            const alunoId = await this.entidadeService.apenasUmAluno(Number(id))
            return res.status(200).json(alunoId)
        } catch (erro) {
            return res.status(500).json({mensagem: erro})
        }
    }

    async criaNovo(req, res) {
        const dadosNovoAluno = req.body;
        try {
          const novoAlunocriado = await this.entidadeService.criaRegistro(dadosNovoAluno);
          return res.status(200).json(novoAlunocriado);
        } catch (erro) {
          return res.status(500).json({mensagem: erro})
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
            return res.status(500).json({mensagem: erro})
        }
    }
    async exclui(req, res) {
        const { id } = req.params
        try {
            await this.entidadeService.excluiAluno(Number(id));
            return res.status(200).json({ mensagem: `Aluno excluido com sucesso!` })
        } catch (erro) {
            return res.status(500).json({mensagem: erro})
        }
    }
}

module.exports = Controller