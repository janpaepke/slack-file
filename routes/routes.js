var slack_file = require('../slack-file');

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.send("Hello World <a href='file:///Users/paepkej/Desktop/Link-icon.png'>test</a>");
	});
	app.post("/api", slack_file);
}