const nanoid = require('nanoid');
const auth = require('../auth');
const TABLE_USER = 'user';

module.exports = function (injectedStore, injectedCache) {
	let store = injectedStore;
	let cache = injectedCache;

	if (!store) {
		store = require('../../../store/mysql');
	}

	if (!cache) {
		cache = require('../../../store/redis');
	}

	async function list() {
		let users = await cache.list(TABLE_USER);

		if (!users) {
			// console.log('No estaba en cache. Buscando en DB');
			users = await store.list(TABLE_USER);
			cache.upsert(TABLE_USER, users);
		} else {
			// console.log('Nos traemos datos de cache');
		}

		return users;
	}

	function get(id) {
		return store.get(TABLE_USER, id);
	}

	async function upsert(body) {
		const user = {
			name: body.name,
			username: body.username,
		};

		if (body.id) {
			user.id = body.id;
		} else {
			user.id = nanoid();
		}

		if (body.password || body.username) {
			await auth.upsert({
				id: user.id,
				username: user.username,
				password: body.password,
			});
		}
		return store.upsert(TABLE_USER, user, true);
	}

	async function follow(from, to) {
		return store.upsert(
			`${TABLE_USER}_follow`,
			{
				user_from: from,
				user_to: to,
			},
			true
		);
	}

	async function following(user) {
		const join = {};
		join[TABLE_USER] = 'user_to'; // { user: 'user_to' }
		const query = { user_from: user };

		return store.query(`${TABLE_USER}_follow`, query, join);
	}

	return {
		list,
		get,
		upsert,
		follow,
		following,
	};
};
