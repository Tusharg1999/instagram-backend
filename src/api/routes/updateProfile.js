const express = require("express");
const UpdateController = require('../../controllers/updateProfile')
const router = express.Router();
const upload = require('../middlewares/multer')
router.post("/", [upload.single("profile")], UpdateController.update);

module.exports = router;