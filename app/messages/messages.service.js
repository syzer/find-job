class MessageService {
  constructor($http, $q) {
    this.$http = $http;
  }

  //TODO
  getMessages() {
    return this.$http({
      method: 'GET',
      url: 'https://1ae3d400.ngrok.io/api/messages'
    }).then(httpData => httpData.data)
      .catch(console.warn)
  }
}
MessageService.$inject = ['$http', '$q'];

export default MessageService;
