//TODO
class RecruterService {

  constructor($http, $q) {
    console.log('recruterService')
    this.$http = $http
    this.$q = $q
    this.hackers = []
    const deffered = this.$q.defer()
    this.initPromise = deffered.promise
    this.ref = firebase.database().ref('recruter')
  }

  getHackers(language, city) {
    return this.hackerService.getHackers(language, city)
  }

  registerRecruter(recruter) {
    const newKey = firebase.database().ref().child('hacker').push().key
    this.ref.set({
      headline: recruter.title,
      description: recruter.description,
      img: recruter.link,
      city: recruter.city,
      country: recruter.country
    })
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener())
  }

  addListener(listener) {
    this.listeners.push(listener)
  }
}

RecruterService.$inject = ['$http', '$q']

export default RecruterService
