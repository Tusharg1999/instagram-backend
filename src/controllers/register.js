const user = require('../schemas/user/user')
const registrationValidation = require('../validation/registratioValidation');
const bcrypt = require('bcrypt');
const registerUser = async function (req, res) {
    const error = await registrationValidation(req.body);
    if (error != null) {
        console.log(error);
        return res.status(400).send({message: error});
    }
    let hash, salt;
    try {
        salt = await bcrypt.genSalt(10);
        hash = await bcrypt.hash(req.body.password, salt);
    } catch (e) {
        return res.status(500).send("Internal server error")
    }
    try {
        await user.create({
            username: req.body.username,
            name: req.body.name,
            password: hash,
            salt: salt,
            email: req.body.email
        })
    } catch (e) {
        console.log(e)
    }
    res.status(201).end();
};

module.exports={registerUser};