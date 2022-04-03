const Sequelize = require('sequelize');
const connection = require('../database/database');

const Especialidade = connection.define(
    'tbl_especialidade',
    {
        nome_especialidade:{
           type: Sequelize.STRING(100),
           allowNull: false
        }
    }
);

//rode primeiro as tabelas que não possuem dependência
/* Especialidade.sync({force:true}); */
module.exports = Especialidade;