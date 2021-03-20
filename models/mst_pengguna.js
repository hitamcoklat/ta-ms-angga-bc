const Sequelize = require('sequelize');
const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "mst_pengguna",
    {
      id_pengguna: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_pengguna_group: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pengguna: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      sandi: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      aktif: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "mst_pengguna",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_pengguna" }],
        },
      ],
      instanceMethods: {
        encryptPassword(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
          return bcrypt.compare(password, this.sandi);
        },
      },
    }
  );
};
