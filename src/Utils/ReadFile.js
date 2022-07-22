const fs = require('fs/promises')

module.exports = class ReadFile {
  async read(path) {
    try {
      const data = await fs.readFile(path,{ encoding: 'utf-8' });
      return data
    } catch (error) {
      throw new Error(error.message)
    }
  }
}