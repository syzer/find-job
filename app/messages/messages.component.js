const template = require('./messages.html');


class MessageController {
  constructor(messageService) {
    this.messageService = messageService;
    this.messages = [];
    this.loadingMessages = true;
    this.inputMessage = null;
    this.messageService.getMessages().then((messages) => {
      this.messages = messages.reverse();
      this.loadingMessages = false;
    }).catch(() => {
      this.errorMessage = 'Something went wrong...';
      this.loadingMessages = false;
    });
  }

  submitMessage() {
    this.messages = [{
      img: this.messages[0].img,
      text: this.inputMessage
    }, ...this.messages];
    this.inputMessage = '';
  }
}
MessageController.$inject = ['messageService'];


const messagesComponent = {
  controller: MessageController,
  template
};
export default messagesComponent;
