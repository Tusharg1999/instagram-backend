const user=require('../../schemas/user/user');
const {debugLog,errorLog}=require('../../utils/debug/logger')
async function verifyToken(req,res,next) {
    debugLog("in verification middleware")
    let username=req.headers['username'];
    try{
        const result=await user.findOne({username:username});
        if(result==null){
            return res.status(400).send("User do not exist");
        }  
        debugLog(req.headers["authorization"]);
        if(result.token!==req.headers["authorization"]){
            return res.status(401).send("Unauthorized Access");
        }
    }catch(e){
        debugLog(e)
    }
    next();
}
module.exports={verifyToken}