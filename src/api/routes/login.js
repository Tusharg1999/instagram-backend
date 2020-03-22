const Express = require('express');
const LoginController =require('../../controllers/login')

const router = Express.Router();

router.post("/",LoginController.login );

module.exports = router;