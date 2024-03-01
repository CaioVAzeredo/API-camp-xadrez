const { Router } = require('express');
const AlunoController = require('../controllers/AlunoController.js');

const alunoController = new AlunoController()

const router = Router();

router.get('/alunos', (req, res) => alunoController.pegaTudo(req, res));
router.get('/alunos/:id', (req, res) => alunoController.pegaUmPorId(req, res));
router.post('/alunos', (req, res) => alunoController.criaNovo(req, res));
router.put('/alunos/:id', (req, res) => alunoController.atualiza(req, res));
router.delete('/alunos/:id', (req, res) => alunoController.exclui(req, res));

module.exports = router;