const httpURL_Request = require("request"),
	md5 = require('md5'),
	_ = require('lodash'),
	config = require('../../configs/config');

async function sendSMS(number,message){
	let promise;
	promise = new Promise((resolve) => {
		try {
			var postData = {
				"SMS": {
					"auth": {
						"username": config.SMS_API_USERNAME,
						"apikey": config.SMS_API_KEY
					},
					"message": {
						"sender": config.SMS_API_SENDER,
						"messagetext": message || 'SMS from '+config.SMS_API_SENDER,
						"flash": "0"
					},
					"recipients":
						{
							"gsm": [
								{
									"msidn": number,
									"msgid": md5(new Date()+number)
								}
								]
						}
				}
			};
			var options = {
				url: config.SMS_API_URL,
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: postData,
				json: true,
			};
			httpURL_Request(options, function ( error, response, data ) {
				if ( error ) resolve(undefined);
				else {
					if ( _.has(data,'response.status') ){
						if ( data.response.status=='SUCCESS' ){
							resolve(true);
						}
						else {
							resolve(new Error('failed to send sms, not succeed'));
						}
					}
					else {
						resolve(new Error('failed to send sms, no response '));
					}
				}
			});
		}
		catch(e) {
			if ( config.debug )
				helper.writeException(e);
			resolve(undefined);
		}
	});
	return promise;
}

module.exports = {
	sendSMS
};
