const config = require('../../../config');

let store;
let cache;

if (config.remoteDB) {
	store = require('../../../store/remote-mysql');
	cache = require('../../../store/remote-cache');
} else {
	store = require('../../../store/mysql');
	cache = require('../../../store/redis');
}
const controller = require('./controller');

module.exports = controller(store);
