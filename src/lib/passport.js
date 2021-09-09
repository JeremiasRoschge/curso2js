const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../database")
const helpers = require("../lib/helpers.js")

passport.use("local.signup", new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username, password, done) => {
    console.log(req.body);
 const { fullname } = req.body; 
const newUser = {

    username,
    password,
    fullname
};
    newUser.password = await helpers.encrypPassword(password); 
    const result = await pool.query("INSERT INTO users SET ?", [newUser]);
    console.log(result)
    
}));

