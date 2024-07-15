const TABLE_USER = 'user';

module.exports = function (injectedStore) {
	let store = injectedStore;

	if (!store) {
		store = require('../../../store/dummy');
	}

	function list() {
		return store.list(TABLE_USER);
	}

	function get(id) {
		return store.get(TABLE_USER, id);
	}

	return {
		list,
		get,
	};
};
