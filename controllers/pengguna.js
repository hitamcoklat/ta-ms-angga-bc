const db = require("../models");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

registerPengguna = async (req, res) => {
  try {
    const pengguna = await db.mst_pengguna.create({
      id_pengguna_group: req.body.id_pengguna_group,
      pengguna: req.body.pengguna,
      sandi: bcrypt.hashSync(req.body.sandi, bcrypt.genSaltSync(10), null),
      aktif: "1",
    });
    console.log(pengguna);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "An error has occured.",
    });
  }
};

signInPengguna = async (req, res) => {
  let pengguna = await db.mst_pengguna.findOne({
    where: {
      pengguna: req.body.pengguna,
    },
  });
  if (pengguna === null) {
    return res.status(500).json({ msg: "Not Found!" });
  }

  var passwordIsValid = bcrypt.compareSync(
    req.body.sandi,
    pengguna.dataValues.sandi
  );
  if (!passwordIsValid) {
    return res
      .status(401)
      .send({ accessToken: null, msg: "Invalid Password!" });
  }
  const token = jwt.sign(
    {
      user: pengguna.dataValues.pengguna,
      userId: pengguna.dataValues.id_pengguna,
    },
    process.env.SECRET,
    {
      expiresIn: "12h",
    }
  );
  res.status(200).json({
    user: pengguna.dataValues.pengguna,
    userId: pengguna.dataValues.id_pengguna,
    userGroup: pengguna.dataValues.id_pengguna_group,
    accessToken: token,
  });
};

const getAllPengguna = async (req, res) => {
  const pengguna = await db.mst_pengguna.findAll();
  res.status(200).json({
    data: pengguna
  });    
}

module.exports = {
  registerPengguna,
  signInPengguna,
  getAllPengguna
};
