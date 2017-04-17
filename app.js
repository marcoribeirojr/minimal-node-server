'use strict'

require('./db/config')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./local_modules/exportRoutes')

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

routes.forEach((addr, index) => {
  app.use(addr.path, addr.route)
})

app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  let json = err
  res.json(json)
})

module.exports = app
