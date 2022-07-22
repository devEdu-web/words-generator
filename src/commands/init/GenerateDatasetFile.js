const config = require('../../config/default.js')
const { ReadLines } = require('./ReadLines.js')
const fs = require('fs/promises')

module.exports = class GenerateDatasetFile {
  constructor(readLine) {
    this.readLine = readLine
  }
  async generate() {
    const dataset = []

    try {
      const wordsReadLineResult = await this.readLine.read(config.wordsPath)
      const phrasalVerbsReadLineResult = await this.readLine.read(config.phrasalVerbsPath)
      dataset.push(wordsReadLineResult.concat(phrasalVerbsReadLineResult))

      await fs.writeFile(`${config.configPath}/wgen/dataset.json`, JSON.stringify(dataset))

    } catch (error) {
      console.log(error)
    }
  }
}
