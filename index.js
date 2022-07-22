#!/usr/bin/env node

// wgen generate { quantity }
  // generate the amount of words specified - default 10, limit 100

// wgen status
  // return the amount of words generated in total
  // return the amount of words left in the dataset

// wgen add { word, phrasal verb, expression }
  // add a personalized word, phrasal verb, expression into dataset

const { program } = require('commander')
const package = require('./package.json');
const init = require('./src/commands/init/index')
const getStatus = require('./src/commands/status/index')

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

program.parse(process.argv)