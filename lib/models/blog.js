const mongoose = require("mongoose");
const Schemas = mongoose.Schema;
const { BLOG, BLOG_STATUS } = require("../utility/constants");
const { string } = require("joi");

const blogSchema = new Schemas({
	title: {
		type: String,
		required: true,
		trim: true
	},
	image: {
		type: String,
		trim: true
	},
	content: {
		type: String,
		trim: true
	},
	userDetails: {
		user_id:{
			type: Schemas.Types.ObjectId
		},
		first: {
			type: String,
			required: true,
			trim: true
		},
		last: {
			type: String,
			required: true,
			trim: true
		}
	},
	status: {
		type: String,
		enum: [BLOG_STATUS.PUBLISHED, BLOG_STATUS.UNPUBLISHED],
		default: BLOG_STATUS.UNPUBLISHED
	},
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
module.exports = mongoose.model(BLOG, blogSchema);
