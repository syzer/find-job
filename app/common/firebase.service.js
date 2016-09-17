class FirebaseService {



  constructor($http, $q) {
    this.$http = $http
    this.$q = $q
  }

  getGithubToken() {
    if (!this.githubAccessToken) {
      this.provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(this.provider)
        .then(result => {
          this.githubAccessToken = result.credential.accessToken;
          this.user = result.user
        })
        .catch(error => {
          console.log(`Error logging in: ${error.message} [${error.code}], ${error.email}, ${error.credential}`)
        })
    }
  }

  getCached(url) {
    let key = btoa(url)
    let defered = this.$q.defer();
    firebase.database().ref('cache/' + key).once('value')
      .then(snapshot => {
        if (!!snapshot.val()) {
          return defered.resolve(snapshot.val().data);
        } else {
          this.$http({
            method: 'GET',
            url: url
          }).then(httpData => {
            firebase.database().ref('cache/' + key).set({data: httpData.data});
            defered.resolve(httpData.data)
          })
        }
      })

    return defered.promise;
  }

}

FirebaseService.$inject = ['$http', '$q']

export default FirebaseService
