(function() {
  'use strict';

  angular
    .module('gulpAngularAbtest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope,$window) {

    $log.debug('runBlock end');
    try{
      $window.optimizely = window.optimizely || [];
      $window.optimizely.push(["activate"]);
    }
    catch(ex){
      $log.error('Optimizely related '+ex);
    }

    $rootScope.$on('$stateChangeStart',
      function(event, toState){
        try{
         if(toState.url.indexOf('optimizely')>=0){
           window.optimizely.push(["activate", 4574084077]);
         }
        }
        catch(ex){
          $log.error(ex);
        }


      });
  }

})();
