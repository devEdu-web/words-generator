const fs = require('fs/promises')

module.exports = class WriteFile {
  async write(path, data) {
    try {
      await fs.writeFile(path, data);
    } catch (error) {
      throw new Error(error.message)
    }
  }
}