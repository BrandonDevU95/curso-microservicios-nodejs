const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');
const err = require('../utils/error');

const secret = config.jwt.secret;

function sign(data) {
	const token = jwt.sign(JSON.stringify(data), secret);
	return token;
}

function verify(token) {
	return jwt.verify(token, secret);
}

function getToken(auth) {
	if (!auth) {
		throw error('No viene token', 401);
	}

	if (auth.indexOf('Bearer ') === -1) {
		throw error('Formato inválido', 401);
	}

	let token = auth.replace('Bearer ', '');

	return token;
}

function decodeHeader(req) {
	const authorization = req.headers.authorization || '';
	const token = getToken(authorization);

	const decoded = verify(token);

	req.user = decoded;

	return decoded;
}

const check = {
	own: function (req, owner) {
		const decoded = decodeHeader(req);

		if (decoded.id !== owner) {
			throw error('No puedes hacer esto', 401);
		}
	},

	logged: function (req) {
		decodeHeader(req);
	},
};

module.exports = {
	sign,
	check,
};
