#!/usr/bin/env node

// wgen generate { quantity }
  // generate the amount of words specified - default 10, limit 100

const { program } = require('commander')
const package = require('./package.json');

const init = require('./src/commands/init/index')
const getStatus = require('./src/commands/status/index')
const add = require('./src/commands/add/index')
const generate = require('./src/commands/generate/index')

program.version(package.version);

program
  .command('init')
  .description('Create folder and configurations files.')
  .action(async () => {
    try {
      await init.execute()
      console.log('Config folder created.')
    } catch (error) {
      console.log(error)
      console.log('File already exists.')
    }
  })

program
  .command('status')
  .description('Return user status.')
  .action(async () => {
    try {
      const status = await getStatus.execute()
      console.log(status)
    } catch (error) {
      console.log(error.message)
    }
  })

program
  .command('add')
  .description('Add passed word, phrasal verb or expressions to dataset. If it is more than one word, must be inside quotes.')
  .argument('<payload>', 'data to add into dataset')
  .action(async payload => {
    try {
      await add.execute(1, payload)
      console.log('done')
    } catch (error) {
      console.log(error)
    }
    
  })

program
  .command('generate')
  .description('Generate random words.')
  .argument('<amount>', 'Amount of words to be generated.')
  .action(async (amount) => {
    try {
      if(amount > 100) {
        throw new Error('Max amount is 100.')
      }
      await generate.generate(Number(amount))
    } catch (error) {
      console.log(error.message)
    }
  })

program.parse(process.argv)