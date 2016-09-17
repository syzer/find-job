import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngMessages from 'angular-messages'
import ngCookies from 'angular-cookies'
import ngResource from 'angular-resource'
import ngSanitize from 'angular-sanitize'
import ngMaterial from 'angular-material'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import rootComponent from './root'
import recruiterComponent from './recruiter/recruiter.component'
import HackerService from './hacker/hacker.service'
import SentimentService from './hacker/sentiment.service'
import RecruiterService from './recruiter/recruiter.service'
import FirebaseService from './common/firebase.service'


require('angular-material/angular-material.css')

angular.module('findJob', [
  ngCookies, ngResource, ngSanitize, ngAnimate, ngMaterial, ngMessages
])
  .service('recruiterService', RecruiterService)
  .service('hackerService', HackerService)
  .service('sentimentService', SentimentService)
  .service('firebaseService', FirebaseService)
  .component('root', rootComponent)
  .component('recruiter', recruiterComponent)

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['findJob'], {
      strictDi: true
    })
  })
