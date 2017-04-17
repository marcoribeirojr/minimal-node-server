'use strict'

const name = {
    type : String
  , get : require('../validate_functions/toUpper')
  , set : require('../validate_functions/toLower')
  , validate : require('../validate_functions/isValidString')
  , required : true
}

module.exports = name
