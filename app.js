const express = require("express")
const handlebars = require('express-handlebars')

const app = express()
const porta = 5500

//Exibindo informações na tela
app.get('/',(req,res)=>{
  res.send("<h1>Tudo Funcionando</h1>")
})

//Configurando o servidor
app.listen(porta, ()=>{
  console.log(`Servidor executando na porta ${porta}`)
})