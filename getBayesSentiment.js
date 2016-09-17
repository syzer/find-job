/**
 * Getting sentiment from a pre-trained Bayesian classifier.
 */
var level = require('level');
var bayes = require('syzer-level-naive-bayes');

var db = level('./mydb');
var nb = bayes(db); // where db is a levelup instance
nb.classify('awesome, cool, amazing!! Yay.', function(err, category) {
    console.log('category is '+category)
});
