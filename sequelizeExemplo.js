const Sequelize = require('sequelize');
const sequelize = new Sequelize('iRancho','root','123456',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

const Pessoa = sequelize.define('pessoa',{
    no_pessoa:{
        type: Sequelize.STRING
    },
    no_email:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    sexo:{
        type: Sequelize.CHAR
    },
    ic_ativo:{
        type: Sequelize.BOOLEAN
    }
})

//Pessoa.sync({force: true})// Criando tabela


//incluindo na tabela
 Pessoa.create({
    no_pessoa: "Guilherme",
    no_email: "fulano@gmail.com",
    endereco: "Sr. Pedro Luduvico",
    sexo: "M",
    ic_ativo: true,
})