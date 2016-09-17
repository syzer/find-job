import './root.css'
import RecruterCreateController from './recruter/recruter-create.controller'
const template = require('./root.html')
const dialogTemplate = require('./recruter/recruter-create.html')

class RootController {

  constructor($mdSidenav, $mdDialog, recruiterService, hackerService) {
    this.$mdSidenav = $mdSidenav
    this.$mdDialog = $mdDialog
    this.recruterService = recruiterService
    this.hackerService = hackerService
    this.searchTerm = ''
  }
  

  loginToGithub() {
    console.log('awesome')
    this.provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(this.provider).then(function (result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log(result)
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    //TODO
  }

  search() {
    this.hackerService.getGithubHackers(this.searchTerm).then(data => this.users = data.items);
  }

  openCreateDialog(evt) {
    this.$mdDialog.show({
      template: dialogTemplate,
      controller: RecruterCreateController,
      controllerAs: '$ctrl',
      targetEvent: evt
    }).then(recruter => {
      this.recruterService.registerRecruter(recruter)
    })
  }
}

RootController.$inject = ['$mdSidenav', '$mdDialog', 'recruiterService', 'hackerService']

const rootComponent = {
  controller: RootController,
  template
}
export default rootComponent

