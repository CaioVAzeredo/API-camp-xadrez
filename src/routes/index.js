const express = require('express');
const alunos = require('./alunosRoute.js')

module.exports = app => {
    app.use(
        express.json(),
        alunos,
    )
}