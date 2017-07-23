"use strict";

const express = require("express");
const router = express.Router();
const User = require("../models/index");

router.get("/", (req, res, next) => {
    res.render("main", {path: req.path});
});


router.get("/register", (req, res, next) => {
    console.log(req.path);
    res.render("register", {path: req.path});
});


router.post("/register", (req, res, next) => {
    const myUser = new User({
        name: "Cezary",
        email: "Example",
        password: "Something"
    });
    myUser.save((err, user) => {
        if (err) {
            return next(err);
        }
        else console.log(user);
    });
    console.log(req.body);

    res.send("it worked!");
});

module.exports = router;