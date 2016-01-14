(function() {
  'use strict';

  angular
    .module('gulpAngularAbtest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope) {

    $log.debug('runBlock end');
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
