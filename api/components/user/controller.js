const sotre = require('../../../store/dummy');
const TABLE_USER = 'user';

function list() {
	return sotre.list(TABLE_USER);
}

module.exports = {
	list,
};
