class MessageService {
  constructor($http, $q) {
    this.$http = $http;
  }

  getMessages() {
    return this.$http({
      method: 'GET',
      url: 'https://1ae3d400.ngrok.io/api/messages'
    }).then(httpData => httpData.data);
  }
}
MessageService.$inject = ['$http', '$q'];

export default MessageService;
