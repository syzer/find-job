const template = require('./recruiter.html')
const dialogTemplate = require('./recruiter-list-dialog.html')

import ShowHackerController from './show-hacker.controller'
import './recruiter.css'

//TODO load hackrService data => store in db ..itp
class RecruiterController {

  constructor($mdSidenav, recruiterService, $mdDialog) {
    this.$mdSidenav = $mdSidenav
    this.recruiterService = recruiterService
    this.label = "I am a label"
    console.log('recruiter controller')
    this.getHackers = recruiterService.getHackers
    this.$mdDialog = $mdDialog
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
                this.hackers.sort( (hacker1, hacker2) => hacker2.techScore - hacker1.techScore)
              }, this)
            this.recruiterService.getSocialScore(hacker.login)
              .then(result => {
                hacker.socialScore = result.score
                hacker.profile = result
              })
          })
        })
    }
  }

  openHackerDialog(hacker, evt) {
    console.log(hacker)
    this.$mdDialog.show({
      template: dialogTemplate,
      locals: {
        hacker: hacker
      },
      controller: ShowHackerController,
      controllerAs: '$ctrl',
      targetEvent: evt
    })
  }
 
}

RecruiterController.$inject = ['$mdSidenav', 'recruiterService', '$mdDialog']

const recruiterComponent = {
  controller: RecruiterController,
  template
}
export default recruiterComponent
