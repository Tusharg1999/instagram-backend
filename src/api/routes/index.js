const express = require("express");
const registerRouter = require("./register");
const loginRouter = require("./login");
const profileRouter = require("./profile");
const router = express.Router();
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/profile", profileRouter);
module.exports = router;
