const express = require("express")
const handlebars = require('express-handlebars')

const app = express()
const porta = 4090

//Configurar o express para receber dados do formulário
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Configurar o handlebars
app.engine('handlebars', handlebars.engine({extended: true}))
app.set('view engine', 'handlebars')

//Carregar rotas
const funcionarioRouter = require('./router/funcionario')

//Utilizando as rotas
app.use('/funcionario', funcionarioRouter)

//Exibindo informações na tela
app.get('/',(req,res)=>{
  res.render('home')
})

//Configurando o servidor
app.listen(porta, ()=>{
  console.log(`Servidor executando na porta ${porta}`)
})