// settings
var settings = {
	port: process.env.PORT || 5000
}

// requires
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js")(app);
var app = express();

// configure
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

// start server
var server = app.listen(settings.port, function () {
    console.log("Listening on port %s", server.address().port);
});