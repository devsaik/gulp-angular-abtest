(function() {
  'use strict';

  angular
    .module('gulpAngularAbtest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('testandtarget', {
        url: '/testandtarget',
        templateUrl: 'app/testandtarget/testandtarget.html',
        controller: 'TestAndTargetController',
        controllerAs: 'testandtarget'
      })
      .state('optimizely', {
        url: '/optimizely',
        templateUrl: 'app/optimizely/optimizely.html',
        controller: 'OptimizelyController',
        controllerAs: 'optimizely'
      })
      .state('agenda', {
        url: '/agenda',
        templateUrl: 'app/agenda/agenda.html',
        controller: 'AgendaController',
        controllerAs: 'agenda'
      });
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }

})();
