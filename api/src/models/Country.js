const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.JSON,
      allowNull: false
    }, 
    subregion: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    area: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
    {timestamps: false}
  );
};