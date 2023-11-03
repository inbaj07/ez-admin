const Joi = require("joi");
const { comResponse } = require("../utility/common");

exports.add = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			title: Joi.string().min(1).required().error(error => {
				return error;
			}),
			content: Joi.string().min(1).required().error(error => {
				return error;
			}),
			image: Joi.string().required().error(error => {
				return error;
			}),
			userDetails: Joi.object().keys({
				user_id: Joi.string().alphanum().length(24).required().error(error => {
					return error;
				}),
				first: Joi.string().trim().min(3).max(25).required().error(error => {
					return error;
				}),
				last: Joi.string().trim().min(1).max(25).required().error(error => {
					return error;
				}),
			})
		}).unknown(true)
	}).unknown(true);
	const { error, value } = schema.validate(req);
	if (error) {
		return res.status(201).send(comResponse(res, 422, false, "validation error", error.details[0].message));
	} else {
		return next();
	}
};