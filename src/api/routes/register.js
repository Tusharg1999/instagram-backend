const express = require("express");
const registrationValidation = require('../../validation/registratioValidation');

const router = express.Router();
router.post("/", (req, res) => {
    const err = registrationValidation(req.body);
    if (err != null) return res.status(400).send(err);

    res.status(200).send("ok")
});

module.exports = router;
