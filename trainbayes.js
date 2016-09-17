/**
 * Training Bayesian classifier for sentiment analysis.
 * Run one time only.
 */
let level = require('level')
let bayes = require('syzer-level-naive-bayes')

let db = level('./mydb')

let nb = bayes(db) // where db is a levelup instance

let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('traindata.txt')
})

lineReader.on('line', function (line) {
    let tabIndex =  line.indexOf('\t')
    let sentiment = line.substr(0,tabIndex)=='1' ? 'positive':'negative'
    let sentence = line.substr(tabIndex+1)

    nb.train(sentiment, sentence)
})
