const readline = require("readline");
const wordsArray = { words: [] };
const fs = require("fs");
const path = require("path");
const wordsPath = path.join(__dirname, "/words.txt");
const events = require("events");

async function createJson() {
    try {
        const readInterface = readline.createInterface({
            input: fs.createReadStream(wordsPath),
            output: false,
            console: false,
        });

        readInterface.on("line", (line) => {
            wordsArray.words.push(line);
        });

        await events.once(readInterface, "close");

        fs.writeFile("wordsParsed.json", JSON.stringify(wordsArray), (err) => {
            if (err) throw err;
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = createJson;
