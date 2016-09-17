/**
 * Training Bayesian classifier for sentiment analysis.
 * Run one time only.
 */
//console.log("test message")
var level = require('level');
var bayes = require('syzer-level-naive-bayes');

var db = level('./mydb');

var nb = bayes(db); // where db is a levelup instance

//var fs = require('fs');

/*fs.readFile('sentiment', function(err, buf) {
    console.log(buf.toString());
});*/

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('traindata.txt')
});

lineReader.on('line', function (line) {
    var tabIndex =  line.indexOf('\t');
    var sentiment = line.substr(0,tabIndex)=='1' ? 'positive':'negative';
    var sentence = line.substr(tabIndex+1);

    nb.train(sentiment, sentence);
});

/*
nb.train('positive', 'amazing, awesome movie!! Yeah!! Oh boy.', function() {
    nb.train('positive', 'this is incredibly, amazing, perfect, great!', function() {
        nb.train('negative', 'terrible, shitty thing. Damn. Sucks!!', function() {
            nb.classify('awesome, cool, amazing!! Yay.', function(err, category) {
                console.log('category is '+category)
            })
        })
    })
});*/
