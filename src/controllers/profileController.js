const user = require('../schemas/user/user');
const {errorLog} = require("../utils/debug/logger");
const {debugLog} = require("../utils/debug/logger");

async function getProfile(req, res) {
    let responseInfo;
    const currentUser = await user.findOne({username: req.headers['username']});
    debugLog(currentUser);
    try {
        const {followers, following, name, username, email, imageUrl} = currentUser;
        responseInfo = {
            name,
            username,
            email,
            imageUrl,
            followersCount: followers.length,
            followingCount: following.length
        };

    } catch (e) {
        errorLog(e)
    }
    res.status(200).send(responseInfo);
}

module.exports = {getProfile}