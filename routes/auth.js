const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

////////////////////// REGISTER /////////////////////////////

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

////////////////////// LOGIN //////////////////////

router.get("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json("Wrong Credentials.");
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET_KEY
      );
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (req.body.password === originalPassword) {
        const { password, ...others } = user._doc;
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: "3d" }
        );
        res.status(200).json({ ...others, accessToken });
      } else {
        res.status(401).json("Wrong Password");
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
