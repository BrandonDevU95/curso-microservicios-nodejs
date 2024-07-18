const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');
const router = require('./network');
const app = express();

app.use(bodyParser.json());

//Routes
app.use('/', router);

app.listen(config.cacheService.port, () => {
	console.log(`MySQL Service started on port ${config.cacheService.port}`);
});
