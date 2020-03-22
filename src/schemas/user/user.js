
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    min:6,
    required:true,
  },
  username:{
    type: String,
    min: 8,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  salt:{
    type:String
  },
  phoneNumber:{
    type: String,
    max:10,
    min:10,
  },
  bio:{
    type:String,
    max: 300,
  },
  email:{
    type:String,
    unique:true,
  },
  gender:{
    type:Number,
    min:1,
    max:1
  },
  privacy:{
    type:Boolean,
  },
  token:{
    type:String,
  },
  followers:[{type:mongoose.Schema.Types.ObjectID}]
});

const User=mongoose.model("user",userSchema);
module.exports=User;
