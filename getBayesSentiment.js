/**
 * Getting sentiment from a pre-trained Bayesian classifier.
 */
let level = require('level')
let bayes = require('syzer-level-naive-bayes')

let db = level('./database/sentiment')
let nb = bayes(db)

nb.classifyAsync('awesome, cool, amazing!! Yay.')
  .then(console.log)
  .catch(console.error)
