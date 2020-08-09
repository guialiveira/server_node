//Cria tabela pessoa
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      endereco: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      sexo: {
        allowNull: false,
        type: DataTypes.CHAR,
      },
      ic_ativo: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Pessoas');
  }
};