const readline = require('readline')
const events = require('events')
const fs = require('fs')

module.exports = class ReadLines {

  async read(path) {
    const result = []
    
    try {
      const readLineInterface = readline.createInterface({
        input: fs.createReadStream(path),
        output: false,
        console: false
      })

      readLineInterface.on('line', (line) => {
        result.push(line)
      })

      await events.once(readLineInterface, 'close')

      return result

    } catch (error) {
      throw new Error(error.message)
    }
  }

}