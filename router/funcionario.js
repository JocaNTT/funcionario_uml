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

router.get('/show', async (req, res) =>{
  res.send("<h1>Página inicial do funcionário</h1>")
})

router.get('/', async (req, res) =>{
  const resultado = await funcionario.findAll({include:departamento})
  if(resultado){
    console.log(resultado)
    res.render("funcionario/index", {dados:resultado})
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
  res.redirect('/')
})

router.get('/create',async(req, res) =>{
  let resultado = await departamento.findAll()
  if(resultado){
    res.render('funcionario/addFuncionario', {dados:resultado})
  }
  else{
    console.log("Nao foi possivel encontrar o departamento")
    res.redirect('/')
  }
})

module.exports = router