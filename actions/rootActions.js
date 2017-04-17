'use strict'

module.exports = (Model) => {
  const Actions = {}

  const callback = (err, data, res) => {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(data)
  }

  Actions.find = (req, res) => {
    let query = {}
    let page = req.params.page
    let limit = 10
    let skip = limit * (page - 1)
    Model.find(query)
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
      callback(err, data, res)
    })
  }

  Actions.findAll = (req, res) => {
    let query = {}
    Model.find(query, (err, data) => {
      callback(err, data, res)
    })
  }

  Actions.findOne = (req, res) => {
    let query = {_id : req.params.id}
    Model.findOne(query, (err, data) => {
      callback(err, data, res)
    })
  }

  Actions.update = (req, res) => {
    let update = req.body
    let conditions = {_id : req.params.id}
    Model.update(conditions, update, (err, data) => {
      callback(err, data, res)
    })
  }

  Actions.delete = (req, res) => {
    let query = {_id : req.params.id}
    Model.remove(query, (err, data) => {
      callback(err, data, res)
    })
  }

  Actions.save = (req, res) => {
    let body = req.body
    Model.create(body, (err, data) => {
      callback(err, data, res)
    })
  }

  return Actions
}
