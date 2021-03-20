var DataTypes = require("sequelize").DataTypes;
var _hst_kontrak = require("./hst_kontrak");
var _hst_pendidikan = require("./hst_pendidikan");
var _hst_tarif = require("./hst_tarif");
var _hst_tes = require("./hst_tes");
var _hst_uraian = require("./hst_uraian");
var _hst_usulan = require("./hst_usulan");
var _mst_anggaran = require("./mst_anggaran");
var _mst_hubungan = require("./mst_hubungan");
var _mst_jenis = require("./mst_jenis");
var _mst_jenis_uraian = require("./mst_jenis_uraian");
var _mst_keluarga = require("./mst_keluarga");
var _mst_pegawai = require("./mst_pegawai");
var _mst_pekerjaan = require("./mst_pekerjaan");
var _mst_pengguna = require("./mst_pengguna");
var _mst_pengguna_group = require("./mst_pengguna_group");
var _mst_penugasan = require("./mst_penugasan");
var _mst_satuan = require("./mst_satuan");
var _mst_sumberdana = require("./mst_sumberdana");
var _mst_tarif = require("./mst_tarif");
var _mst_unit = require("./mst_unit");

function initModels(sequelize) {
  var hst_kontrak = _hst_kontrak(sequelize, DataTypes);
  var hst_pendidikan = _hst_pendidikan(sequelize, DataTypes);
  var hst_tarif = _hst_tarif(sequelize, DataTypes);
  var hst_tes = _hst_tes(sequelize, DataTypes);
  var hst_uraian = _hst_uraian(sequelize, DataTypes);
  var hst_usulan = _hst_usulan(sequelize, DataTypes);
  var mst_anggaran = _mst_anggaran(sequelize, DataTypes);
  var mst_hubungan = _mst_hubungan(sequelize, DataTypes);
  var mst_jenis = _mst_jenis(sequelize, DataTypes);
  var mst_jenis_uraian = _mst_jenis_uraian(sequelize, DataTypes);
  var mst_keluarga = _mst_keluarga(sequelize, DataTypes);
  var mst_pegawai = _mst_pegawai(sequelize, DataTypes);
  var mst_pekerjaan = _mst_pekerjaan(sequelize, DataTypes);
  var mst_pengguna = _mst_pengguna(sequelize, DataTypes);
  var mst_pengguna_group = _mst_pengguna_group(sequelize, DataTypes);
  var mst_penugasan = _mst_penugasan(sequelize, DataTypes);
  var mst_satuan = _mst_satuan(sequelize, DataTypes);
  var mst_sumberdana = _mst_sumberdana(sequelize, DataTypes);
  var mst_tarif = _mst_tarif(sequelize, DataTypes);
  var mst_unit = _mst_unit(sequelize, DataTypes);


  return {
    hst_kontrak,
    hst_pendidikan,
    hst_tarif,
    hst_tes,
    hst_uraian,
    hst_usulan,
    mst_anggaran,
    mst_hubungan,
    mst_jenis,
    mst_jenis_uraian,
    mst_keluarga,
    mst_pegawai,
    mst_pekerjaan,
    mst_pengguna,
    mst_pengguna_group,
    mst_penugasan,
    mst_satuan,
    mst_sumberdana,
    mst_tarif,
    mst_unit,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
