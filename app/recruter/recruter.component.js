const template = require('./recruter.html')
import './recruter.css'

//TODO load hackrService data => store in db ..itp
class RecruterController {

  constructor($mdSidenav, recruterService) {
    this.$mdSidenav = $mdSidenav
    this.recruterService = recruterService
    console.log('recruter controller')

    // this.recruterService.addListener(() => {
    // this.onNewRumors()
    // })
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

RecruterController.$inject = ['$mdSidenav', 'recruterService']

const recruterComponent = {
  controller: RecruterController,
  template
}
export default recruterComponent
