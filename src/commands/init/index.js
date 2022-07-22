const GenerateConfigFolder = require('./GenerateConfigFolder')
const GenerateDatasetFile = require('./GenerateDatasetFile')
const GenerateStatusFile = require('./GenerateStatusFile')
const Readline = require('./ReadLines')
const Init = require('./Init')

const readLine = new Readline()
const generateConfigFolder = new GenerateConfigFolder()
const generateDatasetFile = new GenerateDatasetFile(readLine)
const generateStatusFile = new GenerateStatusFile()

const init = new Init(generateConfigFolder, generateDatasetFile, generateStatusFile)

// init.execute()

module.exports = init