// settings
var settings = {
	port: process.env.PORT || 8000
}

// requires
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// configure middleware
app.use(bodyParser.json()); // json parser
app.use(bodyParser.urlencoded({ extended: true })); // body parser

// set routes
var routes = require("./routes/routes.js")(app);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

// start server
var server = app.listen(settings.port, function () {
    console.log("Listening on port %s", server.address().port);
});