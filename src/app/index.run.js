(function() {
  'use strict';
  var gulpAngularAbtest= angular.module('gulpAngularAbtest');
  /**
   * Note: If you need to have more control over the Angular initialization process, you can use a manual bootstrapping method.
   * Manual bootstrapping allows performing an operation, such as declaring Service and Run Block below, before Angular compiles a page.
   * Read more: https://docs.angularjs.org/guide/bootstrap
   * window.name = 'NG_DEFER_BOOTSTRAP!'; // pauses Angular app initialization
   */

  !(function(app, opts){

    // Initialize Angular module from string or object
    var _app = (typeof app==='string') ? angular.module(app) : app;

    // Set options
    var options = {
      allowedRoutesFilter:      opts.allowedRoutesFilter||[],
      disallowedRoutesFilter:   opts.disallowedRoutesFilter||[],
      debug:                    opts.debug||false
    };

    // Angular Service for Adobe Target calls
    _app.factory('adobeTargetOfferService', ['$q', function($q) {

      var service = {
        data: null, // store Target response
        log: function(msg) {
          if (options.debug && console && console.info) {
            console.info('AT-JS:' + msg)
          };
        },
        // promise resolver
        getOffer: function() {
          service.log('service.getOffer');
          var defer = $q.defer();
          // adobe.target API call to get an offer
          adobe.target.getOffer({
            mbox: 'main',
            params: {
              "param1": "heroku",
              "param2": "mainpage"
            },
            success: function(response) {
              service.log('adobe.target.getOffer success')
              service.data = response;
              defer.resolve(response); //promise is resolved
            },
            error: function(status, error) {
              service.log('adobe.target.getOffer error')
              defer.reject(error);
            }
          });
          return defer.promise;
        },
        applyOffer: function(){
          var data = service.data;
          if (typeof data === 'object' && data && data.length > 0) {

            // append data to DOM
            adobe.target.applyOffer({
              'selector': '#view2 .offer',
              'offer': data
            });
            // clear data
            service.data = null;
          }
        },
        // Helper function to add promise resolving method to selected routes
        applyTargetToState: function($state){
          if (utils.isRouteAllowed($state.url)) {// Allowed Targets
            console.info('$state '+$state.url)
            $state.resolve = $state.resolve || {};
            $state.resolve.offerData = function(adobeTargetOfferService) {
              return adobeTargetOfferService.getOffer();
            };
          };
        },
        // Define all Target routes
        applyTargetToRoutes: function(allRoutes) {
          for (var obj in allRoutes) {
            if (allRoutes.hasOwnProperty(obj)) {
              if (typeof obj === 'string') {
                service.log('route:' + obj);
                if (utils.isRouteAllowed(obj)) {// Allowed Targets
                  var route = allRoutes[obj];
                  route.resolve = route.resolve || {};
                  route.resolve.offerData = function(adobeTargetOfferService) {
                    return adobeTargetOfferService.getOffer();
                  };
                };
              };
            };
          };
        }
      };
      var utils = {
        isElementInArray: function(el, arr) {
          for (var i = 0; i < arr.length; i++) {
            if (el === arr[i]) return true;
          }
          return false;
        },
        isRouteAllowed: function(routeName){
          var result = (options.allowedRoutesFilter.length==0) ? true : false;
          result = (options.allowedRoutesFilter.length>0 &&
          utils.isElementInArray(routeName, options.allowedRoutesFilter)) ? true : result;
          result = (options.disallowedRoutesFilter.length>0 &&
          utils.isElementInArray(routeName, options.disallowedRoutesFilter)) ? false : result;
          return result;
        }
      };
      return service;
    }]);
  })(gulpAngularAbtest, //app module reference
    {
      allowedRoutesFilter: [], // blank for all states or restrict to specific states: ['/','/about','/item/:id']
      disallowedRoutesFilter: [], //exclude specific states: ['/login','/privacy']
      debug: true
    });


  angular
    .module('gulpAngularAbtest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope,$window,$timeout,adobeTargetOfferService) {

    $log.debug('runBlock end');

    $rootScope.$on('$viewContentLoaded',
      function(event, toState){
        try{
        $timeout(function(){
          $log.info('apply offer invoked:: '+adobeTargetOfferService.applyOffer);
          adobeTargetOfferService.applyOffer();
        });

        }
        catch(ex){
          $log.error(ex);
        }


      });


    //Step 1: apply state resolve for Target calls in $stateChangeStart event
    $rootScope.$on('$stateChangeStart', function(event, next) {
      $log.info('state change started');
      adobeTargetOfferService.applyTargetToState(next);
    });

  }

})();
