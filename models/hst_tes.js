const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hst_tes', {
    id_hst_tes: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_mst_pegawai: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    tgl: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    penyelenggara: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    nilai: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    file_hasil: {
      type: DataTypes.STRING(250),
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
    tableName: 'hst_tes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hst_tes" },
        ]
      },
    ]
  });
};
