const { MSG_CATCH } = require("../utility/constants");
const jwt = require("jsonwebtoken");
const { comResponse } = require("../utility/common");

exports.cookieJwtAuth = (req, res, next) => {
	const token = req.cookies.token;
	try {
		const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.user = user;
		next();
	} catch (err) {
		res.clearCookie("token");
		return res.status(500).send(comResponse(res, 500, false, MSG_CATCH, err.toString()));
	}
};