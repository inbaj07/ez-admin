// let format = /[!@#$%^&*(+-={;'")}|,<>?]+/;
const format = /[?;|><}{)(`~'"!@#$%^&*_+-,]+/

module.exports = {
  list_all_response: (res, status_code, status, message, totalDoc, totalPages, currentPage, result_message) => {
    const server_response = {
      status_code,
      status,
      message,
      totalDoc,
      totalPages,
      currentPage,
      data: result_message
    }
    return res.status(status_code).send(server_response)
  },

  com_response: function (res, status_code, status, message, result_message) {
    const server_response = {
      status_code,
      status,
      message,
      data: result_message
    }
    return res.status(status_code).send(server_response)
  },

  comResponse: function (res, status_code, status, message, result_message) {
    const server_response = {
      status_code,
      status,
      message,
      data: result_message
    }
    return server_response
  },

  list_user_response: (res, status_code, response) => {
    return res.status(status_code).send(response)
  },

  response_dub_not: function (res, status_code, status, message, result_message, imported, not_found, duplicate) {
    const server_response = {
      status_code,
      status,
      message,
      data: result_message,
      imported,
      not_found,
      duplicate
    }
    return res.status(status_code).send(server_response)
  }
}
