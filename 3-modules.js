// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-names2')

console.log(data)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

sayHi(data.singlePerson.name)
sayHi(data.items[0])