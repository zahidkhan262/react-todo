const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const db = require('../config/database')
const Auth = db.auth



// ... authenticate passport jwt

exports.passportAuthentication = (passport) => {
    console.log(passport, "passport..")
    console.log("first.......")
    passport.use(new JWTstrategy(
        {
            secretOrKey: process.env.JWT_SECRET_KEY,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
        },
        async (JWT_Payload, done) => {
            try {
                console.log(JWT_Payload, "payload")
                const user = await Auth.findOne({ where: { email: JWT_Payload.user.email } })
                if (!user) return done(err, false)
                return done(null, user)
            } catch (error) {
                done(error);
            }
        }
    )
    );
}


// passport.use(
//     'signup',
//     new localStrategy(
//         {
//             usernameField: 'email',
//             passwordField: 'password'
//         },
//         async (email, password, done) => {
//             try {
//                 const user = await Auth.create({ username, email, password });
//                 console.log(email, password, "email and password")
//                 return done(null, user);
//             } catch (error) {
//                 done(error);
//             }
//         }
//     )
// );


// // login

// // ...

// passport.use(
//     'logins',
//     new localStrategy(
//         {
//             usernameField: 'email',
//             passwordField: 'password'
//         },
//         async (email, password, done) => {
//             try {
//                 const user = await Auth.findOne({ email });

//                 if (!user) {
//                     return done(null, false, { message: 'User not found' });
//                 }

//                 const validate = await user.isValidPassword(password);

//                 if (!validate) {
//                     return done(null, false, { message: 'Wrong Password' });
//                 }

//                 return done(null, user, { message: 'Logged in Successfully' });
//             } catch (error) {
//                 return done(error);
//             }
//         }
//     )
// );


// ...



