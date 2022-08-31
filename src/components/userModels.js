const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required:[true, 'Please add firstname']
    },
    lastname:{
        type: String,
        required:[true, 'Please add lastname']
    },
    email:{
        type: String,
        required:[true, 'Please add email'],
        unique:true
    },
    password:{
        type: String,
        required:[true, 'Please add password']
    },
},{timestamps: true})

module.exports = mongoose.model('User', userSchema)