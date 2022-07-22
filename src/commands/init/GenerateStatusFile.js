const fs = require('fs/promises');
const config = require('../../config/default.js');

module.exports = class GenerateStatusFile {
  async generate() {
    try {
      const dataset = await fs.readFile(
        `${config.configPath}/wgen/dataset.json`,
        { encoding: 'utf-8' }
      );
      const datasetLength = JSON.parse(dataset)[0].length;

      const statusTemplate = JSON.stringify({
        totalWords: datasetLength,
        remainingWords: datasetLength,
        wordsGenerated: 0,
      });

      await fs.writeFile(
        `${config.configPath}/wgen/status.json`,
        statusTemplate
      );

      return {
        error: false,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
      };
    }
  }
}