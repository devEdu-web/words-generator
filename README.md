# Words Generator

## Introduction

This application has de sole purpose of returning random words in English. Okay, but why? I've been studying English about 1 year now and the method I use requires studying 10 new words every day, but as the time passed, it was boring the process of having to pause a movie to write a word down, or to stop my reading to do the same thing. So, to solve this problem, I decided to build an project that gives me words every time I run it.

***

## How it works?

It creates a file containing about 370000 words, including phrasal verbs, then the user can run this application to get the specified amount of words. This file also includes phrasal verbs and the user can add new content to this file as well. After generating words they are removed from the file.

***


## Commands

* `wgen init`
  * Creates a folder inside user's `.config` folder containing two files: `dataset.json` and `status.json` with dataset containing all the words including the ones added by the user and status containing information such as the amount of words generated and words remaining in the dataset file.
* `wgen status`
  * Simply returns the `status.json` content.
* `wgen add <payload>`
  * Allows user to add new content to the `dataset.json` file. For now the user can add one word at a time, and if he desire to add a sentence or a phrasal verb, it mus be between quotes.
  * Ex.1: `wgen add example`
  * Ex.2: `wgen add 'example phrase'`
* `wgen generate`
  * Returns the number of words specified by the user. 
  * **Amount argument required!**
  * **Argument limit is 100!**
  * Ex.: `wgen generate 10`


## Installation

* `git clone https://github.com/devEdu-web/words-generator.git`
* `cd ./words-generator`
* `npm install`
* `npm link`
* `wgen init`

## Important warning

As stated before, the application remove generated words from the `dataset.json` file so you won't get the same word twice. That being said, if for some reason the dataset file is deleted, all your 'progress', a.k.a words you generated, will be lost. 