import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngMessages from 'angular-messages'
import ngCookies from 'angular-cookies'
import ngResource from 'angular-resource'
import ngSanitize from 'angular-sanitize'
import ngMaterial from 'angular-material'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import rootComponent from './root'
import MessageService from './messages/messages.service.js'
import recruterComponent from './recruter/recruter.component.js'
import RecruterService from './recruter/recruter.service.js'
import HackerService from './hacker/hacker.service.js'

require('angular-material/angular-material.css')

angular.module('findJob', [
  ngCookies, ngResource, ngSanitize, ngAnimate, ngMaterial, ngMessages
]).component('root', rootComponent)
  .component('recruter', recruterComponent)
  .service('recruterService', RecruterService)
  .service('hackerService', HackerService)

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['findJob'], {
      strictDi: true
    })
  })
