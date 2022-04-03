const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Especialidade = require('./model/Especialidade');
const Medico = require('./model/Medico')

const especialidadeController = require('./controller/EspecialidadeController')
app.use('/', especialidadeController);

const medicoController = require('./controller/MedicoController')
app.use('/', medicoController);

app.listen(3000, ()=>{
    console.log('API RODANDO NA URL: http://localhost3000');
}); 
