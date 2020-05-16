const User = require("../schemas/user/user");

async function getUser({ authorization }) {
    const user = await User.findOne({ token: authorization });
    if (user !== null) {
        return { user: user, errorMessage: null }
    }
    return { user: null, errorMessage: "No user found" };
}
module.exports = getUser;