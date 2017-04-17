'use strict'

const string = (value) => {

  const isNull = (value === null)
  const isUndefined = (value === undefined)
  const isEmpty = (value === '')
  const isGte6 = (value.length < 6)

  if(isNull || isUndefined || isEmpty || isGte6){
    return false
  }
  return true
}

module.exports = string
