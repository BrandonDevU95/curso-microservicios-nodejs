const express = require('express');
const response = require('../../../network/response');
const router = express.Router();
const Controller = require('./controller');

router.get('/', function (req, res) {
	const list = Controller.list();
	response.success(req, res, list, 200);
});

module.exports = router;
