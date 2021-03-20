const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_unit', {
    id_mst_unit: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    aktif: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    tgl_ubah: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pengubah: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mst_unit',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mst_unit" },
        ]
      },
    ]
  });
};
