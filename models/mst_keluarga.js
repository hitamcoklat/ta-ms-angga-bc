const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_keluarga', {
    id_mst_keluarga: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_mst_pegawai: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nik: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    hubungan: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    tgl_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    pekerjaan: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    hp: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    telp: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    bpjs: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    file_kk: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    file_foto: {
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
    tableName: 'mst_keluarga',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mst_keluarga" },
        ]
      },
    ]
  });
};
