module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('pessoa', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      endereco: DataTypes.STRING,
      sexo: DataTypes.CHAR,
      ic_ativo: DataTypes.BOOLEAN,
    });
  
    return Pessoa;
  }