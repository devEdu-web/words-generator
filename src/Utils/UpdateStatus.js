const config  = require('../config/default')

module.exports = class UpdateStatus {
  constructor(Readfile, WriteFile) {
    this.readFile = Readfile,
    this.writeFile = WriteFile
  }

  async addingWord(amount) { 
    try {
      console.log(amount)
      const status = await this.readFile.read(`${config.configPath}/wgen/status.json`)
      const statusParsed = JSON.parse(status)

      statusParsed.totalWords += amount
      statusParsed.remainingWords += amount

      await this.writeFile.write(`${config.configPath}/wgen/status.json`, JSON.stringify(statusParsed))

    } catch (error) {
      console.log(error)
    }
  }

  async removingWord(amount) {

  }

}