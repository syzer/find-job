import './root.css'
import RecruterCreateController from './recruter/recruter-create.controller'
const template = require('./root.html')
const dialogTemplate = require('./recruter/recruter-create.html')

class RootController {

  constructor($mdSidenav, $mdDialog, recruterCreateService) {
    this.$mdSidenav = $mdSidenav
    this.$mdDialog = $mdDialog
    this.recruterCreateService = recruterCreateService
  }

  //TODO
  onMessageClick() {
    this.$mdSidenav('message-sidenav').open()
  }

  //TODO
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

RootController.$inject = ['$mdSidenav', '$mdDialog', 'recruterService', 'recruterCreate']

const rootComponent = {
  controller: RootController,
  template
}
export default rootComponent

