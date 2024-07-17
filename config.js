module.exports = {
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
};
