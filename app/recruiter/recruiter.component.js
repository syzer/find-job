const template = require('./recruiter.html')
import './recruiter.css'

//TODO load hackrService data => store in db ..itp
class RecruiterController {

  constructor($mdSidenav, recruiterService, $scope) {
    this.$mdSidenav = $mdSidenav
    this.recruiterService = recruiterService
    this.label = "I am a label"
    console.log('recruiter controller')
    this.getHackers = recruiterService.getHackers
    this.$scope = $scope
  }

  //SIDE bar?
  showChat() {
    this.$mdSidenav('message-sidenav').toggle()
  }

  onNewHacker() {
    this.hackers = this.recruiterService.getHackers()
    // this.sortRumors()

    //TODO preloader
    this.loadingHackers = false
  }

  search() {
    console.log("search")
    if (this.searchTerm) {
      let city = this.searchTerm.match(/Zurich/) ? 'Zurich' : 'Basel'
      let language = this.searchTerm.match(/python/) ? 'python' : 'javascript'
      this.recruiterService.getHackers(city, language)
        .then(data => {
          this.hackers = data.items
          this.hackers.forEach(hacker => {
            this.recruiterService.getTechScore(hacker.login)
              .then(result => {
                hacker.labelsLanguage = result.languages
                hacker.techScore = result.techScore
              }, this)
          })
        })
    }
  }
 
}

RecruiterController.$inject = ['$mdSidenav', 'recruiterService', '$scope']

const recruiterComponent = {
  controller: RecruiterController,
  template
}
export default recruiterComponent
