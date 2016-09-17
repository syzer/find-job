class HackerService {

  constructor($http, $q) {
    this.$http = $http
    this.$q = $q
    // this is example data so we do not need to curl on every deploy
    this.hackers = [
      {
        "login": "wolfv",
        "id": 885054,
        "avatar_url": "https://avatars.githubusercontent.com/u/885054?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/wolfv",
        "html_url": "https://github.com/wolfv",
        "followers_url": "https://api.github.com/users/wolfv/followers",
        "following_url": "https://api.github.com/users/wolfv/following{/other_user}",
        "gists_url": "https://api.github.com/users/wolfv/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/wolfv/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/wolfv/subscriptions",
        "organizations_url": "https://api.github.com/users/wolfv/orgs",
        "repos_url": "https://api.github.com/users/wolfv/repos",
        "events_url": "https://api.github.com/users/wolfv/events{/privacy}",
        "received_events_url": "https://api.github.com/users/wolfv/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1
      },
      {
        "login": "kaskaderc",
        "id": 834286,
        "avatar_url": "https://avatars.githubusercontent.com/u/834286?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kaskaderc",
        "html_url": "https://github.com/kaskaderc",
        "followers_url": "https://api.github.com/users/kaskaderc/followers",
        "following_url": "https://api.github.com/users/kaskaderc/following{/other_user}",
        "gists_url": "https://api.github.com/users/kaskaderc/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kaskaderc/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kaskaderc/subscriptions",
        "organizations_url": "https://api.github.com/users/kaskaderc/orgs",
        "repos_url": "https://api.github.com/users/kaskaderc/repos",
        "events_url": "https://api.github.com/users/kaskaderc/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kaskaderc/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1
      }
    ]
  }

  getGithubHackers(language = 'python', location = 'Zurich') {
    return this.$http({
      method: 'GET',
      url: `https://api.github.com/search/users?q=location:${location}+language:${language}+type:user`
    }).then(httpData => httpData.data)
      .then(data => {
        return this.analyze(data)
      })
      .catch(console.warn)
  }

  analyze(data) {
    console.log('analyze working')
    return data
  }

}

HackerService.$inject = ['$http', '$q']

export default HackerService


