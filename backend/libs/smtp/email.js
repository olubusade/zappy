const config = require('../../configs/config'),
	nodemailer = require("nodemailer");

var transporter;

(initEmailTransporter = async ()=>{
	testAccount = await nodemailer.createTestAccount();
	transporter = nodemailer.createTransport({
		host: config.EMAIL_HOST,
		port: config.EMAIL_PORT,
		secure: true,
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASSWORD
  }
	});
})();


async function sendEmail (sendTo,subject,text,html) {
	if ( transporter ){
		try{
			// send mail with defined transport object
			let info = await transporter.sendMail({
				from: config.EMAIL_FROM,
				to: sendTo,
				subject: subject||'',
				text: text||'',
				html: html||''
			});
		}
		catch ( e ) {
			console.log('Failed to send email');
			console.log(e);
		}
	} else {
		console.log('--- EMAIL TRANSPORTER NOT READY ---');
	}
}

module.exports={
	sendEmail
};
