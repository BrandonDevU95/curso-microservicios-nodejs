const nanoid = require('nanoid');
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

	function upsert(body) {
		const user = {
			name: body.name,
		};

		if (body.id) {
			user.id = body.id;
		} else {
			user.id = nanoid();
		}

		return store.upsert(TABLE_USER, user);
	}

	return {
		list,
		get,
		upsert,
	};
};
