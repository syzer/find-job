const template = require('./recruter.html')
import './recruter.css'

//TODO load hackrService data => store in db ..itp
class RecruterController {

  constructor(recruterService, $mdSidenav) {
    this.recruterService = recruterService
    this.$mdSidenav = $mdSidenav

    this.recruterService.addListener(() => {
      // this.onNewRumors()
    })
  }

  // sortRumors() {
  //   this.rumors = this.rumors.sort((rumorA, rumorB) =>
  //       (rumorB.upvotes - rumorB.downvotes) -
  //       (rumorA.upvotes - rumorA.downvotes)
  //   )
  // }

  //SIDE bar?
  showChat() {
    this.$mdSidenav('message-sidenav').toggle()
  }

  onNewHackers() {
    this.rumors = this.recruterService.getHackers()
    // this.sortRumors()

    //TODO preloader
    this.loadingHackers = false
  }

}

RecruterController.$inject = ['recruterService', '$mdSidenav']

const recruterComponent = {
  controller: RecruterController,
  template
}
export default recruterComponent
