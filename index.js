#! /usr/bin/env node

const request = require('request')
const argv = require('yargs')
  .usage('Usage: $0 <options> ')
  .example('$0 -l js')
  .option('l', {
    alias: 'lang',
    demand: true,
    describe: 'Search by Language',
    type: 'string'
  })
  .help('h')
  .alias('h', 'help')
  .argv

const options = {
  method: 'GET',
  uri: 'https://api.github.com/search/repositories',
  headers: {
    'User-Agent': 'gittr-cli'
  },
  qs: {q: `language:${argv.lang}`, sort: 'stars'}
}

request(options, (error, response, body) => {
  if (error) {
    throw new Error(error)
  } else {
    const data = JSON.parse(body)
    data.items.map((repo) => {
      console.log(`Name: ${repo.name}`)
      console.log(`Desc: ${repo.description}`)
      console.log(`URL : ${repo.url}`)
      console.log()
    })
  }
})
