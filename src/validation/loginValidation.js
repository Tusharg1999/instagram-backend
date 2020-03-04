const user=require('../schemas/user/user')
const loginValidation =async function ({username, password}) {
    let message = null;
    if (username === undefined || username.trim().length < 6) {
        message = "user name is either undefined or must have length of 6 char "
    }
    if (password === undefined || password.trim().length < 8 ) {
        message = "Password is either undefined or must have length of 8 char and your name and username cannot be password"
    }
    else {
        try{
           let result=await user.findOne({username});
            if (result.length >= 1) {
                throw new Error();
            }
        }catch (e) {
            console.log(e)
            message="User do not exist you can create new user"
        }
    }
    return message;
};
module.exports = loginValidation;