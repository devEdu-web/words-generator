const config = require('../../config/default')

module.exports = class GenerateWords {
  constructor(UpdateDataset, UpdateStatus, ReadFile) {
    this.updateDataset = UpdateDataset
    this.updateStatus = UpdateStatus
    this.readFile = ReadFile
  }

  async generate(amount) {
    
    try {
      const dataset = await this.readFile.read(`${config.configPath}/wgen/dataset.json`)
      const datasetParsed = JSON.parse(dataset)[0]
      const wordsList = []

      for(let i = 0; i < amount; i++) {
        const random = Math.floor(Math.random() * datasetParsed.length) 
        const currentWord = datasetParsed[random]
        await this.updateDataset.removingWord(currentWord)
        wordsList.push(currentWord)
      }

      await this.updateStatus.removingWord(amount)

      console.log(wordsList)


    } catch (error) {
      throw new Error(error.message)
    }
  }


}
