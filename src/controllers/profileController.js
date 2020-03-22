const user = require('../schemas/user/user');
const {errorLog} = require("../utils/debug/logger");
const {debugLog} = require("../utils/debug/logger");

async function getProfile(req, res) {
    let responseInfo;
    const currentUser = await user.findOne({username: req.headers['username']});
    debugLog(currentUser);
    try {
        const {followers, following, name, username, email, imageUrl, bio} = currentUser;
        responseInfo = {
            name,
            username,
            email,
            imageUrl,
            bio,
            followersCount: followers.length,
            followingCount: following.length
        };

    } catch (e) {
        return errorLog(e)
    }
    res.status(200).send({data:[responseInfo]});
}

async function updateProfile(req, res) {
    const {name, username, bio} = req.body
    const result =await user.findOne({username});
    debugLog("Here");
    debugLog(result);
    if (result) return res.status(400).send({msg:"User already exist try something different"});
    try {
        const data={
            name,
            username,
            bio
        };
        await user.updateOne({username:req.headers['username']},data);

    }catch (e) {
        errorLog(e);
    }
    res.status(201).send("You successfully update your profile")
}

module.exports = {getProfile, updateProfile}