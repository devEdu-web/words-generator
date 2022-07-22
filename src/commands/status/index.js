const ReadFile = require('../../Utils/ReadFile')
const GetStatus = require('./GetStatus')

const readFile = new ReadFile()
const getStatus = new GetStatus(readFile)

module.exports = getStatus