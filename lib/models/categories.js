const mongoose = require("mongoose");
const Schemas = mongoose.Schema;
const constant = require("../utility/constants");
const { string } = require("joi");

const categoriesSchemas = new Schemas({
	name: {
		type: String,
		required: true,
		trim: true
	},
	subCategory: [
		{
			name: {
				type: String,
				required: true,
				trim: true
			},
			isActive: {
				type: Boolean,
				default: true
			},
			isDeleted: {
				type: Boolean,
				default: false
			}
		}
	],
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
module.exports = mongoose.model(constant.CATEGORIES, categoriesSchemas);
