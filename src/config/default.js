const os = require('os')
const userName = os.userInfo().username

module.exports = {
  configPath: `/home/${userName}/.config`,
  phrasalVerbsPath: `/home/${userName}/Github/words-generator/src/files/phrasalVerbs.txt`,
  wordsPath: `/home/${userName}/Github/words-generator/src/files/words_alpha.txt`
}