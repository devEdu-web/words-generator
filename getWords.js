const fs = require("fs");
const path = require('path')
const wordsParsedPath = path.join(__dirname, "/wordsParsed.json");


function getWords() {
    return new Promise ((resolve, reject) => {
        fs.readFile(wordsParsedPath, "utf8", (err, data) => {
            const wordsParsed = JSON.parse(data);
            const words = [];
    
            for (let i = 0; i < 10; i++) {
                const randomNumber = Math.ceil(Math.random() * 58112 - 1);
                words.push(wordsParsed.words[randomNumber]);
                wordsParsed.words.splice(randomNumber, 1);
            }
    
            fs.writeFile("wordsParsed.json", JSON.stringify(wordsParsed), (err) => {
                if (err) reject(err);
            });
            
            resolve({
                wordsRemaining: wordsParsed.words.length,
                words,
            })

            // callback({
            //     wordsRemaining: wordsParsed.words.length,
            //     words: words,
            // });
        });
    }) 
}

module.exports = getWords