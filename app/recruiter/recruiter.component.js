const template = require('./recruiter.html')
import './recruiter.css'

//TODO load hackrService data => store in db ..itp
class RecruiterController {

  constructor($mdSidenav, recruiterService) {
    this.$mdSidenav = $mdSidenav
    this.recruiterService = recruiterService
    this.label = "I am a label"
    console.log('recruter controller')
    this.getHackers = recruterService.getHackers
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
      this.hackers= this.recruiterService.getHackers(this.searchTerm)
    }
  }
 
}

RecruiterController.$inject = ['$mdSidenav', 'recruiterService']

const recruiterComponent = {
  controller: RecruiterController,
  template
}
export default recruiterComponent
