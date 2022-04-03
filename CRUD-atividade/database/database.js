const Sequelize = require('sequelize');

const connection = new Sequelize(
    'api_medico_atividade',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;