const template = require('./recruiter.html')
import './recruiter.css'

//TODO load hackrService data => store in db ..itp
class RecruiterController {

  constructor($mdSidenav, recruterService) {
    this.$mdSidenav = $mdSidenav
    this.recruterService = recruterService
    console.log('recruter controller')
    this.getHackers = recruterService.getHackers
  }

  //SIDE bar?
  showChat() {
    this.$mdSidenav('message-sidenav').toggle()
  }

  onNewHacker() {
    this.hackers = this.recruterService.getHackers()
    // this.sortRumors()

    //TODO preloader
    this.loadingHackers = false
  }

}

RecruiterController.$inject = ['$mdSidenav', 'recruterService']

const recruiterComponent = {
  controller: RecruiterController,
  template
}
export default recruiterComponent
