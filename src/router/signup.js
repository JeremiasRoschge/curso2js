const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("signup.ejs")
});

router.post("/signup", (req, res) => {
    console.log(res.body);
});

module.exports = router;