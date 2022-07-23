const config = require('../config/default')

module.exports = class UpdateDataset {
  constructor(Readfile, WriteFile) {
    this.readFile = Readfile,
    this.writeFile = WriteFile
  }

  async addingWord(payload) { 
    try {
      const dataset = await this.readFile.read(`${config.configPath}/wgen/dataset.json`)
      const datasetParsed = JSON.parse(dataset)

      datasetParsed[0].push(payload)

      await this.writeFile.write(`${config.configPath}/wgen/dataset.json`, JSON.stringify(datasetParsed))

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async removingWord(word) {
    try {
      const dataset = await this.readFile.read(`${config.configPath}/wgen/dataset.json`)
      const datasetParsed = JSON.parse(dataset)

      const wordIndex = datasetParsed[0].indexOf(word)
      if(wordIndex > 0) {
        datasetParsed[0].splice(wordIndex, 1)
      }

      await this.writeFile.write(`${config.configPath}/wgen/dataset.json`, JSON.stringify(datasetParsed))

    } catch (error) {
      throw new Error(error.message)
    }
  }

}