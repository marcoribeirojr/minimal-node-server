'use strict'

const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/temporary'

mongoose.connect(dbURI)

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`)
})

mongoose.connection.on('error', err => {
  console.log(`Mongoose connection error ${err}`)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected')
})

mongoose.connection.on('open', () => {
  console.log('Mongoose connection open')
})

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected through app termination')
    process.exit(0)
  })
})
