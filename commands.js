#! /usr/bin/env node

const {program} = require('commander')

program
    .command('generate')
    .argument('<number>', 'amount of words')
    .action(() => {
        console.log('10 Words.')
    })
    
program.parse()