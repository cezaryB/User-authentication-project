"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var app = express();
const db = mongoose.connection;

//connect to the database

mongoose.connect("mongodb://localhost/myDatabase");

db.once("open", () => {
    console.log("Yay it has opened!");
});

db.on("error", err => {
    console.log(err);
});


//parsing incoming requests

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//setting view engine

app.set("view engine", "pug");


//setting static resources

app.use(express.static(__dirname + "/public"));

//import routes

var routes = require("./routes");

app.use("/", routes);

//handle errors

app.use((req, res, next) => {
    const error = new Error("File not found");
    error.status = 404;
    return next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(3000, () => {
    console.log("App has just started on the port 3000");
});
