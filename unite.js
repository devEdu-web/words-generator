const fs = require('fs')
const readline = require('readline')
const path = require('path')
const events = require('events')
const phrasalVerbsPath = path.join(__dirname, "/phrasalVerbs.txt")


async function createNewElementsArray() {
    const elements = []

    try {
        const readInterface = readline.createInterface({
            input: fs.createReadStream(phrasalVerbsPath),
            output: false,
            console: false
        })

        readInterface.on('line', (line) => {
            elements.push(line)
        })

        await events.once(readInterface, 'close')

        return elements

    }
    catch(e) {
        return e
    }

}

createNewElementsArray()