const config = require('../../config/default')

module.exports = class GetStatus {
  constructor(ReadFile) {
    this.readFile = ReadFile
  }

  async execute() {
    try {
      const status = await this.readFile.read(`${config.configPath}/wgen/status.json`)
      return JSON.parse(status)
    } catch (error) {
      throw new Error(error.message)
    }
  }

}