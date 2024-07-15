const db = {
	user: [{ id: 1, name: 'Carlos' }],
};

function list(table) {
	return db[table];
}

function get(table, id) {
	const collection = list(table);
	return collection.filter((item) => item.id === id)[0] || null;
}

function upsert(table, data) {
	if (!db[table]) {
		db[table] = [];
	}

	db[table].push(data);
	console.log(db);
}

function remove(table, id) {
	return true;
}

module.exports = {
	list,
	get,
	upsert,
	remove,
};
