const router = require('express').Router();
const medico = require('../model/Medico');
const defaultRoute = "/medico";

router.post(defaultRoute+'/cadastrarMedico', (req, res) => {
    const {nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId} = req.body;
    medico.create(
        {nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId}
    ).then(
        () => res.send(`Médico ${nome_medico} cadastrado com sucesso!`)
    )
})

router.get(defaultRoute+'/listarMedicos', (req,res) => {
    medico.findAll().then(
        (medicos) => res.send(medicos) 
    )
})

router.get(defaultRoute+'/listarMedico/:id', (req, res) => {
    const {id} = req.params;
    medico.findByPk(id).then(
        (medico) => res.send(medico)
    )
})

router.put(defaultRoute+'/alterarMedico', (req, res) => {
    const {id, nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId} = req.body;
    medico.update(  
        {nome_medico, email_medico, telefone_medico, celular_medico, tblEspecialidadeId}, 
        {where: {id}}    
    ).then(
        () => res.send(`dados do médico de id ${id} alterados com sucesso!`)
    )
})

router.delete(defaultRoute+'/excluirMedico/:id', (req, res) => {
    const {id} = req.params;
    medico.destroy({where: {id}}).then(
        () => res.send(`Médico de id ${id} excluído com sucesso!`)
    )
})

module.exports = router;