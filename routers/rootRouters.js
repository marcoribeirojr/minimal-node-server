'use strict'

module.exports = Model => {

  const Actions = require('../actions/rootActions')(Model)

  const router =
    [
      {
          method : 'get'
        , path : '/:page'
        , action : Actions.find
      },

      {
          method : 'get'
        , path : '/'
        , action : Actions.findAll
      },

      {
          method : 'get'
        , path : '/:id'
        , action : Actions.findOne
      },

      {
          method : 'post'
        , path : '/:id'
        , action : Actions.update
      },

      {
          method : 'delete'
        , path : '/:id'
        , action : Actions.delete
      },
      {
          method : 'post'
        , path : '/'
        , action : Actions.save
      }
    ]

    return router
}
