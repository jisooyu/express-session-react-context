const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys')

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
},
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })

        if (existingUser) {
            done(null, existingUser);
        } else {
            const user = await new User({ googleId: profile.id }).save()
            done(null, user);
        }
    }));

passport.use(new TwitterStrategy({
    consumerKey: '',
    consumerSecret: '',
    callbackURL: ""
},
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })

        if (existingUser) {
            done(null, existingUser);
        } else {
            const user = await new User({ googleId: profile.id }).save()
            done(null, user);
        }
    }));

// Local Strategy
passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        User.findOne({ email: email.toLowerCase() })
            .then(async (user) => {
                if (user && (await bcrypt.compare(password, user.password))) {
                    res.status(200).json({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        token: generateToken(user._id),
                    });
                } else {
                    res.status(401);
                    throw new Error('Invalid credentials');
                }
                return done(null, user);
            })
            .catch((err) => done(err));
    })
);