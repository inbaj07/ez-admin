const constants = Object.freeze({
	USER: "users",
	CATEGORIES: "categories",
	GENDER: {
		MALE: "male",
		FEMALE: "female",
		BOTH: "both"
	},
	STATUS_CODE: {
		SUCCESS:200,
		CREATED:201
	},
	ACTIVE: "active",
	INACTIVE: "inactive",
	BLOCKED: "blocked",
	IMPORTED: "imported",
	MSG_MOBILE_EMAIL_PRESENT: "Mobile/Email already present",
	MSG_USER_ADDED: "User added successfully",
	MSG_USER_EDITED: "User edited successfully",
	MSG_USER_LIST: "Users List",
	MSG_USER_DETAILS: "Users Details",
	MSG_ERROR: "Error!",
	MSG_NO_DATA: "No Data!",
	
	MSG_SUCCESS: "Success",	
	MSG_FAILED: "Failed!",

	MSG_ADDED: "Added Successfully",
	MSG_EDITED: "Edited Successfully",
	MSG_LISTING: "Listed Successfully",
	MSG_DETAILS: "Details",
	MSG_DELETED: "Deleted Successfully",
	MSG_UPDATED: "Updated Successfully",
	
	MSG_LOGIN_SUCCESS: "Login Successful",
	MSG_LOGIN_FAILED: "Login Failed!",
	MSG_TOKEN_FAILED: "Token Failed",
	MSG_UNAUTHORIZED: "Unauthorized",

	MSG_CATCH: "Catch",
	
});

module.exports = constants;
