const Services = require('./Services.js');

class AlunoServices extends Services {
    constructor(){
        super('Aluno') //'Aluno' está fazendo o papel de dataBase de PessoaController: dataBase.Pessoa.findAll(); 
    }
}

module.exports = AlunoServices