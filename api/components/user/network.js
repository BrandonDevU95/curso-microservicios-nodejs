const express = require('express');
const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

//Routes
router.get('/', list);
router.get('/:id', get);
router.get('/:id/following', following);
router.post('/', upsert);
router.post('/follow/:id', secure('follow'), follow);
router.put('/', secure('update'), upsert);

//Internal functions
function list(req, res, next) {
	Controller.list()
		.then((list) => {
			response.success(req, res, list, 200);
		})
		.catch((err) => {
			response.error(req, res, err.message, 500);
		})
		.catch(next);
}

function get(req, res, next) {
	const { id } = req.params;
	Controller.get(parseInt(id))
		.then((user) => {
			response.success(req, res, user, 200);
		})
		.catch((err) => {
			response.error(req, res, err.message, 500);
		})
		.catch(next);
}

function upsert(req, res, next) {
	Controller.upsert(req.body)
		.then((user) => {
			response.success(req, res, user, 201);
		})
		.catch((err) => {
			response.error(req, res, err.message, 500);
		})
		.catch(next);
}

function follow(req, res, next) {
	Controller.follow(req.user.id, req.params.id)
		.then((data) => {
			response.success(req, res, data, 201);
		})
		.catch(next);
}

function following(req, res, next) {
	return Controller.following(req.params.id)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch(next);
}

module.exports = router;
