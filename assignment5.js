"use strict";

var express = require("express"),
    bodyParser = require("body-parser"),
    http = require("http"),
    random = require("random-js"),
    app;

// Create our Express-powered HTTP server
// and have it listen on port 3000
http.createServer(app).listen(3000);

app = express();
var r = random();
app.use(bodyParser.json());
var win_count = 0;
var loss_count = 0;
// set up our routes
app.get("/stats", function (req, res) {
    //res.send("This is GET stats. \n Wins: "+win_count+" Loose: "+loose_count);
    //res.send("win"+win_count+"loose"+loose_count);
    res.send(JSON.stringify({ "wins": win_count, "losses": loss_count }));
});


app.post("/flip", function (req, res) {
    //res.send("This is POST flip.");
    var choice = req.body.call;
    console.log(choice);
    var arr = ["heads", "tails"];
    var a = r.shuffle(arr)[0];
    var result;
    console.log(a);
    if (choice === a) {
        result = "win";
        console.log("win");
        win_count++;
    }
    else {
        result = "lose";
        console.log("loose");
        loss_count++;
    }
    res.send(JSON.stringify({ "result": result }));


});

app.get("/goodbye", function (req, res) {
    res.send("Goodbye World!");
});