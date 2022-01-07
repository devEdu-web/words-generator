const fs = require('fs')
const createJson = require('./createJson')
const path = require('path')
const { rejects } = require('assert')
const wordsPath = path.join(__dirname, '/words.txt')
const wordsParsedPath = path.join(__dirname, '/wordsParsed.json')
const existFile = fs.existsSync(wordsParsedPath)


async function init() {

    if(existFile) {
        const words = await getWords()
        console.log(words)
    } else {
        await createJson()
        const words = await getWords()
        console.log(words)
    }


}

function getWords(arr) {

    return new Promise((resolve, reject) => {

        fs.readFile(wordsParsedPath, 'utf8', (err, data) => {
            const wordsParsed = JSON.parse(data)
            const words = []
            
            for(let i =0; i < 10; i++) {
                const randomNumber = Math.ceil(Math.random() * 58112 - 1)
                words.push(wordsParsed.words[randomNumber])
                wordsParsed.words.splice(randomNumber, 1)
    
            }

            fs.writeFile('wordsParsed.json', JSON.stringify(wordsParsed), (err) => {
                if(err) throw err
            })
            
            console.log(wordsParsed.words.length)

            if(wordsParsed && words) {
                resolve(words)
            } else {
                reject(err)
            }
    
        })
    })



}



init()






// readInterface.on('line', (line) => {
//     console.log(line)
//     // wordsArray.words.push(line)
    
//     // fs.writeFile('wordsParsed.txt', JSON.stringify(wordsArray), (err) => {
//     //     if(err) throw err

//     //     console.log('ok')
//     // })

// })

// fs.readFile(wordsParsedPath, 'utf8', (err, words) => {
//     const parsed = JSON.parse(words)
//     console.log(parsed.words[0])
// })

