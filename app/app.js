import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import rootComponent from './root';
import messagesComponent from './messages/messages.component';
import MessageService from './messages/messages.service';
import rumorComponent from './rumors/rumors.component';
import RumorService from './rumors/rumors.service';

require('angular-material/angular-material.css');

angular.module('myanmarApp', [
  ngCookies, ngResource, ngSanitize, ngAnimate, ngMaterial, ngMessages
]).component('root', rootComponent)
    .component('messages', messagesComponent)
    .component('rumors', rumorComponent)
    .service('messageService', MessageService)
    .service('rumorService', RumorService);

angular.element(document)
    .ready(() => {
      angular.bootstrap(document, ['myanmarApp'], {
        strictDi: true
      });
    });
