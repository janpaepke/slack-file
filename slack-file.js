module.exports = function (req, res) {
	var userName = req.body.user_name;

	var response = {
		text : 'Hello, ' + userName + '!'
	};
	// avoid infinite loop
	if (userName !== 'slackbot') {
		return res.status(200).json(response);
	} else {
		return res.status(200).end();
	}
}