const mongoose = require('mongoose');

module.exports = async ()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MONGO DATABASE CONNECTED :${db.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`${error}`.red.underline,"ok")
        process.exit(1)
    }
}