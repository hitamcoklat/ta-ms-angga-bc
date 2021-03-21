const express = require("express");
const router = express.Router();
const auth = require("../middleware/jwt");
const PenggunaCtrl = require('../controllers/pengguna')

router.post("/pengguna/register", PenggunaCtrl.registerPengguna);
router.post("/pengguna/signIn", PenggunaCtrl.signInPengguna);
router.get("/pengguna", auth.checkToken, PenggunaCtrl.getAllPengguna);

module.exports = router