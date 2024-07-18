const express = require('express');

const response = require('../network/response');
const Store = require('../store/mysql');

const router = express.Router();

router.get('/:table', list);
router.get('/:table/:id', get);
router.post('/:table', insert);
router.put('/:table', upsert);

async function list(req, res, next) {
	await Store.list(req.params.table)
		.then((list) => {
			response.success(req, res, list, 200);
		})
		.catch(next);
}

async function get(req, res, next) {
	await Store.get(req.params.table, req.params.id)
		.then((item) => {
			response.success(req, res, item, 200);
		})
		.catch(next);
}

async function insert(req, res, next) {
	await Store.insert(req.params.table, req.body)
		.then((item) => {
			response.success(req, res, item, 201);
		})
		.catch(next);
}

async function upsert(req, res, next) {
	await Store.upsert(req.params.table, req.body)
		.then((item) => {
			response.success(req, res, item, 200);
		})
		.catch(next);
}

module.exports = router;
