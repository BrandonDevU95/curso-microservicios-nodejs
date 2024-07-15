const express = require('express');
const response = require('../../../network/response');
const router = express.Router();
const Controller = require('./index');

router.get('/', function (req, res) {
	Controller.list()
		.then((list) => {
			response.success(req, res, list, 200);
		})
		.catch((err) => {
			response.error(req, res, err.message, 500);
		});
});

router.get('/:id', function (req, res) {
	const { id } = req.params;
	Controller.get(parseInt(id))
		.then((user) => {
			response.success(req, res, user, 200);
		})
		.catch((err) => {
			response.error(req, res, err.message, 500);
		});
});

module.exports = router;
