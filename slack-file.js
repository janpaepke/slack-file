module.exports = function (req, res) {
	var userName = req.body.user_name;

	var response = {
		text : 'Hello, ' + userName + '! this is the shit: <smb://spa1dc1/sp_at$/creation/KAPSCH/KAP/KAPCR14141_Personalinserate/03%20Layout/_alt|Click here> http://google.com' 
	};
	console.log (req.body);
	// avoid infinite loop
	if (userName !== 'slackbot') {
		return res.status(200).json(response);
	} else {
		return res.status(200).end();
	}
}