const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');
const User = require('../models/userModels')


const readData= asyncHandler( async(req, res)=>{
    const userFind = await User.find()
    res.status(200).json(userFind)
})



// register     Register new User
//POST Public
//--------------------------REGISTER--------------------------//

const registerUser = asyncHandler(async(req, res)=>{
    // destructuring object from req.body
    const {firstname, lastname, email, password} = req.body;

    // if user not add fields 
    if(!firstname || !lastname || !email || !password){
        res.status(400)
        throw new Error("Please add all field")
    }

    // check if user exists
    const userExists = await User.findOne({email:email})
    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    //create  hashed password via bcrypt

    const salt= await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:hashedPassword
    })

    if(user){
        res.status(200).json({
            _id:user.id,
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            token : generateToken(user.id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }
});

//--------------------------LOGIN--------------------------//
const loginUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body;

    // check or match email
    const user = await User.findOne({email:email})
    
    // const comparePassword = await bcrypt.compare(password, user.password)
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id:user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            token:generateToken(user.id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid email and password')
    }
})

//-----------------------Generate JWT token---------------------------------//

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : '30d'
})
}

// we can also write like it
// jwt.sign({id}, JWT_SECRET, (err, decoded)=>{
// if(!err){
// res.status(200).json({
// token:decoded,
//     user:user
// })
// }
// })

module.exports ={
    loginUser,
    registerUser,
    readData
}
