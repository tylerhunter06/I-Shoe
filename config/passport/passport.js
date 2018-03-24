const bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, user) {
    const User = user;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(async function(id, done) {
        try {
            const user = await User.findById(id);
            done(null, user.id);
        } catch (e) {
            done(e, null);
        }
    });

    // Signup
    passport.use(
        'local-signup',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
            async function(req, email, password, done) {
                try {
                    const generateHash = password => bCrypt.hashSync(password, bCrypt.genSaltSync(8));

                    const user = await User.findOne({ where: { email: email } });

                    if (user) return done(null, false, { message: 'That email is already taken' });
                    const userPassword = generateHash(password);
                    const data = {
                        email: email,
                        password: userPassword
                    };

                    User.create(data).then(function(inserted, user) {
                        console.log(inserted);
                        console.log(user);
                        if (!inserted) return done(null, false);
                        else return done(user, null);
                    });
                } catch (e) {
                    console.error(e);
                    process.exit(1);
                }
            }
        )
    );

    // Signin
    passport.use(
        'local-signin',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },

            async function(req, email, password, done) {
                try {
                    const User = user;

                    const isValidPassword = (userpass, password) => bCrypt.compareSync(password, userpass);

                    const preexistingUser = await User.findOne({ where: { email: email } });
                    if (!preexistingUser) return done(null, false, { message: 'Email does not exist' });
                    if (!isValidPassword) return done(null, false, { message: 'Incorrect password.' });

                    const userinfo = await preexistingUser.get();

                    return done(null, userinfo);
                } catch (e) {
                    console.error(e);
                    process.exit(1);
                }
            }
        )
    );
};
