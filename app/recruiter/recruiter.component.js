const template = require('./recruiter.html')
import './recruiter.css'

//TODO load hackrService data => store in db ..itp
class RecruiterController {

  constructor($mdSidenav, recruiterService) {
    this.$mdSidenav = $mdSidenav
    this.recruiterService = recruiterService
    this.label = "I am a label"
    console.log('recruiter controller')
    this.getHackers = recruiterService.getHackers
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
      this.hackerTechScores = {}
      this.hackerSocialScores = {}
      let city = this.searchTerm.match(/Zurich/) ? 'Zurich' : 'Basel'
      let language = this.searchTerm.match(/python/) ? 'python' : 'javascript'
      
      this.recruiterService.getHackers(city, language)
        .then(data => {
          this.hackers = data.items
          this.hackers.forEach(hacker => {
            this.recruiterService.getTechScore(hacker.login)
              .then(result => {
                this.hackerTechScores[hacker.login] = result
              })
          })
        })
    }
  }
 
}

RecruiterController.$inject = ['$mdSidenav', 'recruiterService']

const recruiterComponent = {
  controller: RecruiterController,
  template
}
export default recruiterComponent
