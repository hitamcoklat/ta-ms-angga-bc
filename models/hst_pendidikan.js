const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hst_pendidikan', {
    id_hst_pendidikan: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_mst_pegawai: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jenjang: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prodi: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    tgl_lulus: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    institusi: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    file_ijazah: {
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
    tableName: 'hst_pendidikan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hst_pendidikan" },
        ]
      },
    ]
  });
};
