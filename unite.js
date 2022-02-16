const fs = require('fs').promises
const createReadStream = require('fs').createReadStream
const readline = require('readline')
const path = require('path')
const events = require('events')
const phrasalVerbsPath = path.join(__dirname, "/phrasalVerbs.txt")
const wordsParsedPath = path.join(__dirname, "/wordsParsed.json");

async function createNewElementsArray(filePath) {
    const elements = []

    try {
        const readInterface = readline.createInterface({
            input:  createReadStream(filePath),
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

async function uniteFiles() {

    try {
        const elements = await createNewElementsArray('./phrasalVerbs.txt')
        const mainFile = await fs.readFile(wordsParsedPath, {encoding: 'utf-8'})
        const mainFileParsed = JSON.parse(mainFile)
        
        elements.forEach(element => {
            mainFileParsed.words.push(element)
        })
    
        await fs.writeFile('wordsParsed.json', JSON.stringify(mainFileParsed))
        console.log('United')

    } catch(e) {
        console.log(e)
    }

}


uniteFiles()