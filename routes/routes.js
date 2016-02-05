var slack_file = require('../slack-file');

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.send("Hello World");
	});
	app.post("/api", slack_file);
}