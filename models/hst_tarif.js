const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hst_tarif', {
    id_hst_tarif: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_mst_tarif: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nilai: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    id_mst_satuan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_buat_tarif: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pembuat_tarif: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hst_tarif',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hst_tarif" },
        ]
      },
    ]
  });
};
