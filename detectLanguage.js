/**
 * Detecting a code language
 */
console.log(detectLanguage("var detectLang = require('lang-detector');"));
console.log(detectLanguage('console.log("Hello world");'));

function detectLanguage(codeSnippet) {
    var detectLang = require('lang-detector');
    return detectLang(codeSnippet)
}
