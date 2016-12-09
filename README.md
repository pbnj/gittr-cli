# gittr-cli
Query GitHub trending repositories from the command-line

## Install
`npm install -g gittr-cli`

## Usage
```
Usage: gittr <options>

Options:
  -l, --lang  Search by Language                             [string] [required]
  -h, --help  Show help                                                [boolean]

Examples:
  index.js -l js

```

```
$ gittr -l js
Name: FreeCodeCamp
Desc: The https://FreeCodeCamp.com open source codebase and curriculum. Learn to code and help nonprofits.
URL : https://api.github.com/repos/FreeCodeCamp/FreeCodeCamp

Name: bootstrap
Desc: The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.
URL : https://api.github.com/repos/twbs/bootstrap

Name: d3
Desc: Bring data to life with SVG, Canvas and HTML. :bar_chart::chart_with_upwards_trend::tada:
URL : https://api.github.com/repos/d3/d3

...
```