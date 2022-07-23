module.exports = class AddNewWords {
  constructor(UpdateStatus, UpdateDataset) {
    this.updateStatus = UpdateStatus
    this.updateDataset = UpdateDataset
  }

  async execute(amount, payload) {
    try {
      await this.updateDataset.addingWord(payload) 
      await this.updateStatus.addingWord(amount) 
    } catch (error) {
      console.log(error)
      throw new Error(error.message)
    }

  }

}