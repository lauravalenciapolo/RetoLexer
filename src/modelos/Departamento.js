const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("departamento", {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    presupuesto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });
};
 