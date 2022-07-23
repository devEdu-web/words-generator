const config = require('../../config/default.js')
const { ReadLines } = require('./ReadLines.js')
const fs = require('fs/promises')

module.exports = class GenerateDatasetFile {
  constructor(readLine, writeFile) {
    this.readLine = readLine
    this.writeFile = writeFile
  }
  async generate() {
    const dataset = []

    try {
      const wordsReadLineResult = await this.readLine.read(config.wordsPath)
      const phrasalVerbsReadLineResult = await this.readLine.read(config.phrasalVerbsPath)
      dataset.push(wordsReadLineResult.concat(phrasalVerbsReadLineResult))

      await this.writeFile.write(`${config.configPath}/wgen/dataset.json`, JSON.stringify(dataset))
      

    } catch (error) {
      throw new Error(error.message)
    }
  }
}
