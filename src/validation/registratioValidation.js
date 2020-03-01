const validateUser = function ({name, email, username, password}) {
    let err = [];
    if (name === undefined || name.trim().length <= 2) {
        return "Name is either undefined or is less than 6"
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) {
        return "Email is not valid email"
    }
    if (username === undefined || username.trim().length < 6) {
        return "user name is either undefined or must have length of 6 char "
    }
    if (password === undefined || password.trim().length<8 || password===name||password===username){
        return "Password is either undefined or must have length of 8 char and your name and username cannot be password"
    }
        return null;
};
module.exports = validateUser;