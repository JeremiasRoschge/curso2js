const express = require("express");
const router = express.Router();

const pool = require("../database.js")

router
    .get("/", function (req, res) { 
        res.render("index.ejs")
     })

module.exports = router;