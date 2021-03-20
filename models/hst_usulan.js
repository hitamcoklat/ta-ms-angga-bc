const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hst_usulan', {
    id_hst_usulan: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    no_usul: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    tgl_usul: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pengusul: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_mst_unit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_terima: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ket: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    file_usul: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    tgl_buat: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pembuat: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hst_usulan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hst_usulan" },
        ]
      },
    ]
  });
};
