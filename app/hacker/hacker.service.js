import _ from 'lodash'

const backendUrl = 'http://localhost:3002';

class HackerService {

  constructor($http, $q, firebaseService) {
    this.$http = $http
    this.$q = $q
    this.firebaseService = firebaseService;

  }


  //  url: 'https://1ae3d400.ngrok.io/github'
  getGithubHackers(language = 'python', location = 'Zurich') {
    return this.firebaseService.getCached(`https://api.github.com/search/users?q=location:${location}+language:${language}+type:user`)
      .then(data => {
        return data
      })
      .catch(console.warn)
  }

  getSocialScore(user) {
    return this.firebaseService.getCached(backendUrl + `/social?user=${user}`)
      .then(data => {
        return data
      })
      .catch(console.warn)
  }

  getTechScore(user) {
    return this.firebaseService.getCached(backendUrl + `/tech/score?user=${user}`)
      .then(data => {
        return data
      })
      .catch(console.warn)
  }
  
  enrich(data) {
    if (data.items) {
      data.items.forEach(hacker => {
        hacker.techScore = _.random(0, 100)
        hacker.socialScore = _.random(0, 100)
        let numLanguages = _.random(1, this.languages.length)
        let tmpArray = []
        for (let i = 0; i <numLanguages; i++) {
          tmpArray.push(this.languages[_.random(0, this.languages.length)])
        }
        hacker.labelsLanguage = tmpArray;
        tmpArray = []
        let numCities = _.random(1, this.cities.length)
        for (let i = 0; i < numCities; i++) {
          tmpArray.push(this.cities[_.random(0, this.cities.length)])
        }
        hacker.labelsCity = tmpArray
      })
    }
    return data;
  }

}

HackerService.$inject = ['$http', '$q', 'firebaseService']

export default HackerService


