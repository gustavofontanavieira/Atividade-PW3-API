const router = require('express').Router();
const especialidade = require('../model/Especialidade')
const defaultRoute = "/especialidade";

router.post(defaultRoute + '/cadastrarEspecialidade', (req, res) => {
    const { nome_especialidade } = req.body;
    especialidade.create(
        {nome_especialidade}
    ).then(
        () => res.send("Especialidade inserida com sucesso")
    )
})

router.get(defaultRoute + '/listarEspecialidades', (req,res) => {
    especialidade.findAll().then(
        (especialidade) => res.send(especialidade)
    )
})

router.get(defaultRoute + '/listarEspecialidade/:id', (req, res) => {
    const {id} = req.params;
    especialidade.findByPk(id).then(
        (especialidade) => res.send(especialidade)
    )
})

router.put(defaultRoute + '/alterarEspecialidade', (req, res) => {
    const {id, nome_especialidade} = req.body;
    especialidade.update(
        {nome_especialidade},
        {where: {id}}
    ).then(
        () => res.send(`Dados de especialidade de id ${id} alterado para ${nome_especialidade}`)
    )
})

router.delete(defaultRoute + '/excluirEspecialidade/:id', (req,res) => {
    const {id} = req.params;
    especialidade.destroy({where: {id}}).then(
        () => res.send(`Dados de id ${id} excluídos com sucesso!`)
    )
})

module.exports = router;