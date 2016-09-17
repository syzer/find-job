import './root.css';
import RumorCreatorController from './rumors/rumor-creator.controller';
const template = require('./root.html');
const dialogTemplate = require('./rumors/rumor-creator.html');

class RootController {
  constructor($mdSidenav, $mdDialog, rumorService) {
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
    this.rumorService = rumorService;
  }

  onMessageClick() {
    this.$mdSidenav('message-sidenav').open();
  }

  openCreateDialog(evt) {
    this.$mdDialog.show({
      template: dialogTemplate,
      controller: RumorCreatorController,
      controllerAs: '$ctrl',
      targetEvent: evt
    }).then(rumor => {
      this.rumorService.registerRumor(rumor);
    })
  }
}
RootController.$inject = ['$mdSidenav', '$mdDialog', 'rumorService'];

const rootComponent = {
  controller: RootController,
  template
};
export default rootComponent;

