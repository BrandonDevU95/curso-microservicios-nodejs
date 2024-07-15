const express = require('express');
const config = require('../config');
const bodyParser = require('body-parser');
const user = require('./components/user/network');

const app = express();

//ROUTER
app.use('/api/user', user);
app.use(bodyParser.json());

app.listen(config.api.port, () => {
	console.log(`Server running on http://localhost:${config.api.port}`);
});
