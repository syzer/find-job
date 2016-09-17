class FirebaseService {

  constructor($http, $q) {
    this.$http = $http
    this.$q = $q
  }

  getGithubToken() {
    let defered = this.$q.defer();
    if (!this.githubAccess) {
      this.provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(this.provider)
        .then(result => {
          // result.credential.accessToken;
          // result.user
          this.githubAccess = result
          defered.resolve(this.githubAccess)
        })
        .catch(error => {
          console.log(`Error logging in: ${error.message} [${error.code}], ${error.email}, ${error.credential}`)
          defered.reject(error)
        })
    } else {
      defered.resolve(this.githubAccess);
    }
    return defered.promise;
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
