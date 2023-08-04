const mongoose = require("mongoose");
const Schemas = mongoose.Schema;
const constant = require("../utility/constants");
const { string } = require("joi");

const userSchemas = new Schemas({
	user_id: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	userName:{
		type: String,
		trim: true
	},
	name: {
		first: {
			type: String,
			trim: true
		},
		last: {
			type: String,
			trim: true
		}
	},
	email: {
		type: String,
		required: true,
		unique: true,
		sparse: true
	},

	dob: Date,
	password: String,
	gender: {
		type: String,
		enum: [constant.GENDER.MALE, constant.GENDER.FEMALE]
	},
	mobile: {
		type: Number,
		unique: true,
		sparse: true
	},
	status: {
		type: String,
		enum: [constant.ACTIVE, constant.INACTIVE, constant.BLOCKED]
	},
	fcm_token: {
		type: String
	},
	access_token: {
		type: String
	},
	otp: {
		no: {
			type: Number,
			default: 0
		},
		expiry_date: {
			type: Date,
			default: Date.now()
		}
	},
	photo: String,
	isActive: {
		type: Boolean,
		default: true
	},
	isDeleted: {
		type: Boolean,
		default: false
	}
},
{ timestamps: true });
module.exports = mongoose.model(constant.USER, userSchemas);
