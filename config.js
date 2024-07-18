const { post } = require('request');

module.exports = {
	remoteDB: process.env.REMOTE_DB || false,
	api: {
		port: process.env.PORT || 3000,
	},
	jwt: {
		secret: process.env.JWT_SECRET || 'notasecret!',
	},
	mysql: {
		host: process.env.MYSQL_HOST || '172.18.0.2:3306',
		user: process.env.MYSQL_USER || 'brandondev',
		password: process.env.MYSQL_PASS || 'admin123',
		database: process.env.MYSQL_DB || 'microservicios',
	},
	mysqlService: {
		port: process.env.MYSQL_SRV_PORT || 3001,
		host: process.env.MYSQL_SRV_HOST || 'localhost',
	},
	post: {
		port: process.env.POST_PORT || 3002,
	},
};
