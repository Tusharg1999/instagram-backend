const { debugLog, errorLog } = require("../utils/debug/logger");
const getUser = require("../service/findUser");
const User = require("../schemas/user/user");
async function update(req, res) {
    const user = await getUser(req.headers);
    if (user.errorMessage !== null) res.status(404).send(user.errorMessage);
    const { name = "", phoneNumber = "", bio = "" } = req.body;
    debugLog(req.file)
    try {
        const response = await User.updateOne({ token: req.headers.authorization }, { name, phoneNumber, bio, imageUrl: req.file.filename });
        debugLog(response)
    } catch (e) {
        debugLog(e)
    }
    res.status(200).send("OK");
}

module.exports = { update }