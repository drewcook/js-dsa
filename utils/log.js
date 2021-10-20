const util = require('util')

const log = (...rest) => console.log(util.inspect(rest, { depth: null }))

module.exports = log
