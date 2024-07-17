const express = require('express');
const config = require('../config');
const bodyParser = require('body-parser');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express();

//ROUTER
app.use(bodyParser.json());

app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/post', post);

app.use(errors);

app.listen(config.api.port, () => {
	console.log(`Server running on http://localhost:${config.api.port}`);
});
