const { Router } = require('express');
const router = Router();
const passport = require("passport");

router.get("/", (req, res) => {
    res.render("signup.ejs")
});

router.post("/",  passport.authenticate("local.signup", {
        succesRedirect: "/profile",
        failureRedirect: "/signup",
        failureFlash: true
 
    }));

    router.get("/profile", (req, res) => {
        res.send("this is your profile uwuw");
    })

module.exports = router;