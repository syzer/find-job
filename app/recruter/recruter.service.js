//TODO
class RecruterService {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;

    this.rumors = [];
    const deffered = this.$q.defer();
    this.initPromise = deffered.promise;
    this.ref = firebase.database().ref('recruter');
    // this.ref.on('value', (dataSnapshot) => {
    //   const rumors = [];
    //   dataSnapshot.forEach(child => {
    //     rumors.push(child.val());
    //   });
    //   this.rumors = rumors;
    //   deffered.resolve();
    // });
    this.ref.on('child_added', datum => {
      this.rumors.push(datum.val());
      this.notifyListeners();
    });
    this.listeners = [];
  }

  getRumors() {
    return this.rumors;
  }

  registerRumor(rumor) {
    const newKey = firebase.database().ref().child('rumors').push().key;
    this.ref.set({
      headline: rumor.title,
      description: rumor.description,
      img: rumor.link,
      upvotes: 0,
      downvotes: 0,
      city: rumor.city,
      country: rumor.country
    });
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener());
  }

  addListener(listener) {
    this.listeners.push(listener);
  }
}

RecruterService.$inject = ['$http', '$q']

export default RecruterService
