module.exports = function (req, res) {
	var userName = req.body.user_name;

	var response = {
		text : 'Hello, ' + userName + '! Check it out: <file://localhost/Volumes/sp_at$/creation/_SP_CD/SP_Jobmappe_2015.indd|Here\'s your file!>' 
	};
	console.log (req.body);
	// avoid infinite loop
	if (userName !== 'slackbot') {
		return res.status(200).json(response);
	} else {
		return res.status(200).end();
	}
}