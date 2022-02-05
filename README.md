# Words Generator

## Introduction

This application has de sole purpose of returning 10 random words in English. Okay, but why? I've been studying English about 1 year now and the method I use requires studying 10 new words every day, but as the time passed, it was boring the process of having to pause a movie to write a word down, or to stop my reading to do the same thing. So, to solve this problem, I decided to build an project that gives me 10 words every time I run it.

***

## How it works?

I found a file on the internet with about 58000 words. The application turns this file into a JSON, if this JSON doesn't exists, of course. This the JSON is created, when you run the application, it returns 10 random words and also remove this words from the JSON file, so you don't get repeated words. 

This is the output you will get:
```javascript
{
  wordsRemaining: 57762,
  words: [
    'virginal',
    'tarantula',
    'bystanders',
    'regales',
    'potions',
    'drop',
    'welsh',
    'beatification',
    'cantatas',
    'mixable'
  ]
}
```

***

## Important warning

Be careful to not delete accidentally because if you do so, another JSON file with all the words will be created once you start the application and the words you already studied will be there too!