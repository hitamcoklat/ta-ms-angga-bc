const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hst_uraian', {
    id_hst_uraian: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_mst_jenis_uraian: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Uraian: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    tgl_buat_uraian: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pembuat_uraian: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hst_uraian',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hst_uraian" },
        ]
      },
    ]
  });
};
