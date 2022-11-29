const Sequelize = require('sequelize')
const sequelize = new Sequelize ('atv_models', 'root', '123456',{
    host: "localhost",
    dialect: "mysql"
})
 
 const Usuario = sequelize.define('Time de Futebol',{
   nome: {
        type: Sequelize.STRING //dessa forma estou informando que o tipo 
    },
    
    atividades: {
        type: Sequelize.STRING
    },

    equipe: {
        type: Sequelize.STRING
    }

   

 })

 //Gerar o Model no MySQL
 //Usuario.sync({force:true})//Para confirmar a criação da tabela

Usuario.create ({
        nome: "Sport Recife",
        atividades:"Jogar série B",
        equipe:"Principal"
});