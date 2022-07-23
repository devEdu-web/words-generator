const config = require('../config/default')

module.exports = class UpdateDataset {
  constructor(Readfile, WriteFile) {
    this.readFile = Readfile,
    this.writeFile = WriteFile
  }

  async addingWord(payload) { 
    console.log('payload', payload)
    try {
      const dataset = await this.readFile.read(`${config.configPath}/wgen/dataset.json`)
      const datasetParsed = JSON.parse(dataset)

      datasetParsed[0].push(payload)

      await this.writeFile.write(`${config.configPath}/wgen/dataset.json`, JSON.stringify(datasetParsed))

    } catch (error) {
      console.log(error)
    }
  }

  async removingWord(amount) {

  }

}