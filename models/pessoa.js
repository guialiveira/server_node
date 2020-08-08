module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('pessoa', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
  
    return Pessoa;
  }