//responsavel por mandar as informações pra interface

const Controller = require('./Controller.js')
const AlunoServices = require('../services/alunoServices.js')

const alunoServices = new AlunoServices();

class AlunoController extends Controller{
    constructor(){
        super(alunoServices)
    }

}

module.exports = AlunoController;