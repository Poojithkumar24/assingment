const User = require('../models/userModel')


const loginUser = async(req,res)=>{
    res.json({msg:'login user'})
}

const registerUser = async(req,res)=>{
    res.json({msg:'register user'})
}


module.exports = {
    loginUser,
    registerUser
}