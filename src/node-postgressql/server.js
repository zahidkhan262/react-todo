const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');


const corOptions = {
    origin: 'http://localhost:8000'
}


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routers
app.use('/api/users', require('./routes/userRoutes'))

// server start here...

app.use(errorHandler)
app.listen(process.env.PG_PORT || 8000, () => {
    console.log(`server running at local host ${process.env.PG_PORT}`)
})

