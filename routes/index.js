const express = require("express");
const router = express.Router();
const PenggunaCtrl = require('../controllers/pengguna')

router.post("/pengguna/register", PenggunaCtrl.registerPengguna);
router.post("/pengguna/signIn", PenggunaCtrl.signInPengguna);

module.exports = router