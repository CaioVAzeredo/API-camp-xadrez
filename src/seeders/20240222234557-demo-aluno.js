'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('alunos', [
      {
        nome: 'Rau Vidal',
        ponto: 65.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Davi Cope',
        ponto: 51.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Ana Clara',
        ponto: 51,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Thiago de Souza',
        ponto: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'João Pedro',
        ponto: 32.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Rebecca Lagais',
        ponto: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Sara do Amaral',
        ponto: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Valentina Cardoso',
        ponto: 25.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Davi Matheus',
        ponto: 13.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Laura Cristina',
        ponto: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Vitoria Abreu',
        ponto: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Rafaela lopis',
        ponto: 11.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Ana iwani',
        ponto: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Henrique Franzilli',
        ponto: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('alunos', null, {});
     
  }
};
