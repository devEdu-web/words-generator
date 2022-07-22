const GenerateConfigFolder = require('./GenerateConfigFolder')
const GenerateDatasetFile = require('./GenerateDatasetFile')
const GenerateStatusFile = require('./GenerateStatusFile')
const Readline = require('./ReadLines')
const ReadFile = require('../../Utils/ReadFile')
const WriteFile = require('../../Utils/WriteFile')
const Init = require('./Init')

const readFile = new ReadFile()
const writeFile = new WriteFile()
const readLine = new Readline()
const generateConfigFolder = new GenerateConfigFolder()
const generateDatasetFile = new GenerateDatasetFile(readLine, writeFile)
const generateStatusFile = new GenerateStatusFile(readFile, writeFile)

const init = new Init(generateConfigFolder, generateDatasetFile, generateStatusFile)


module.exports = init