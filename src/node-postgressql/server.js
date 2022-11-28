const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const passport = reuire('passport')

const corOptions = {
    origin: 'http://localhost:8000'
}


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());

// routers
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'))
app.use('/api/auth', require('./routes/authRoutes'))


// server start here...

app.use(errorHandler)
app.listen(process.env.PG_PORT || 8000, () => {
    console.log(`server running at local host ${process.env.PG_PORT}`)
})




// local strategy code with


// const express = require('express')
// const cors = require('cors')
// require('dotenv').config()
// const app = express();
// const { errorHandler } = require('./middleware/errorHandler');
// // const auth = require('./passportAuthRoutes/auth')
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy
// const db = require('./config/index');
// const User = db.auth
// console.log(User, "User")
// // const { passportAuthentication } = require('./middleware/passport')


// // const BasicStrategy = require('passport-http').BasicStrategy
// const JwtStrategy = require('passport-jwt').Strategy
// const ExtractJwt = require('passport-jwt').ExtractJwt



// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.use(errorHandler)
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false, maxAge: 60000 }
// }))
// // app.use(expressSession())

// // initialize passport
// app.use(passport.initialize())
// app.use(passport.session())
// // passportAuthentication(passport)

// // jwtExtract 
// passport.use(new JwtStrategy({
//     secretOrKey: process.env.JWT_SEC_KEY,
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
// },
//     async (jwtPayload, cb) => {
//         try {
//             // console.log(jwtPayload, "jwtPayload")
//             const user = await User.findOne({
//                 where: {
//                     email: jwtPayload.user.username
//                 }
//             })
//             if (!user) {
//                 return cb(err, false);
//             }
//             return cb(null, user)
//         } catch (error) {
//             cb(error)
//         }
//     }
// ));




// // local strategy
// passport.use(new LocalStrategy(
//     async function (username, password, done) {
//         console.log(username, password, "<=======<==========zahid")
//         let user = await User.findOne({ where: { username: username } })
//         if (!user) return done(null, false, { message: "Invalid username" })
//         else if (user.password !== password) return done(null, false, { message: 'Incorrect password' })
//         console.log(user, "all user data............")
//         return done(null, user)
//     }
// ))

// // JWT strategy
// // passport.use(new JwtStrategy(
// //     {
// //         secretOrKey: process.env.JWT_SEC_KEY,
// //         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
// //     },
// //     async function (jwt_payload, done) {
// //         console.log(jwt_payload, "jwt_payload")
// //         let user = await User.findById(jwt_payload.id)
// //         if (!user) {
// //             // @todo log error
// //             return done(null, false, "Invalid token")
// //         }
// //         return done(null, user)
// //     }
// // ))



// // used to serialize the user for the session
// passport.serializeUser(function (user, done) {
//     if (user) { return done(null, user.id) }
//     console.log(user.id, "Suser iddddd")
//     return done(null, false)
// })

// // // used to deserialize the user
// passport.deserializeUser(async (id, done) => {
//     const user = await User.findByPk(id)
//     if (!user) return done(null, false)
//     console.log(id, "deuser")
//     return done(null, user)
// })


// // msg: "passport local is working... now"


// app.get('/v2/test',
//     isAuth,
//     (req, res) => {
//         req.session.test ? req.session.test++ : req.session.test = 1;
//         res.status(200).json(req.session.test.toString() + req.user.username)
//     })

// function isAuth(req, res, done) {
//     console.log(req.user, "userrrr")
//     if (req.user) {
//         return done()
//     }
//     return res.status(401).json("not authenticated user..")
// }

// app.post('/v2/login',
//     passport.authenticate('local'),
//     (req, res) => {
//         return res.json({ user: req.user })
//     }
// )
// app.post('/v2/register',
//     async (req, res, done) => {
//         const { username, email, password } = req.body

//         const userAlready = await User.findOne({ where: { username: username } })
//         if (userAlready) {
//             console.log(userAlready, "userAlready")
//             return res.status(401).json({ msg: "User already registered" })
//         } else {
//             const user = await User.create({
//                 username: username,
//                 email: email,
//                 password: password
//             })
//             res.status(200).json({ user: user })
//             done(null, user)
//         }
//     }
// )







// // app.use('/auth', auth)
// // app.use('/api/auth', require('./routers/authRoutes'))
// app.use('/api/products', isAuth, require('./routers/productRoutes'))


// app.listen(process.env.PG_PORT || 9000, (err) => {
//     if (!err) {
//         console.log(`server is running on ${process.env.PG_PORT}...`)
//     }
// })

