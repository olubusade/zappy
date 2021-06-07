const env = require('./env');
const Sequelize = require('sequelize');
const clic = require('cli-color');
const TAG = 'PG =>';
const config = require('./config');
/* DB connection for pure raw query */
async function DBConnect(){
	const client = new Client({
		host: env.db_host,
		port: env.db_port,
		database: env.db_name,
		user: env.db_username, 
		password: env.db_password
	});
	let isConnection = false;
	await client
		.connect()
		.then(() => {
			console.log(clc.green(TAG,'successfully get PG connection'));
			isConnection = true;
			client.disConnected=false;

			client.on('end', err => {
				if (err)
					console.log(clc.red(TAG,'error during PG disconnection', err.stack));
				else {
					console.log(clc.blackBright(TAG,'connection terminated normally'));
					client.disConnected = true;
				}
			});
			setTimeout(()=>{
				if ( client ){
					try{
						if ( !client.disConnected ){
							console.log(clc.red(TAG,'force disconnecting a connection'));
							client.end();
						}
					}
					catch(e) {
						console.log(clc.red(TAG,'error during force disconnection', e));
					}
				}
			},10000);
		})
		.catch(err => {
			console.error(TAG,'--connection error', err.stack ,'--');
			return null;
		});

	if ( isConnection )
		return client;
	else
		return null;
}
module.exports = DBConnect;



