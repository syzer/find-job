import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngMessages from 'angular-messages'
import ngCookies from 'angular-cookies'
import ngResource from 'angular-resource'
import ngSanitize from 'angular-sanitize'
import ngMaterial from 'angular-material'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import rootComponent from './root'
import messagesComponent from './messages/messages.component.js'
import MessageService from './messages/messages.service.js'
import rumorComponent from './rumors/rumors.component.js'
import RumorService from './rumors/rumors.service.js'

require('angular-material/angular-material.css')

angular.module('findJob', [
  ngCookies, ngResource, ngSanitize, ngAnimate, ngMaterial, ngMessages
]).component('root', rootComponent)
    .component('messages', messagesComponent)
    .component('rumors', rumorComponent)
    .service('messageService', MessageService)
    .service('rumorService', RumorService)

angular.element(document)
    .ready(() => {
      angular.bootstrap(document, ['findJob'], {
        strictDi: true
      })
    })
