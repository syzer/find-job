import './root.css'
import RecruiterCreateController from './recruiter/recruiter-create.controller'
const template = require('./root.html')

class RootController {

  constructor($mdSidenav, $mdDialog, recruiterService, hackerService, sentimentService, firebaseService, $window, $cookies) {
    this.$mdSidenav = $mdSidenav
    this.$mdDialog = $mdDialog
    this.recruiterService = recruiterService
    this.hackerService = hackerService
    this.sentimentService = sentimentService
    this.firebaseService = firebaseService
    this.$window = $window
    this.$cookies = $cookies
    this.user = this.$cookies.get('user');
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
        this.$cookies.put('user', this.user)
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

RootController.$inject = ['$mdSidenav', '$mdDialog', 'recruiterService', 'hackerService', 'sentimentService', 'firebaseService', '$window', '$cookies']

const rootComponent = {
  controller: RootController,
  template
}
export default rootComponent

