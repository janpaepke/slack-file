module.exports = function (req, res) {
	var userName = req.body.user_name;

	var response = {
		text : 'Hello, ' + userName + '! this is the shit: file://localhost/Volumes/sp_at$/creation/A1/MBN/02%20Text%20und%20Konzept/A1%20-%20Protokoll%207.Juli.rtf <a href="file://localhost/Volumes/sp_at$/creation/A1/MBN/02%20Text%20und%20Konzept/A1%20-%20Protokoll%207.Juli.rtf">link</a>'
	};
	// avoid infinite loop
	if (userName !== 'slackbot') {
		return res.status(200).json(response);
	} else {
		return res.status(200).end();
	}
}