const {sequelizeDb, sequelizeConfig} = require('./database')
const departamento = require('./departamento')
const funcionario = sequelizeConfig.define(
  'funcionario',
  {
    nome: {type: sequelizeDb.STRING},
    salario: {type: sequelizeDb.FLOAT},
    cargo: {type: sequelizeDb.STRING}
  }
)

departamento.hasMany(funcionario, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
funcionario.belongsTo(departamento)

funcionario.sync()
module.exports = funcionario