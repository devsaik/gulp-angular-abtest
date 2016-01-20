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
            mbox: 'view2',
            params: {
              "param1": "val1",
              "param2": "val2"
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


    // ngRoute approach
    //enable for ngRoute
    /*_app.run(
      ['adobeTargetOfferService', '$route', '$rootScope',
        function(adobeTargetOfferService, $route, $rootScope) {

          //Step 1: apply route resolve for Target calls
          adobeTargetOfferService.applyTargetToRoutes($route.routes);

          //Step 2: when DOM is update, apply Target offer (flicker control)
          $rootScope.$on("$viewContentLoaded", function(event, next, current) {
            adobeTargetOfferService.applyOffer();
          });

        }
      ]
    );*/


    // UI Router approach
    // enable for UI Router
    /* _app.run(
     ['$rootScope', '$state', 'adobeTargetOfferService',
     function($rootScope, $state, adobeTargetOfferService) {

     //Step 1: apply state resolve for Target calls in $stateChangeStart event
     $rootScope.$on('$stateChangeStart', function(event, next) {
     adobeTargetOfferService.applyTargetToState(next);
     });

     //Step 2: when DOM is update, apply Target offer (flicker control)
     $rootScope.$on("$viewContentLoaded", function(event, next, current) {
     adobeTargetOfferService.applyOffer();
     });

     }
     ]
     );
*/
  })(gulpAngularAbtest, //app module reference
    {
      allowedRoutesFilter: [], // blank for all states or restrict to specific states: ['/','/about','/item/:id']
      disallowedRoutesFilter: [], //exclude specific states: ['/login','/privacy']
      debug: true
    });

  //angular.resumeBootstrap(); // resumes Angular app initialization if it was paused (see note above)

  angular
    .module('gulpAngularAbtest')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
