import './root.css'
import RecruiterCreateController from './recruiter/recruiter-create.controller'
const template = require('./root.html')
const dialogTemplate = require('./recruiter/recruiter-create.html')

class RootController {

  constructor($mdSidenav, $mdDialog, recruiterService, hackerService, sentimentService, firebaseService) {
    this.$mdSidenav = $mdSidenav
    this.$mdDialog = $mdDialog
    this.recruiterService = recruiterService
    this.hackerService = hackerService
    this.sentimentService = sentimentService
    this.firebaseService = firebaseService
  }


  loginToGithub(role) {
    console.log('login github')
    this.firebaseService.getGithubToken()
      .then(result => {
        if (role === "hacker") {
          this.hackerLogged = true;
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

RootController.$inject = ['$mdSidenav', '$mdDialog', 'recruiterService', 'hackerService', 'sentimentService', 'firebaseService']

const rootComponent = {
  controller: RootController,
  template
}
export default rootComponent

