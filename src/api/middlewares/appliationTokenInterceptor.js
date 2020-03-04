
let applicationTokenInterceptor=function (req,res,next) {
    if(req.headers.app_token!==process.env.APPLICATION_TOKEN){
        return res.status(412).send("Invalid Request");
    }
    next();
};

module.exports=applicationTokenInterceptor