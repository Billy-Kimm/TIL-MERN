const passport = require('passport');
const router = require('express').Router();

router.get(
    '/',     // user req toss
    passport.authenticate('google', { scope: ['profile', 'email']}),
    (req,res) => {
        console.log(config.auth.google.clientID);
        res.send({happy: 'hacking'});
    }
)

router.get(
    '/callback',    // req+code => google => real user data
    passport.authenticate('google'),    // can not get /auth/google/callback

)

module.exports = router;