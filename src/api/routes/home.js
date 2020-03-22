const Express = require('express');
const {verifyToken} = require('../middlewares/tokenVerifier')


const router = Express.Router();
router.get('/', verifyToken, async (req, res) => {
    res.send("eeee lavdaaaa")
});
module.exports = router;