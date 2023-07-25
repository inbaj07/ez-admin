const mongoose = require('mongoose')
const db = require('../utility/util_keys')

module.exports = async function models (app) {
  await mongoose.connect(db.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  require('./users')
  require('./categories')
}
