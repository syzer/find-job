class SentimentService {
  constructor($http, $q) {
    this.$http = $http;
  }

  //TODO
  getSentiment(str) {
    return this.$http({
      method: 'GET',
      url: 'https://1ae3d400.ngrok.io/api/messages'
    }).then(httpData => httpData.data).catch(console.warn)
  }
}
SentimentService.$inject = ['$http', '$q'];

export default SentimentService
