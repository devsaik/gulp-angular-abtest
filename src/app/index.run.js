(function() {
  'use strict';

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
          $log.info('activate! :: '+typeof($window.optimizely));
          $window.optimizely.push(["activate"]);
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
