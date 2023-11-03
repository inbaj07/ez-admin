const Joi = require("joi");
const common_files = require("../utility/common");
const { comResponse } = require("../utility/common");
const constant = require("../utility/constants");

exports.user = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			first_name: Joi.string().allow("").min(3).max(25).required().error(error => {
				return error;
			}),
			last_name: Joi.string().allow("").min(1).max(25).required().error(error => {
				return error;
			}),
			email: Joi.string().email().required().error(error => {
				return error;
			}),
			gender: Joi.string().valid(constant.GENDER.MALE, constant.GENDER.FEMALE).required().error(error => {
				return error;
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

exports._id = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			_id: Joi.string().alphanum().length(24).required().error(error => {
				switch (error[0].type) {
				case "any.empty":
					error[0].message = "_id is required!";
					break;
				case "string.length":
					error[0].message = `_id should have ${error[0].context.limit} characters!`;
					break;
				case "string.alphanum":
					error[0].message = "_id should be alphanumeric!";
					break;
				default:
					break;
				}
				return error;
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

exports.users_get = (req, res, next) => {
	const schema = Joi.object().keys({
		params: Joi.object().keys({
			user_type: Joi.string().alphanum().valid("staff", "student").required().error(error => {
				return error;
			}),
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_mobile_mail = (req, res, next) => {
	const schema = Joi.object().keys({
		params: Joi.object().keys({
			match: Joi.string().alphanum().valid("mobile", "employee_id").required().error(error => {
				return error;
			}),
			value: Joi.string().alphanum().required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_import = (req, res, next) => {
	let schema;
	if (req.body.user_type == constant.EVENT_WHOM.STAFF) {
		schema = Joi.object().keys({
			body: Joi.object().keys({
				data: Joi.array().items(
					Joi.object().keys({
						// username: Joi.string().alphanum().min(3).max(20).required().error(error => {
						//     return error;
						// }),
						employee_id: Joi.string().alphanum().min(3).max(20).required().error(error => {
							return error;
						}),
						first_name: Joi.string().allow(" ").min(3).max(25).required().error(error => {
							return error;
						}),
						middle_name: Joi.string().allow(" ").min(1).max(25).required().error(error => {
							return error;
						}),
						last_name: Joi.string().allow(" ").min(1).max(25).required().error(error => {
							return error;
						}),
						family_name: Joi.string().allow(" ").min(1).max(25).error(error => {
							return error;
						}),
						email: Joi.string().email().required().error(error => {
							return error;
						}),
						gender: Joi.string().valid(constant.GENDER.MALE, constant.GENDER.FEMALE).required().error(error => {
							return error;
						}),
						nationality_id: Joi.string().min(3).max(25).required().error(error => {
							return error;
						})
					}).unknown(true)
				)
			}).unknown(true)
		}).unknown(true);
	} else if (req.body.user_type == constant.EVENT_WHOM.STUDENT) {
		schema = Joi.object().keys({
			body: Joi.object().keys({
				data: Joi.array().items(
					Joi.object().keys({
						// username: Joi.string().alphanum().min(3).max(20).required().error(error => {
						//     return error;
						// }),
						acadimic_no: Joi.string().alphanum().min(3).max(20).required().error(error => {
							return error;
						}),
						first_name: Joi.string().allow(" ").min(3).max(25).required().error(error => {
							return error;
						}),
						middle_name: Joi.string().allow(" ").min(1).max(25).required().error(error => {
							return error;
						}),
						last_name: Joi.string().allow(" ").min(1).max(25).required().error(error => {
							return error;
						}),
						family_name: Joi.string().allow(" ").min(1).max(25).error(error => {
							return error;
						}),
						email: Joi.string().email().required().error(error => {
							return error;
						}),
						gender: Joi.string().valid(constant.GENDER.MALE, constant.GENDER.FEMALE).required().error(error => {
							return error;
						}),
						nationality_id: Joi.string().min(3).max(25).required().error(error => {
							return error;
						}),
						program_no: Joi.string().min(3).max(10).required().error(error => {
							return error;
						}),
						enrollment_year: Joi.string().error(error => {
							return error;
						}),
						batch: Joi.string().valid(constant.BATCH.REGULAR, constant.BATCH.INTERIM).error(error => {
							return error;
						})
					}).unknown(true)
				)
			}).unknown(true)
		}).unknown(true);
	}

	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.signup = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			email: Joi.string().email().required().error(error => {
				return error;
			}),
			password: Joi.string().min(8).max(25).required().error(error => {
				return error;
			})
		})
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.login = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			email: Joi.string().email().required().error(error => {
				return error;
			}),
			password: Joi.string().min(8).max(25).required().error(error => {
				return error;
			}),
			otp_mode: Joi.string().valid("email", "mobile").required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.set_password = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			old_password: Joi.string().min(8).max(25).required().error(error => {
				return error;
			}),
			new_password: Joi.string().min(8).max(25).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.mobile_register = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			mobile: Joi.string().min(10).max(20).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.otp_verify = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			otp: Joi.number().max(9999).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.change_mobile = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			otp: Joi.number().max(9999).required().error(error => {
				return error;
			}),
			reason: Joi.string().min(3).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.profile_insert = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			mobile: Joi.number().min(10).max(100000000000).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.profile_update = (req, res, next) => {
	let schema;

	schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			dob: Joi.string().min(3).max(20).required().error(error => {
				return error;
			}),
			_nationality_id: Joi.string().length(24).required().error(error => {
				return error;
			}),
			building: Joi.string().allow(" ").min(3).max(250).required().error(error => {
				return error;
			}),
			city: Joi.string().min(3).max(25).required().error(error => {
				return error;
			}),
			district: Joi.string().min(3).max(25).required().error(error => {
				return error;
			}),
			zip_code: Joi.number().min(3).max(1000000).required().error(error => {
				return error;
			}),
			unit: Joi.string().min(1).max(50).required().error(error => {
				return error;
			}),
			// street_no: Joi.string().min(3).max(50).required().error(error => {
			//     return error;
			// }),
			passport_no: Joi.string().allow("").alphanum().min(3).max(20).error(error => {
				return error;
			}),
			office_extension: Joi.number().min(0).max(99999).required().error(error => {
				return error;
			}),
			office_room_no: Joi.string().allow(" ").alphanum().min(3).max(20).required().error(error => {
				return error;
			}),
			first_name: Joi.boolean().required().error(error => {
				return error;
			}),
			middle_name: Joi.boolean().required().error(error => {
				return error;
			}),
			last_name: Joi.boolean().required().error(error => {
				return error;
			}),
			gender: Joi.boolean().required().error(error => {
				return error;
			}),
			employee_id: Joi.boolean().required().error(error => {
				return error;
			}),
			nationality_id: Joi.boolean().required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.profile_document_update = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			_school_certificate_doc: Joi.any().required().error(error => {
				return error;
			}),
			_entrance_exam_certificate_doc: Joi.any().required().error(error => {
				return error;
			}),
			_admission_order_doc: Joi.any().required().error(error => {
				return error;
			}),
			_college_id_doc: Joi.any().required().error(error => {
				return error;
			}),
			_nationality_id_doc: Joi.any().required().error(error => {
				return error;
			}),
			_address_doc: Joi.any().required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.profile_staff_document_update = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			_employee_id_doc: Joi.any().required().error(error => {
				return error;
			}),
			_nationality_id_doc: Joi.any().required().error(error => {
				return error;
			}),
			_address_doc: Joi.any().required().error(error => {
				return error;
			}),
			_degree_doc: Joi.any().required().error(error => {
				return error;
			}),
			_appointment_order_doc: Joi.any().required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_add_edit = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().allow("").error(error => {
				return error;
			}),
			username: Joi.string().alphanum().min(3).max(20).required().error(error => {
				return error;
			}),
			employee_id: Joi.string().alphanum().min(3).max(20).required().error(error => {
				return error;
			}),
			first_name: Joi.string().allow(" ").min(3).max(25).required().error(error => {
				return error;
			}),
			middle_name: Joi.string().allow(" ").min(1).max(25).required().error(error => {
				return error;
			}),
			last_name: Joi.string().allow(" ").min(1).max(25).required().error(error => {
				return error;
			}),
			email: Joi.string().email().required().error(error => {
				return error;
			}),
			gender: Joi.string().valid(constant.GENDER.MALE, constant.GENDER.FEMALE).required().error(error => {
				return error;
			}),
			nationality_id: Joi.string().min(3).max(25).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_edit = (req, res, next) => {
	let schema;
	schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			employee_id: Joi.string().alphanum().min(3).max(20).error(error => {
				return error;
			}),
			first_name: Joi.string().min(3).max(25).error(error => {
				return error;
			}),
			middle_name: Joi.string().min(1).max(25).error(error => {
				return error;
			}),
			last_name: Joi.string().min(1).max(25).error(error => {
				return error;
			}),
			gender: Joi.string().valid(constant.GENDER.MALE, constant.GENDER.FEMALE).error(error => {
				return error;
			}),
			nationality_id: Joi.string().min(3).max(25).error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_profile_validation = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			data: Joi.string().valid(constant.VALID, constant.INVALID).required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_face_bio_register = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			face: Joi.boolean().required().error(error => {
				return error;
			}),
			finger: Joi.boolean().required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_academic_allocation = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			data: Joi.array().items(
				Joi.object().keys({
					allocation_type: Joi.string().valid(constant.PRIMARY, constant.AUXILIARY).error(error => {
						return error;
					}),
					_program_id: Joi.string().alphanum().length(24).required().error(error => {
						return error;
					}),
					_department_id: Joi.string().alphanum().length(24).required().error(error => {
						return error;
					}),
					_department_division_id: Joi.string().alphanum().length(24).allow("").error(error => {
						return error;
					}),
					_department_subject_id: Joi.array().items(Joi.string().alphanum().length(24).required()).error(error => {
						return error;
					})
				}).unknown(true)
			)
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_active_inactive = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			status: Joi.boolean().required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_face_registration = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			_id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			center: Joi.any().required().error(error => {
				return error;
			}),
			left: Joi.any().required().error(error => {
				return error;
			}),
			right: Joi.any().required().error(error => {
				return error;
			}),
			up: Joi.any().required().error(error => {
				return error;
			})
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};

exports.user_finger_registration = (req, res, next) => {
	const schema = Joi.object().keys({
		body: Joi.object().keys({
			_id: Joi.string().alphanum().length(24).required().error(error => {
				return error;
			}),
			data: Joi.array().items(
				Joi.object().keys({
					name: Joi.string().required().error(error => {
						return error;
					}),
					active: Joi.boolean().required().error(error => {
						return error;
					}),
					image: Joi.string().required().error(error => {
						return error;
					}),
					IsoTemplate: Joi.string().required().error(error => {
						return error;
					})
				}).unknown(true)
			)
		}).unknown(true)
	}).unknown(true);
	Joi.validate(req, schema, function (err, value) {
		if (err) {
			return common_files.com_response(res, 422, false, "validation error", err.details[0].message);
		} else {
			return next();
		}
	});
};
