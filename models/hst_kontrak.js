const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hst_kontrak', {
    id_hst_kontrak: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_hst_usulan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_mst_pegawai: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_mst_unit_penempatan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_kontrak: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    no_kontrak: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    jangka_waktu: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tgl_akhir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_mst_jenis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_mst_penugasan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_mst_anggaran: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_mst_sumberdana: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    institusi_kerma: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    negara_kerma: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    file_sk: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    cek_tdk_aktif: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    tgl_berhenti: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ket_berhenti: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    file_berhenti: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    tgl_buat_kontrak: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pembuat_kontrak: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hst_kontrak',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hst_kontrak" },
        ]
      },
    ]
  });
};
