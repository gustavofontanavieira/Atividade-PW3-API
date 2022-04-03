const Sequelize = require('sequelize');
const connection = require('../database/database');
const Especialidade = require('./Especialidade');

const Medico = connection.define(
    'tbl_medico',
    {
        nome_medico:{
           type: Sequelize.STRING(500),
           allowNull: false
        },
        email_medico:{
           type: Sequelize.STRING(100),
           allowNull: false
        },
        telefone_medico:{
            type: Sequelize.STRING(10),
            allowNull: false
        },
        celular_medico:{
            type: Sequelize.STRING(11),
            allowNull: false
        }

});

Especialidade.hasMany(Medico);

/* Medico.sync({force:true}); */
module.exports = Medico;