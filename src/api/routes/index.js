const express = require("express");
const registerRouter = require("./register");
const loginRouter = require("./login")
const homeRouter = require("./home")
const router = express.Router();
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/home", homeRouter);
module.exports = router;
