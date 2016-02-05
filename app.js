// settings
var settings = {
	port: 8000
}

// requires
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);


// start server
var server = app.listen(settings.port, function () {
    console.log("Listening on port %s...", server.address().port);
});