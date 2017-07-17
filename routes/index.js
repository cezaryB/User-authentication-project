"use strict";

var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
    res.render("main", {path: req.path});
});


router.get("/register", (req, res, next) => {
    console.log(req.path);
    res.render("register", {path: req.path});
});

module.exports = router;