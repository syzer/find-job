//TODO
class RecruiterService {

  constructor($http, $q, hackerService) {
    console.log('recruiterService')
    this.$http = $http
    this.$q = $q
    this.hackers = []
    const deffered = this.$q.defer()
    this.hackerService = hackerService
    this.initPromise = deffered.promise
    this.ref = firebase.database().ref('recruiter')
  }

  getHackers(language, city) {
    return this.hackerService.getGithubHackers(language, city)
  }

  registerRecruiter(recruiter) {
    const newKey = firebase.database().ref().child('hacker').push().key
    this.ref.set({
      headline: recruiter.title,
      description: recruiter.description,
      img: recruiter.link,
      city: recruiter.city,
      country: recruiter.country
    })
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener())
  }

  addListener(listener) {
    this.listeners.push(listener)
  }
}

RecruiterService.$inject = ['$http', '$q', "hackerService"]

export default RecruiterService
