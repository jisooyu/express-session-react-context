const passport = require('passport');
const { ensureAuth } = require('../middleware/auth')

module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    });

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/display');
    });

    app.post('/api/login', passport.authenticate('local', { failureMessage: 'Invalid email or password.' }),
        (req, res) => {
            res.send({ message: 'Logged in successfully' });
        });

    app.post('/api/post', ensureAuth, (req, res) => {
        res.send({ message: [req.user, req.isAuthenticated()] });
    });

    app.post('/api/logout', (req, res) => {
        req.session.destroy();
        req.logout(() => {
            res.send({ message: 'Logged out successfully' })
        });
    });
    // app.get('/api/logout', (req, res) => {
    //     req.logout(); // This is a Passport function that removes the user's session
    //     res.redirect('/'); // Redirect the user back to the home page
    // });
}
