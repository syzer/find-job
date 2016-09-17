const countryData = require('../assets/cities_with_countries.json');

let countryList = [];
const groupedCountries = countryData.reduce((prevVal, item) => {
  if (!item.country) {
    return prevVal;
  }
  if (!prevVal[item.country]) {
    prevVal[item.country] = [];
    countryList.push(item.country);
  }
  prevVal[item.country].push(item.city);
  return prevVal;
}, {});
countryList = countryList.sort();

class RumorCreatorController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
  }

  get countryList() {
    return countryList;
  }

  get cities() {
    return this.country ? groupedCountries[this.country] : [];
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  create() {
    this.$mdDialog.hide({
      title: this.title,
      description: this.description,
      link: this.link,
      country: this.country,
      city: this.city
    });
  }
}

RumorCreatorController.$inject = ['$mdDialog'];

export default RumorCreatorController;
