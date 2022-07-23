const config = require('../../config/default.js')
const fs = require('fs/promises')
const configPath = config.configPath

module.exports = class GenerateConfigFolder {
  async generate() {
    try {
      await fs.mkdir(`${configPath}/wgen`)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}