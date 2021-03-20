const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_pengguna_group', {
    id_pengguna_group: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    keterangan: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    aktif: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mst_pengguna_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pengguna_group" },
        ]
      },
    ]
  });
};
