const express = require('express')
const router = express.Router()
const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

router.get('/store', async (req, res) =>{
  const resultado = await funcionario.create({
    nome: 'Joaquim Netto',
    salario: 7500,
    cargo: 'Desenvolvedor',
    departamentoId: 1
  })
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

module.exports = router