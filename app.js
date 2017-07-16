"use strict";

var express = require("express");
var app = express();


//setting view engine

app.set("view engine", "ejs");


//setting static resources

app.use(express.static(__dirname + "/public"));

//import routes

var routes = require("./routes");

app.use("/", routes);


app.listen(3000, () => {
    console.log("App has just started on the port 3000");
});