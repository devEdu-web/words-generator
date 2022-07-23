
class Init {

  constructor(
    GenerateConfigFolder,
    GenerateDatasetFile,
    GenerateStatusFile 
  ) {
    this.GenerateConfigFolder = GenerateConfigFolder, 
    this.GenerateDatasetFile = GenerateDatasetFile, 
    this.GenerateStatusFile = GenerateStatusFile
  }

  async execute() {
    try {
      await this.GenerateConfigFolder.generate()
      await this.GenerateDatasetFile.generate()
      await this.GenerateStatusFile.generate()
    } catch (error) {
      throw new Error(error.message)
    }
  }

}

module.exports = Init