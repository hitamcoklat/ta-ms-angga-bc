const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_hubungan', {
    id_mst_hubungan: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(150),
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
    tableName: 'mst_hubungan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mst_hubungan" },
        ]
      },
    ]
  });
};
