const express = require('express');
const config = require('../config');
const bodyParser = require('body-parser');

const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express();

//ROUTER
app.use(bodyParser.json());

app.use('/api/post', post);

app.use(errors);

app.listen(config.post.port, () => {
	console.log(`Post Service started on por ${config.post.port}`);
});
