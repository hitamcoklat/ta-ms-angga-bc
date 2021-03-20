const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_jenis', {
    id_mst_jenis: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(50),
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
    tableName: 'mst_jenis',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mst_jenis" },
        ]
      },
    ]
  });
};
