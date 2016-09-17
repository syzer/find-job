import './root.css'
import RecruiterCreateController from './recruiter/recruiter-create.controller'
import SentimentService from './hacker/sentiment.service'
const template = require('./root.html')
const dialogTemplate = require('./recruiter/recruiter-create.html')

class RootController {

  constructor($mdSidenav, $mdDialog, recruiterService, hackerService) {
    this.$mdSidenav = $mdSidenav
    this.$mdDialog = $mdDialog
    this.recruiterService = recruiterService
    this.hackerService = hackerService
    this.searchTerm = ''
  }

  //TODO remove :)
  nope() {
    console.log('nope')
    SentimentService.getSentiment('bla bla').then(console.log).catch(console.error)
    return true
  }

  loginToGithub() {
    console.log('login github')
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
    let city = this.searchTerm.match(/Zurich/) ? 'Zurich' : 'Basel'
    let language = this.searchTerm.match(/python/) ? 'python' : 'javascript'
    this.hackerService
      .getGithubHackers(language, city)
      .then(data => this.users = data.items)
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

RootController.$inject = ['$mdSidenav', '$mdDialog', 'recruiterService', 'hackerService']

const rootComponent = {
  controller: RootController,
  template
}
export default rootComponent

