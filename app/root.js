import './root.css'
import RecruiterCreateController from './recruiter/recruiter-create.controller'
const template = require('./root.html')
const dialogTemplate = require('./recruiter/recruiter-create.html')

class RootController {

  constructor($mdSidenav, $mdDialog, recruiterService, hackerService, sentimentService, firebaseService, $window) {
    this.$mdSidenav = $mdSidenav
    this.$mdDialog = $mdDialog
    this.recruiterService = recruiterService
    this.hackerService = hackerService
    this.sentimentService = sentimentService
    this.firebaseService = firebaseService
    this.$window = $window
  }


  loginToGithub(role) {
    console.log('login github')
    this.firebaseService.getGithubToken()
      .then(result => {
        if (role === "hacker") {
          this.hackerLogged = true;
          this.$window.location.href = '/hacker.html'
        } else {
          this.recruiterLogged = true;
        }
        this.user = result.user
      })

    //TODO
  }


  openCreateDialog(evt) {
    this.$mdDialog.show({
      template: dialogTemplate,
      controller: RecruiterCreateController,
      controllerAs: '$ctrl',
      targetEvent: evt
    }).then(recruiter => {
      this.recruiterService.registerRecruiter(recruiter)
    })
  }
}

RootController.$inject = ['$mdSidenav', '$mdDialog', 'recruiterService', 'hackerService', 'sentimentService', 'firebaseService', '$window']

const rootComponent = {
  controller: RootController,
  template
}
export default rootComponent

