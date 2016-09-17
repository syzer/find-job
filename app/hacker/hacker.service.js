class HackersService {

  constructor($http, $q) {
    this.$http = $http
    this.$q = $q
    this.hackers = []
  }

  //TODO language, location params
  getGithubHackers(language, location) {
    return this.$http({
      method: 'GET',
      url: 'https://api.github.com/search/users?q=location:zurich+language:python+type:user'
    }).then(httpData => httpData.data)
      .catch(console.warn)
  }
}

HackersService.$inject = ['$http', '$q']

export default HackersService


