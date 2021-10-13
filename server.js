const express = require("express");
const app = express();
const fs = require('fs')
const ejs = require('ejs')


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(require('./routes'))


//gets the home page
app.get("/", function (req, res) {
    res.render("home");
});

//getting the games page
app.get("/games", function (req, res) {
    const pc = fs.readdirSync('./public/images/pc')
    const _console = fs.readdirSync('./public/images/console')
    res.render("games", {
        pc: pc,
        console: _console
    });
});

//gets the events page
app.get("/events", function (req, res) {
    res.render("events");
});

//gets the event description page
app.get("/event-explained", function (req, res) {
    res.render("event-explained");
});

//gets the contact page
app.get("/contact", function (req, res) {
    res.render("contact");
});



let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("service up ");
});