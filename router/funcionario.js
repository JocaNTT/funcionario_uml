const express = require('express')
const router = express.Router()
const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

router.post('/store', async (req, res) =>{
  const resultado = await funcionario.create({
    nome:req.body.nome,
    salario:req.body.salario,
    cargo:req.body.cargo,
    departamentoId:req.body.departamento
  })
  if({resultado}){
    res.redirect('/')
  }
  else{
    res.jason({erro:"Erro ao cadastrar o funcionário"})}
})

router.get('/', async (req, res) =>{
  res.send("<h1>Página inicial do funcionário</h1>")
})

router.get('/show', async (req, res) =>{
  const resultado = await funcionario.findAll()
  if(resultado){
    console.log(resultado)
  }
  else{
    console.log("Não foi possível encontrar o funcionário")
  }
})

router.get('/destroy/:id', async (req, res) =>{
  const resultado = await funcionario.destroy({
    where: {
      id: req.params.id
    }
  })
})

router.get('/create',(req, res) =>{
  res.render('funcionario/addFuncionario')
})

module.exports = router