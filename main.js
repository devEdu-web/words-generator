const fs = require("fs");
const createJson = require("./createJson");
const path = require("path");
const getWords = require('./getWords')
const wordsParsedPath = path.join(__dirname, "/wordsParsed.json");
const existFile = fs.existsSync(wordsParsedPath);

async function init() {
    if (existFile) {
        const words = await getWords()
        console.log(words)
    } else {
        await createJson();
        const words = await getWords()
        console.log(words)
    }
}

init();
