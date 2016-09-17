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

}

FirebaseService.$inject = ['$http', '$q']

export default FirebaseService
