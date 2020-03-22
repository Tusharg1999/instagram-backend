const Express=require('express');
const {verifyToken}=require('../middlewares/tokenVerifier');
const ProfileController=require('../../controllers/profileController')
const router =Express.Router();

router.get('/',[verifyToken],ProfileController.getProfile);
router.post('/',[verifyToken],ProfileController.updateProfile);
module.exports=router;