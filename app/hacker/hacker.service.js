class HackersService {

  constructor($http, $q) {
    this.$http = $http
    this.$q = $q
    this.hackers = []
  }

  //TODO language, location params
  getGithubHackers(language = 'python', location = 'Zurich') {
    return this.$http({
      method: 'GET',
      url: `https://api.github.com/search/users?q=location:${location}+language:${language}+type:user`
    }).then(httpData => httpData.data)
      .then(data => {
        return this.analyse(data)
      })
      .catch(console.warn)
  }

  analyseData(data) {
    console.log('working')
    return data
  }

}

HackersService.$inject = ['$http', '$q']

export default HackersService


