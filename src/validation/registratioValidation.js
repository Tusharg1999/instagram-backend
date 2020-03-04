const user = require('../schemas/user/user')
const validateUser = async function ({name, email, username, password}) {
    let message = null;
    if (name === undefined || name.trim().length <= 2) {
        message = "Name is either undefined or is less than 6"
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) {
        message = "Email is not valid email"
    } else if (username === undefined || username.trim().length < 6) {
        message = "user name is either undefined or must have length of 6 char "
    } else if (password === undefined || password.trim().length < 8 || password === name || password === username) {
        message = "Password is either undefined or must have length of 8 char and your name and username cannot be password"
    } else {
        try {
            let result = await user.find().or([{username}, {email}]);
            if (result.length >= 1) {
                throw new Error();
            }
        } catch (e) {
            console.log(e);
            message = "User already Exist try different username or email"
        }
    }

    return message;
};
module.exports = validateUser;