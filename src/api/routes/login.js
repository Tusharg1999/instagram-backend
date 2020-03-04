const Express = require('express');
const loginValidation = require('../../validation/loginValidation');
const bcrypt = require('bcrypt');
const user = require('../../schemas/user/user');


const router = Express.Router();

router.post("/", async (req, res) => {
    //validating user
    let error = await loginValidation(req.body);
    if (error != null) {
        res.status(400).send({msg: error});
    }
    let userInfo = (await user.find({username: req.body.username}))[0];
    console.log(userInfo.password);
    //converting password into hash using salt in db
    let salt, hash;
    try {
        salt = userInfo.salt;
        hash = await bcrypt.hash(req.body.password, salt)
    } catch (e) {
        console.log(e)
    }
    console.log(hash);
    //checking for password
    try {
        const result = hash.localeCompare(userInfo.password);
        if (result === 1) {
            return res.status(403).send({msg: "Wrong Password"})
        }
    } catch (e) {
        console.log(e);
    }
    res.send(JSON.stringify(req.body))
});

module.exports = router;