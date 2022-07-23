const AddNewWords = require('./AddNewWords')
const UpdateDataset = require('../../Utils/UpdateDataset')
const UpdateStatus = require('../../Utils/UpdateStatus')
const ReadFile = require('../../Utils/ReadFile')
const WriteFile = require('../../Utils/WriteFile')

const readFile = new ReadFile()
const writeFile = new WriteFile()

const updateDataset = new UpdateDataset(readFile, writeFile)
const updateStatus = new UpdateStatus(readFile, writeFile)
const addNewWords = new AddNewWords(updateStatus, updateDataset)

module.exports = addNewWords