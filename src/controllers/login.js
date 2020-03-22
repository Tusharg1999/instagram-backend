const loginValidation = require("../validation/loginValidation");
const bcrypt = require("bcrypt");
const user = require("../schemas/user/user.js");
const { debugLog, errorLog } = require("../utils/debug/logger");
const crypto = require("crypto");
async function login(req, res) {
  //validating user
  let error = await loginValidation(req.body);
  if (error != null) {
    res.status(400).send({ msg: error });
  }
  let userInfo = (await user.find({ username: req.body.username }))[0];
  debugLog(userInfo.password);
  //converting password into hash using salt in db
  let salt, hash;
  try {
    salt = userInfo.salt;
    hash = await bcrypt.hash(req.body.password, salt);
  } catch (e) {
    errorLog(e);
  }
  debugLog(hash);
  //checking for password
  try {
    const result = hash.localeCompare(userInfo.password);
    if (result === 1) {
      return res.status(403).send({ msg: "Wrong Password" });
    }
  } catch (e) {
    errorLog(e);
  }
  await generateToken(req.body.username);
  var response = await user.findOne({ username: req.body.username });
  debugLog(response);
  res.send(
    JSON.stringify(
      {
        id: response._id,
        username: response.username,
        email: response.email,
        gender:response.gender,
        privacy:response.privacy,
        phone: response.phone,
        token: response.token
      },
      null,
      2
    )
  );
}
async function generateToken(username) {
  crypto.randomBytes(50, async function(err, buffer) {
    let token = buffer.toString("hex");
    try {
      await user.updateOne({ username }, { token });
    } catch (e) {
      errorLog(e);
    }
  });
}
module.exports = { login };
