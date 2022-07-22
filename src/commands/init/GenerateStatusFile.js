const fs = require('fs/promises');
const config = require('../../config/default.js');

module.exports = class GenerateStatusFile {
  constructor(ReadFile, WriteFile){
    this.ReadFile = ReadFile
    this.WriteFile = WriteFile
  }
  async generate() {
    try {
      const dataset = await this.ReadFile.read(`${config.configPath}/wgen/dataset.json`)
      const datasetLength = JSON.parse(dataset)[0].length;

      const statusTemplate = JSON.stringify({
        totalWords: datasetLength,
        remainingWords: datasetLength,
        wordsGenerated: 0,
      });

      await this.WriteFile.write(`${config.configPath}/wgen/status.json`, statusTemplate)

      return {
        error: false,
      };
    } catch (error) {
      throw new Error(error.message)
    }
  }
}