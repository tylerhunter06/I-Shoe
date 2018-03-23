module.exports = function(app, passport) {

    app.get('/auth/authenticated', function(req, res) {
        if (req.isAuthenticated()) res.json({ authenticated: true });
        else res.json({ authenticated: false });
    });

    app.post(
        '/auth/signup',
        passport.authenticate('local-signup'),
        function(req, res) {
            if (req.isAuthenticated()) res.json({ authenticated: true });
            else res.json({ authenticated: false });
        }
    );

    app.post(
        '/auth/signin',
        passport.authenticate('local-signin'),
        function(req, res) {
            if (req.isAuthenticated()) res.json({ authenticated: true });
            else res.json({ authenticated: false });
        }
    );
};
