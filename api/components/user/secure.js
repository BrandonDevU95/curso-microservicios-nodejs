mofule.exports = function checkAuth(action) {
	function middleware(req, res, next) {
		switch (action) {
			case 'update':
				const owner = req.params.id;
				auth(owner, req, next);
				break;
			default:
				next();
		}
	}

	function auth(owner, req, next) {
		if (owner === req.user.id) {
			return next();
		}
		res.status(403).send({
			error: 'No tienes permiso para realizar esta acción',
		});
	}

	return middleware;
};
