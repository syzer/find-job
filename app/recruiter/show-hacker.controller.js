
class ShowHackerController {

  constructor($mdDialog, $scope, hacker) {
    this.$mdDialog = $mdDialog
    this.$scope = $scope
    this.hacker = hacker
  }

  closeDialog() {
    this.$mdDialog.hide();
  }
}

ShowHackerController.$inject = ['$mdDialog', '$scope', 'hacker']

export default ShowHackerController
