const express = require('express')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const cors = require('cors')
const connectDB = require('./config/dataBase')
const PORT = process.env.PORT || 8000



connectDB();
const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}));

// app.get("/api/sample", (req,res)=>{
    //     res.status(200).json("hi node")
    // })

app.use('/api/sample' ,require('./routes/customerRouter'))
app.use('/api/users' ,require('./routes/userRouter'))
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Your Server has been started on ${PORT}`.gray.underline.bgGreen)
})