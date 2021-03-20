const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_pegawai', {
    id_mst_pegawai: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nik: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    tmpt_lahir: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    tgl_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    agama: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    jns_kelamin: {
      type: DataTypes.STRING(30),
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
    rek: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    npwp: {
      type: DataTypes.STRING(30),
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
    file_ktp: {
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
    tableName: 'mst_pegawai',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mst_pegawai" },
        ]
      },
    ]
  });
};
