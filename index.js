const express = require('express')
const app = module.exports = express()
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Set `views` directory for module
 */

app.set('views', path.join(__dirname, 'views'))

/**
  * Set `view engine` to `pug`.
  */

app.set('view engine', 'pug')

/**
 * Link models with
 * mongoDB database
 */

require('./lib/models')(app)

/**
 * routes application
 */

require('./lib/routes')(app)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Express server listening on port ${port}.\nEnvironment: ${process.env.NODE_ENV}`)
})

app.get('/data', function (req, res) {
  res.render('index', {
    title: 'DigiScheduler Backend API'
  })
})
