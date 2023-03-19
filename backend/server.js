const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const keys = require('./config/keys')
require('./models/User');
require('./services/passport');

// Add this line at the beginning of your app.js file
const path = require('path');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Add this line after the app.use(express.json()) statement
app.use(express.static(path.join(__dirname, 'public')))

app.use(
    session({
        secret: keys.secretKey,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({ mongoUrl: keys.mongoURI }),
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
