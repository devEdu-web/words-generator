const fs = require("fs");
const createJson = require("./createJson");
const path = require("path");
const wordsParsedPath = path.join(__dirname, "/wordsParsed.json");
const existFile = fs.existsSync(wordsParsedPath);

async function init() {
    if (existFile) {
        getWords((words) => {
            console.log(words);
        });
    } else {
        await createJson();
        getWords((words) => {
            console.log(words);
        });
    }
}

function getWords(callback) {
    fs.readFile(wordsParsedPath, "utf8", (err, data) => {
        const wordsParsed = JSON.parse(data);
        const words = [];

        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.ceil(Math.random() * 58112 - 1);
            words.push(wordsParsed.words[randomNumber]);
            wordsParsed.words.splice(randomNumber, 1);
        }

        fs.writeFile("wordsParsed.json", JSON.stringify(wordsParsed), (err) => {
            if (err) throw err;
        });

        callback({
            wordsRemaining: wordsParsed.words.length,
            words: words,
        });
    });
}

init();
