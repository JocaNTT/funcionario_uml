const sequelizeDb = require('sequelize')
const sequelizeConfig = new sequelizeDb(
  'empresa', //Nome do banco
  'root', //Usuário do banco
  '', //Senha do banco
  {
    dialect: 'sqlite',
    storage: './empresa.sqlite'
  }
)

module.exports = {sequelizeDb, sequelizeConfig}